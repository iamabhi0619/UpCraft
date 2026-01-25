# UpCraft

# 🛠️ UpCraft

UpCraft is a platform that empowers workers to **learn new skills**, **showcase their craft**, and **earn certifications** through practical training and assessments.
It bridges the gap between **skilled workers** and **real-world opportunities**, offering a structured path for growth.

---

## 🚀 Project Overview

### 🎯 Purpose

- Help workers upskill through short video-based courses.
- Provide small quizzes after each course to evaluate learning.
- Generate **digital certificates** for those who pass.
- Allow users to maintain a verified **profile dashboard** that can be shared with employers.

---

## 🧩 Folder Structure

UpCraft/
│
├── backend/ # Node.js + Express + MongoDB API
│ ├── config/ # Database connection and configs
│ ├── controllers/ # Core logic (auth, users, courses, quiz, etc.)
│ ├── middleware/ # Auth, error handling, validation
│ ├── models/ # MongoDB schemas
│ ├── routes/ # Express route files
│ ├── utils/ # Helper functions (JWT, email, cert generator)
│ ├── package.json
│ └── server.js # Entry point
│
├── frontend/ # React + Tailwind client app
│ ├── public/
│ ├── src/
│ │ ├── components/ # Reusable UI elements (Navbar, Footer, Cards)
│ │ ├── pages/ # Page components (Login, Dashboard, Courses, etc.)
│ │ ├── context/ # Auth context for state management
│ │ ├── utils/ # Axios setup and helper functions
│ │ ├── styles/ # Global styles and Tailwind config
│ │ └── App.jsx # Routing setup
│ ├── package.json
│ └── vite.config.js
│
├── .gitignore
└── README.md

---

## 👥 Team Division

| Member                     | Role                      | Responsibilities                                                                                     |
| -------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Team Lead - Rimmi**      | Authentication & Profile  | Build user signup/login, JWT auth, profile update system (backend) and related frontend forms/pages. |
| **Teammate 2 - Shriparna** | Courses Module & Admin    | Built admin dashboards for course and lesson creation and developed the course enrollment and display frontend.|
| **Teammate 3 - Ananya**    | Quiz & Certificate Module | Handle quizzes, results evaluation, and digital certificate generation with frontend integration.    |

All three members will contribute equally to **frontend** and **backend**, as the project is evaluated in both subjects.

---

## ⚙️ Tech Stack

| Category            | Technologies                                |
| ------------------- | ------------------------------------------- |
| **Frontend**        | React.js, Tailwind CSS, Axios, React Router |
| **Backend**         | Node.js, Express.js, MongoDB (Mongoose)     |
| **Authentication**  | JWT (JSON Web Tokens)                       |
| **Version Control** | Git & GitHub                                |
| **Tools**           | VS Code, Postman, Vite                      |

---

## 🧠 Example User Flow

1. Worker signs up using email or phone number.
2. Fills out their skill profile (e.g., Electrical, Carpentry).
3. Browses courses and enrolls in one (e.g., _Basic Electrical Safety_).
4. Watches training videos and completes lessons.
5. Takes a small quiz after finishing.
6. Upon passing, receives a **digital certificate**.
7. Can view or share the certificate from their dashboard.

---

## ⚡ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or remote instance)

### Clone the Repository

```bash
git clone https://github.com/<your-username>/UpCraft.git
cd UpCraft
```

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
   - Create a `.env` file in the backend directory
   - Add `MONGODB_URI=your_mongodb_connection_string` (if using remote MongoDB)
   - Add `JWT_SECRET=your_jwt_secret_key` (for authentication)
   - Add `PORT=5000` (or your preferred port)

4. Seed the database with initial data:
```bash
npm run seed
```

This will create:
- An admin user (email: admin@upcraft.com, password: admin123)
- A sample student user (email: student@upcraft.com, password: student123)

5. Start the backend server:
```bash
npm run dev
```

The backend will start on port 5000 by default (http://localhost:5000).

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm run dev
```

The frontend will start on port 5173 by default (http://localhost:5173).

---

## 🔐 Default Credentials

### Admin
- Email: admin@upcraft.com
- Password: admin123

### Student
- Email: student@upcraft.com
- Password: student123

---

## 📁 Project Structure Details

### Backend API Endpoints

#### Authentication
- POST `/api/v1/register` - Register a new student
- POST `/api/v1/login` - Student login
- POST `/api/v1/admin/login` - Admin login

#### Student Routes
- GET `/api/v1/courses` - Get all courses
- GET `/api/v1/courses/:id` - Get course by ID
- GET `/api/v1/categories` - Get all categories

#### Admin Routes
- GET `/api/v1/admin/dashboard` - Get dashboard statistics
- GET `/api/v1/admin/users` - Get all users
- DELETE `/api/v1/admin/users/:id` - Delete a user
- GET `/api/v1/admin/categories` - Get all categories
- POST `/api/v1/admin/categories` - Create a new category
- PUT `/api/v1/admin/categories/:id` - Update a category
- DELETE `/api/v1/admin/categories/:id` - Delete a category

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
