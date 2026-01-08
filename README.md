# 🥗 Diet Tracker ✨  
*A modern, intelligent diet planning web app*

A high-performance **Diet Planning Application** built using a **Django REST Framework** backend and a **React.js** frontend.  
The app features a **3D Glassmorphism UI**, **animated cards**, and **automatic grouping** of food items per person with real-time calorie totals.

---

## 🌟 Key Highlights

✔ Smart calorie tracking  
✔ Grouped food entries by person  
✔ Live total calorie calculation  
✔ 3D animated glass UI  
✔ Multi-person diet tracking  
✔ Task completion & deletion  

---

## 🖥️ Visual Tour & Features

### 🏠 1. Main Dashboard
A futuristic dashboard with 3D animated background and glass-effect input fields.

![Main Dashboard](./assets/Screenshot%202026-01-08%20144357.png)

---

### ➕ 2. Adding Food Items
Users enter **Name**, **Food Item**, and **Calories**.  
Active fields glow with glass-style lighting.

![Adding Items](./assets/Screenshot%202026-01-08%20144438.png)

---

### 📊 3. Automatic Grouping & Totals
All food items entered for the same person are grouped into a **single 3D card**.  
Calories are **summed automatically** at the bottom.

![Grouped Items](./assets/Screenshot%202026-01-08%20144500.png)

---

### 👨‍👩‍👧 4. Multi-Person Tracking
Click **“New Person”** to begin tracking meals for another person while previous cards stay visible in a responsive grid.

![Multiple Cards](./assets/Screenshot%202026-01-08%20144550.png)

---

### ✅ 5. Marking & Removing Items
✔ Tick items when consumed (green strike-through effect)  
❌ Remove individual food entries instantly  

![Marking and Removing](./assets/Screenshot%202026-01-08%20144626.png)  
![Completion View](./assets/Screenshot%202026-01-08%20144601.png)

---

### 🔄 6. Resetting the Form
Click **“New Person”** to clear the form and start tracking another person’s meals without refreshing.

![Reset Form](./assets/Screenshot%202026-01-08%20144801.png)

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|-----------|
| **Frontend** | React.js, CSS3 (3D transforms, Glassmorphism) |
| **Backend** | Django, Django REST Framework |
| **Database** | SQLite3 |
| **Styling** | Custom 3D CSS, Glass UI, Poppins Google Font |

---

## ⚙️ Installation & Setup

### 🧩 Backend
```
cd backend
venv\Scripts\activate
python manage.py migrate
python manage.py runserver
----
Backend runs at:
🔹http://127.0.0.1:8000/
----
API Endpoint:
🔹http://127.0.0.1:8000/api/items/
----
🎨 Frontend
🔹cd myapp
🔹npm install
🔹npm start
----
Frontend runs at:
 🔹http://localhost:3000
----
🧪 Features Tested
✔ Add new food items
✔ Auto group by person
✔ Live calorie totals
✔ Mark items as done
✔ Delete entries
✔ Multi-person tracking
----
🚀 Future Enhancements

🔹 User authentication
🔹 Weekly & monthly calorie reports
🔹 Nutrition breakdown (protein, carbs, fats)
🔹 Cloud database
🔹 Mobile responsive UI
----
🧠 Why This Project Matters
🔹This project demonstrates:
🔹Full-stack development
🔹REST API integration
🔹React state management
🔹Modern UI/UX
🔹Clean backend architecture
---
Perfect for internships, interviews, and real-world projects 💼✨
