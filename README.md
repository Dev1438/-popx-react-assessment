# PopX React Assessment

A React.js application developed as part of the PopX Frontend Assessment. The project replicates the provided UI design with a mobile-centered layout, authentication flow, route protection, form validation, and local storage support.

## 🚀 Live Demo

https://popx-react-assessment.vercel.app

## 📂 GitHub Repository

https://github.com/Dev1438/-popx-react-assessment

---

## 📸 Features

* Pixel-perfect UI implementation
* Mobile app interface centered on the webpage
* React Router DOM navigation
* Public and Private Routes
* User Registration
* User Login
* Protected Profile Page
* Logout Functionality
* Form Validation
* Local Storage Persistence
* Responsive Design
* Clean Component-Based Architecture

---

## 🛠️ Tech Stack

* React.js
* Vite
* React Router DOM
* JavaScript (ES6+)
* HTML5
* CSS3
* Local Storage

---

## 📁 Project Structure

```text
src/
│
├── components/
│   └── MobileLayout.jsx
│
├── pages/
│   ├── Landing.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   └── Profile.jsx
│
├── routes/
│   ├── PrivateRoute.jsx
│   └── PublicRoute.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🔐 Authentication Flow

### Public Routes

* `/`
* `/login`
* `/signup`

### Private Routes

* `/profile`

Users who are not authenticated cannot access protected routes and are automatically redirected to the Login page.

---

## ✅ Form Validation

The application validates:

* Required fields
* Email format
* Empty inputs
* Login credentials

---

## 💾 Local Storage

User information is stored using Local Storage.

### Store User Data

```javascript
localStorage.setItem("user", JSON.stringify(formData));
```

### Store Authentication Status

```javascript
localStorage.setItem("isLoggedIn", "true");
```

### Logout

```javascript
localStorage.removeItem("isLoggedIn");
```

---

## ⚙️ Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Dev1438/-popx-react-assessment.git
```

### Navigate to Project

```bash
cd -popx-react-assessment
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Application will run at:

```text
http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
npm run build
```

Preview Production Build:

```bash
npm run preview
```

---

## 🌐 Deployment

The application is deployed using Vercel.

Live URL:

https://popx-react-assessment.vercel.app

---

## ✨ Improvements Implemented

* Public Route Protection
* Private Route Protection
* Authentication State Management
* Form Validation
* Local Storage Persistence
* Logout Functionality
* Responsive Mobile Layout
* Reusable Components
* Clean Folder Structure

---

## 👨‍💻 Author

**Bakathatla Devender**

* GitHub: https://github.com/Dev1438
* Project Repository: https://github.com/Dev1438/-popx-react-assessment

---

## 📄 License

This project was created for educational and assessment purposes.
