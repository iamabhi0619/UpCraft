import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/updateProfile";
import ChangePassword from "./pages/changePassword";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import PrivateRoute from "./components/PrivateRoute";
import UserLayout from "./components/UserLayout";
import CourseDetail from "./pages/CourseDetail";
import Lesson from "./pages/Lesson";
import Quiz from "./pages/Quiz";
import Certificate from "./pages/Certificate";

// Admin Imports
import AdminLayout from "./components/admin/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageCategories from "./pages/admin/ManageCategories";
import ManageCourses from "./pages/admin/ManageCourses";
import ManageUsers from "./pages/admin/ManageUsers";
import CourseEditor from "./pages/admin/CourseEditor";
import AdminRoute from "./components/admin/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-950 text-white font-sans">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* User & Public Routes (wrapped in UserLayout to show Navbar) */}
          <Route element={<UserLayout />}>
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
            <Route path="/course/:courseId/lesson/:lessonId" element={<Lesson />} />
            <Route path="/course/:courseId/quiz" element={<Quiz />} />
            <Route path="/course/:courseId/certificate" element={<Certificate />} />
          </Route>

          {/* User Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/updateProfile" element={<UpdateProfile />} />
            <Route path="/changePassword" element={<ChangePassword />} />
          </Route>

          {/* Admin Routes (No Main Navbar, uses AdminLayout) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="categories" element={<ManageCategories />} />
              <Route path="courses" element={<ManageCourses />} />
              <Route path="courses/new" element={<CourseEditor />} />
              <Route path="courses/edit/:courseId" element={<CourseEditor />} />
              <Route path="users" element={<ManageUsers />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;