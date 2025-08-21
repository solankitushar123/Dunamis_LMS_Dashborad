import React from 'react';
import { FiMenu, FiSearch, FiBell, FiSettings } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';

const routeTitles = {
    // Student routes
    '/': 'Home',
    '/my-courses': 'My Courses',
    '/explore-courses': 'Explore Courses',
    '/assignments': 'Assignments',
    '/homework': 'Homework',
    '/performance': 'My Performance',

    // Teacher routes (optional, if you want)
    '/teacher': 'Teacher Home',
    '/teacher/courses': 'Teacher Courses',
    '/teacher/students': 'My Students',
    '/teacher/schedule': 'My Schedule',
    '/teacher/assignments': 'Teacher Assignments',
    '/teacher/assessments': 'Assessments',
    '/teacher/attendance': 'Attendance & Homework',
    '/teacher/reports': 'Reports',

    // Admin routes
    '/admin': 'Admin Home',

  "/admin/content-management": "Content Management",
  "/admin/content/create": "Content Management / Create",
  "/admin/content/details": "Content Management / Details",
  "/admin/content/edit": "Content Management / Edit",

    // Learning Management
    '/admin/course-management': 'Course Management',
    // '/admin/content-management': 'Content Management',
    '/admin/category-management': 'Category Management',

    // User Management
    '/admin/student-management': 'Student Management',
    '/admin/instructor-management': 'Instructor Management',
    '/admin/admin-management': 'Admin Management',

    // Others
    '/admin/centers': 'Offline Centers',
    '/admin/financials': 'Financials',
    '/admin/enquiries': 'Enquiries',
    '/admin/updates': 'Updates',

    // Common
    '/logout': 'Logout',
};


const Navigation = ({ onMenuClick }) => {
    const location = useLocation();

    // Get the title based on current path or default to 'Dashboard'
    const title = routeTitles[location.pathname] || 'Dashboard';

    return (
        <header className="w-full bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
            {/* Left: Hamburger (mobile) + Page Title */}
            <div className="flex items-center gap-4">
                <button className="md:hidden text-2xl text-gray-700" onClick={onMenuClick}>
                    <FiMenu />
                </button>
                <div className="text-xl font-semibold text-gray-800">{title}</div>
            </div>

            {/* Right: Search + Icons + Profile */}
            <div className="flex items-center gap-4">
                <div className="relative hidden sm:block">
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
                </div>

                <button className="p-2 rounded-full hover:bg-gray-100">
                    <FiBell className="text-xl text-gray-700" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                    <FiSettings className="text-xl text-gray-700" />
                </button>

                <div className="flex items-center gap-2 cursor-pointer">
                    <img
                        src="https://i.pravatar.cc/300"
                        alt="Profile"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-gray-800 font-medium hidden sm:inline">Hrithik Roshan</span>
                </div>
            </div>
        </header>
    );
};

export default Navigation;
