import React, { useState } from "react";
import {
  FiHome,
  FiBookOpen,
  FiClipboard,
  FiCheckSquare,
  FiBarChart2,
  FiLogOut,
  FiCalendar,
  FiEdit3,
  FiGrid,
  FiFileText,
  FiUser,
  FiUserCheck,
  FiDollarSign,
  FiMessageCircle,
  FiBell,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { PiStudentBold } from "react-icons/pi";
import { FaBuilding } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

// Sidebar Component
const Sidebar = ({ isOpen, onClose, userRole = "student" }) => {
  const [isDesktopOpen, setIsDesktopOpen] = useState(true);

  // Menu Definitions
  const studentMenu = [
    { to: "/", icon: <FiHome />, text: "Home" },
    { to: "/my-courses", icon: <FiBookOpen />, text: "My Courses" },
    { to: "/explore-courses", icon: <FiClipboard />, text: "Explore Courses" },
    { to: "/assignments", icon: <FiCheckSquare />, text: "Assignments" },
    { to: "/homework", icon: <FiCheckSquare />, text: "Homework" },
    { to: "/performance", icon: <FiBarChart2 />, text: "My Performance" },
  ];

  const teacherMenu = [
    { to: "/teacher", icon: <FiHome />, text: "Home" },
    { to: "/teacher/courses", icon: <FiBookOpen />, text: "My Courses" },
    { to: "/teacher/students", icon: <PiStudentBold />, text: "My Students" },
    { to: "/teacher/schedule", icon: <FiCalendar />, text: "My Schedule" },
    { to: "/teacher/assignments", icon: <FiClipboard />, text: "Assignments" },
    {
      to: "/teacher/assessments",
      icon: <FiCheckSquare />,
      text: "Assessments",
    },
    {
      to: "/teacher/attendance",
      icon: <FiEdit3 />,
      text: "Attendance & Homework",
    },
    { to: "/teacher/reports", icon: <FiBarChart2 />, text: "Reports" },
  ];

  const adminMenu = [
    {
      section: null,
      items: [{ to: "/admin", icon: <FiHome />, text: "Home" }],
    },
    {
      section: "LEARNING MANAGEMENT",
      items: [
        {
          to: "/admin/course-management",
          icon: <FiBookOpen />,
          text: "Course Management",
        },
        {
          to: "/admin/content-management",
          icon: <FiFileText />,
          text: "Content Management",
        },
        {
          to: "/admin/category-management",
          icon: <FiGrid />,
          text: "Category Management",
        },
      ],
    },
    {
      section: "USER MANAGEMENT",
      items: [
        {
          to: "/admin/student-management",
          icon: <PiStudentBold />,
          text: "Student Management",
        },
        {
          to: "/admin/instructor-management",
          icon: <FiUser />,
          text: "Instructor Management",
        },
        {
          to: "/admin/admin-management",
          icon: <FiUserCheck />,
          text: "Admin Management",
        },
      ],
    },
    {
      section: "OTHERS",
      items: [
        { to: "/admin/centers", icon: <FaBuilding />, text: "Offline Centers" },
        { to: "/admin/financials", icon: <FiDollarSign />, text: "Financials" },
        {
          to: "/admin/enquiries",
          icon: <FiMessageCircle />,
          text: "Enquiries",
        },
        { to: "/admin/updates", icon: <FiBell />, text: "Updates" },
      ],
    },
  ];

  const getMenuToRender = () => {
    if (userRole === "student") return studentMenu;
    if (userRole === "teacher") return teacherMenu;
    return adminMenu;
  };

  const renderMenu = () => {
    const menu = getMenuToRender();

    if (userRole === "admin") {
      // Admin menu has sections
      return menu.map((section, index) => (
        <div key={index} className="mb-4">
          {section.section && isDesktopOpen && (
            <div className="text-xs text-gray-500 uppercase px-4 py-1 tracking-wide">
              {section.section}
            </div>
          )}

          {section.items.map((item, i) => (
            <SidebarLink
              key={`${index}-${i}`}
              to={item.to}
              icon={item.icon}
              text={item.text}
              onClick={onClose}
              isDesktopOpen={isDesktopOpen}
              isFirst={index === 0 && i === 0}
            />
          ))}
        </div>
      ));
    }

    // Student & Teacher menus (flat arrays)
    return menu.map((item, index) => (
      <SidebarLink
        key={index}
        to={item.to}
        icon={item.icon}
        text={item.text}
        onClick={onClose}
        isDesktopOpen={isDesktopOpen}
        isFirst={index === 0}
      />
    ));
  };

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden transition-opacity",
          { hidden: !isOpen }
        )}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div
        className={clsx(
          "fixed z-40 md:static md:translate-x-0 md:flex",
          "top-0 left-0 h-full bg-white border-r shadow-sm flex-col justify-between transition-all duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          isDesktopOpen ? "md:w-64" : "md:w-16"
        )}
      >
        {/* Toggle Button */}
        <div className="hidden md:block absolute top-1/2 -right-4 z-50 transform -translate-y-1/2">
          <button
            onClick={() => setIsDesktopOpen(!isDesktopOpen)}
            className="bg-white border rounded-full shadow p-1 hover:bg-gray-100"
          >
            <span className="text-xl transition-transform duration-200">
              {isDesktopOpen ? <FiChevronLeft /> : <FiChevronRight />}
            </span>
          </button>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div>
            {/* Logo */}
            {isDesktopOpen && (
              <img
                src="/dunamisMusic.png"
                alt="DUNAMIS Logo"
                className="mb-5 h-10 w-auto ml-2 mt-1 sm:h-16"
              />
            )}

            {/* Navigation */}
            <nav
              className={clsx(
                "flex flex-col gap-2 px-2 text-gray-700",
                !isDesktopOpen && "mt-[100px]"
              )}
            >
              {renderMenu()}
            </nav>
          </div>
          <div className="mt-5 mb-5 border-t pt-2">
            <SidebarLink
              to="/logout"
              icon={<FiLogOut />}
              text="Logout"
              onClick={onClose}
              isDesktopOpen={isDesktopOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
};

// SidebarLink Component
const SidebarLink = ({ icon, text, to, onClick, isDesktopOpen }) => (
  <NavLink
    to={to}
    onClick={onClick}
    title={!isDesktopOpen ? text : ""}
    className={({ isActive }) =>
      clsx(
        "flex items-center px-4 py-2 rounded-md transition-all cursor-pointer",
        isDesktopOpen ? "gap-3 justify-start" : "justify-center",
        isActive
          ? "bg-gray-100 font-semibold text-black"
          : "text-gray-700 hover:bg-gray-100"
      )
    }
  >
    <span className="text-xl">{icon}</span>
    {isDesktopOpen && <span className="text-sm font-medium">{text}</span>}
  </NavLink>
);

export default Sidebar;
