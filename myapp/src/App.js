import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [personName, setPersonName] = useState('');
  const [age, setAge] = useState('');
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');

  const API_URL = 'http://127.0.0.1:8000/api/items/';

  useEffect(() => { fetchItems(); }, []);

  const fetchItems = async () => {
    try {
      const res = await axios.get(API_URL);
      setItems(res.data);
    } catch (err) { console.error("Error fetching data", err); }
  };

  const handleAddFood = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_URL, {
        person_name: personName,
        age: parseInt(age),
        food_name: foodName,
        calories: parseInt(calories),
        is_completed: false
      });
      setFoodName('');
      setCalories('');
      fetchItems();
    } catch (err) { alert("Server Error. Ensure Django is running."); }
  };

  const deleteItem = async (id) => {
    await axios.delete(`${API_URL}${id}/`);
    fetchItems();
  };

  const toggleTick = async (item) => {
    await axios.put(`${API_URL}${item.id}/`, { ...item, is_completed: !item.is_completed });
    fetchItems();
  };

  // Grouping logic: Merges items with the same Person Name into one object
  const groupedData = items.reduce((acc, item) => {
    if (!acc[item.person_name]) {
      acc[item.person_name] = { age: item.age, foods: [] };
    }
    acc[item.person_name].foods.push(item);
    return acc;
  }, {});

  return (
    <div className="container">
      <h1 className="title-3d">DIET TRACKER</h1>

      <div className="glass-form">
        <div className="input-row">
          <input placeholder="Person Name" value={personName} onChange={e => setPersonName(e.target.value)} />
          <input placeholder="Age" type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        <form onSubmit={handleAddFood} className="input-row">
          <input placeholder="Food Item" value={foodName} onChange={e => setFoodName(e.target.value)} required />
          <input placeholder="Calories" type="number" value={calories} onChange={e => setCalories(e.target.value)} required />
          <div className="action-btns">
            <button type="submit" className="btn-add">Add Item</button>
            <button type="button" onClick={() => {setPersonName(''); setAge('');}} className="btn-end">New Person</button>
          </div>
        </form>
      </div>

      <div className="grid">
        {Object.keys(groupedData).map(name => (
          <div key={name} className="card-3d">
            <h2 className="person-header">{name} <span className="age-tag">({groupedData[name].age} yrs)</span></h2>
            <div className="food-container">
              {groupedData[name].foods.map(f => (
                <div key={f.id} className={`food-line ${f.is_completed ? 'checked' : ''}`}>
                  <input type="checkbox" checked={f.is_completed} onChange={() => toggleTick(f)} />
                  <span className="food-text">{f.food_name} <b>{f.calories} cal</b></span>
                  <button className="del-icon" onClick={() => deleteItem(f.id)}>×</button>
                </div>
              ))}
            </div>
            <div className="card-footer">
              <strong>Total: </strong>
              <span>{groupedData[name].foods.reduce((sum, f) => sum + f.calories, 0)} kcal</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;