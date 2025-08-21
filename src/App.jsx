import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Layout Components
import Sidebar from "./components/mainLayout/Sidebar";
import Navigation from "./components/mainLayout/Navbar";

// Student Pages
import StudentHomePage from "./page/StudentPages/StudentHomePage";
import CoursePage from "./page/StudentPages/CoursePage";
import ExploreCourses from "./page/StudentPages/ExploreCourses";
import AssignmentPage from "./page/StudentPages/AssignmentPage";
import HomeworkPage from "./page/StudentPages/HomeworkPage";
import PerformancePage from "./page/StudentPages/PerformancePage";

// Admin Pages
import AdminHomePage from "./page/AdminPages/AdminHomePage";
import ContentManagement from "./page/AdminPages/ContentManagement/ContentManagement";
import ContentDetails from "./page/AdminPages/ContentManagement/ContentDetails";
import ContentCreate from "./page/AdminPages/ContentManagement/ContentCreate";
import ContentEdit from "./page/AdminPages/ContentManagement/ContentEdit";
import CourseManagementPage from "./page/AdminPages/CourseManagementPage";
import ContentManagementPage from "./page/AdminPages/ContentManagementPage";
import CategoryManagementPage from "./page/AdminPages/CategoryManagementPage";
import CreateCourseForm from "./page/AdminPages/AddCoursePage";
import StudentManagementPage from "./page/AdminPages/UserManagement/StudentManagementPage";
import InstructorManagementPage from "./page/AdminPages/UserManagement/InstructorManagementPage";
import AdminManageMentPage from "./page/AdminPages/UserManagement/AdminManageMentPage";
import OffilineCentersPage from "./page/AdminPages/OffilineCentersPage";
import UpdatesPage from "./page/AdminPages/UpdatesPage";
import FinancialPage from "./page/AdminPages/FinancialPage";
import EnquiriesPage from "./page/AdminPages/EnquiriesPage";

// Hot Toast Notifications
import { Toaster } from "react-hot-toast";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user_role = "student"; // Change to 'teacher' or 'admin' as needed, also handled in Sidebar.jsx

  const location = useLocation();

  // Mapping URLs to page titles dynamically
  const pageTitleMap = {
    "/": "Home",
    "/my-courses": "My Courses",
    "/explore-courses": "Explore Courses",
    "/assignments": "Assignments",
    "/homework": "Homework",
    "/performance": "Performance",
    "/admin": "Admin Home",
    "/admin/content-management": "Content Management",
    // Add any additional titles as needed
  };

  const currentTitle = pageTitleMap[location.pathname] || "Dashboard";

  return (
    <div className="flex h-screen overflow-hidden">
      <Toaster position="top-center" />
      <Sidebar
        user_role={user_role}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="flex flex-col flex-1 overflow-auto">
        <Navigation
          onMenuClick={() => setSidebarOpen(true)}
          title={currentTitle}
        />
        <main className="p-6 bg-gray-50 flex-1 overflow-auto">
          <Routes>
            {/* Student Routes */}
            <Route path="/" element={<StudentHomePage />} />
            <Route path="/my-courses" element={<CoursePage />} />
            <Route path="/explore-courses" element={<ExploreCourses />} />
            <Route path="/assignments" element={<AssignmentPage />} />
            <Route path="/homework" element={<HomeworkPage />} />
            <Route path="/performance" element={<PerformancePage />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminHomePage />} />
            <Route
              path="/admin/content-management"
              element={<ContentManagement />}
            />
            <Route
              path="/admin/content/details/:id"
              element={<ContentDetails />}
            />
            <Route path="/admin/content/create" element={<ContentCreate />} />
            <Route path="/admin/content/edit/:id" element={<ContentEdit />} />

            {/* Learning Management */}
            <Route
              path="/admin/course-management"
              element={<CourseManagementPage />}
            />
            <Route path="/admin/add-course" element={<CreateCourseForm />} />
            <Route
              path="/admin/content-management"
              element={<ContentManagementPage />}
            />
            <Route
              path="/admin/category-management"
              element={<CategoryManagementPage />}
            />

            {/* User Management */}
            <Route
              path="/admin/student-management"
              element={<StudentManagementPage />}
            />
            <Route
              path="/admin/instructor-management"
              element={<InstructorManagementPage />}
            />
            <Route
              path="/admin/admin-management"
              element={<AdminManageMentPage />}
            />

            {/* Other Admin Pages */}
            <Route path="/admin/centers" element={<OffilineCentersPage />} />
            <Route path="/admin/financials" element={<FinancialPage />} />
            <Route path="/admin/enquiries" element={<EnquiriesPage />} />
            <Route path="/admin/updates" element={<UpdatesPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
