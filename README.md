# PopX React Assessment

A React.js application built as part of the PopX Frontend Assessment. The application replicates the provided UI design with pixel-perfect styling, mobile-centered layout, page navigation, authentication flow, route protection, form validation, and local storage support.

## Live Demo

Deployed Application: https://your-vercel-link.vercel.app

## GitHub Repository

Repository Link: https://github.com/your-username/popx-react-assessment

---

## Features

* Pixel-perfect UI implementation based on the provided design
* Mobile app interface centered on the webpage
* React Router DOM navigation
* Public and Private Routes
* Form validation
* Local Storage data persistence
* User registration and login functionality
* Protected Profile page
* Logout functionality
* Responsive design
* Clean and reusable code structure

---

## Tech Stack

* React.js
* Vite
* React Router DOM
* JavaScript (ES6+)
* HTML5
* CSS3
* Local Storage

---

## Project Structure

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

## Authentication Flow

### Public Routes

* /
* /login
* /signup

### Private Routes

* /profile

Users attempting to access private routes without authentication are redirected to the login page.

---

## Validation

The application validates:

* Required fields
* Email format
* Empty inputs
* Login credentials

---

## Local Storage Usage

### User Data

```javascript
localStorage.setItem("user", JSON.stringify(formData));
```

### Authentication State

```javascript
localStorage.setItem("isLoggedIn", "true");
```

### Logout

```javascript
localStorage.removeItem("isLoggedIn");
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/popx-react-assessment.git
```

Navigate to the project:

```bash
cd popx-react-assessment
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

Preview Production Build:

```bash
npm run preview
```

---

## Improvements Implemented

* Route protection
* Authentication handling
* Reusable layout component
* Form validation
* Local storage persistence
* Responsive design
* Clean folder structure

---

## Author

Bakathatla Devender

Email: [your-email@example.com](mailto:your-email@example.com)

LinkedIn: https://linkedin.com/in/your-profile

GitHub: https://github.com/your-username
