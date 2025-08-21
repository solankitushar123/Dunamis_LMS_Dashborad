// src/page/StudentPages/AssignmentPage.jsx
import React from "react";

const assignments = [
  {
    id: 1,
    course: "Keyboard Fundamentals",
    dueDate: "2025-06-11 23:59",
    status: "Pending",
    submissionUrl: "",
  },
  {
    id: 2,
    course: "Spanish for Beginners",
    dueDate: "2025-06-15 23:59",
    status: "Completed",
    submissionUrl: "http://youtube.com/video123",
  },
];

export default function AssignmentPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Assignments</h1>
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="py-3 px-4">Course</th>
            <th className="py-3 px-4">Due Date</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Submission URL</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((a) => (
            <tr key={a.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{a.course}</td>
              <td className="py-2 px-4">{a.dueDate}</td>
              <td className="py-2 px-4">{a.status}</td>
              <td className="py-2 px-4">
                {a.status === "Pending" ? (
                  <input
                    type="url"
                    placeholder="Submit video URL"
                    className="border rounded px-2 py-1 w-full"
                    disabled={false}
                  />
                ) : (
                  <a href={a.submissionUrl} target="_blank" rel="noreferrer">
                    View Submission
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
