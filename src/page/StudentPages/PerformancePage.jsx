// src/page/StudentPages/PerformancePage.jsx
import React from "react";

const feedbackList = [
  {
    id: 1,
    course: "Keyboard Fundamentals",
    date: "16 June 2025",
    comment:
      "Great progress with finger placement based on the chart. Continued effort needed.",
  },
  {
    id: 2,
    course: "Spanish For Business",
    date: "01 June 2025",
    comment:
      "Good improvement in conversational skills. Practice daily vocabulary.",
  },
  {
    id: 3,
    course: "Bharatnatyam for Beginners",
    date: "15 May 2025",
    comment:
      "Focus more on posture and rhythm. Try to rehearse dance steps more.",
  },
];

const stats = [
  { label: "Assignments Completed", value: 20 },
  { label: "Pending Assignments", value: 10 },
  { label: "Courses Enrolled", value: 5 },
  { label: "Certificate Earned", value: 3 },
];

const certificates = [
  {
    id: 1,
    title: "Keyboard GRADE 1 Certificate TCL",
    awardedTo: "Mr. Akhil Joy",
    date: "24 Dec, 2024",
    description:
      "Awarded for completion of Keyboard Fundamentals. Tireless efforts and high standard of excellence.",
  },
];

export default function PerformancePage() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      {/* Breadcrumbs & Header */}
      <nav className="text-sm mb-4 text-gray-600">
        DUNAMIS &nbsp; / &nbsp;
        <span className="font-semibold">My Performance</span>
      </nav>
      <h1 className="text-3xl font-bold mb-8">My Performance</h1>

      {/* Top Info Panel */}
      <section className="bg-white rounded-lg shadow p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Student Info */}
        <div className="col-span-1 flex flex-col items-center text-center space-y-4">
          <div className="bg-gray-300 w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            AK
          </div>
          <h2 className="font-semibold text-xl">Abhinav Kumar</h2>
          <p className="text-gray-600">abhivavkumar@gmail.com</p>
          <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full">
            Logout
          </button>
        </div>

        {/* Performance Feedback */}
        <div className="col-span-2 bg-gray-100 rounded-lg p-4 max-h-[320px] overflow-y-auto">
          <h3 className="font-semibold mb-3 text-gray-700">Recent Feedback</h3>
          <ul className="space-y-4">
            {feedbackList.map((item) => (
              <li key={item.id} className="bg-white rounded p-4 shadow">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{item.course}</span>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <p className="text-gray-700 text-sm">{item.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Monthly Stats */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Monthly Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded shadow p-5 flex flex-col items-center"
            >
              <p className="text-gray-500 text-sm">{s.label}</p>
              <p className="text-3xl font-semibold">{s.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Certificates</h2>
        <div className="space-y-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded shadow p-6 flex flex-col md:flex-row justify-between items-center"
            >
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-gray-600">{cert.awardedTo}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
                <p className="mt-2 text-gray-700">{cert.description}</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Profile & Payments */}
      <section className="bg-white rounded shadow p-6 max-w-4xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Profile Details</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-gray-700 text-sm">Full Name</label>
              <input
                type="text"
                defaultValue="Abhinav Kumar"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="abhivavkumar@gmail.com"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm">
                Mobile Number
              </label>
              <input
                type="tel"
                defaultValue="+91 9374839455"
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-3">
              Save Changes
            </button>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Change Password</h3>
          <div className="space-y-3">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full border px-3 py-2 rounded"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full border px-3 py-2 rounded"
            />
            <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 mt-3">
              Update Password
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
