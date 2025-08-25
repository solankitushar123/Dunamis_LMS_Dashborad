import React, { useState, useRef } from "react";

import PaymentDetails from "./Payment";
import Certificates from "./Certificates";

function ProfileField({ label, value, editing, onChange, type = "text" }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "100%",
          letterSpacing: 0,
        }}
      >
        {label}
      </div>
      {editing ? (
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="rounded-xl border border-[#eceaec] bg-[#fafafa] px-4 py-3"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            fontSize: 14,
            color: "#292929",
            lineHeight: "100%",
            letterSpacing: 0,
          }}
        />
      ) : (
        <div
          className="rounded-xl border border-[#eceaec] bg-[#fafafa] px-4 py-3 truncate"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 400,
            fontSize: 14,
            color: "#929292",
            lineHeight: "100%",
            letterSpacing: 0,
          }}
        >
          {type === "password" ? "•".repeat(value.length) : value}
        </div>
      )}
    </div>
  );
}

export default function ProfilePage() {
  const [tab, setTab] = useState("profile");
  const [user, setUser] = useState({
    fullName: "Abhinav Kumar",
    email: "abhivakumar@gmail.com",
    mobile: "+91 9374839455",
    password: "secretPassword",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  });
  const [editing, setEditing] = useState(false);
  const [fields, setFields] = useState(user);
  const [showPassword, setShowPassword] = useState(false);
  const fileInputRef = useRef(null);

  const handleFieldChange = (field) => (e) =>
    setFields({ ...fields, [field]: e.target.value });

  const saveEdit = () => {
    setUser(fields);
    setEditing(false);
  };
  const cancelEdit = () => {
    setFields(user);
    setEditing(false);
  };
  const handleRemovePhoto = () => setUser((prev) => ({ ...prev, image: "" }));
  const handleEditPhoto = () =>
    fileInputRef.current && fileInputRef.current.click();
  const handleImageFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () =>
        setUser((prev) => ({ ...prev, image: reader.result }));
      reader.readAsDataURL(file);
    }
  };
  const handleChangePassword = () => setShowPassword((show) => !show);
  const initials = (user.fullName || "U")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <main
      className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-4"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      {/* Tabs */}
      <nav className="flex items-center gap-2 mb-6 border-b border-[#eceaec]">
        <button
          className={`px-2 pb-3 pt-2 focus:outline-none border-b-2 ${
            tab === "profile" ? "border-black" : "border-transparent"
          }`}
          style={{
            color: tab === "profile" ? "#000" : "#b0b0b0",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "100%",
            letterSpacing: 0,
          }}
          onClick={() => setTab("profile")}
        >
          Profile
        </button>
        <button
          className={`px-2 pb-3 pt-2 focus:outline-none border-b-2 ${
            tab === "payment" ? "border-black" : "border-transparent"
          }`}
          style={{
            color: tab === "payment" ? "#000" : "#b0b0b0",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "100%",
            letterSpacing: 0,
          }}
          onClick={() => setTab("payment")}
        >
          Payment Details
        </button>
        <button
          className={`px-2 pb-3 pt-2 focus:outline-none border-b-2 ${
            tab === "certificates" ? "border-black" : "border-transparent"
          }`}
          style={{
            color: tab === "certificates" ? "#000" : "#b0b0b0",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "100%",
            letterSpacing: 0,
          }}
          onClick={() => setTab("certificates")}
        >
          Certificates
        </button>
      </nav>

      {/* TAB BODY */}
      {tab === "profile" && (
        <>
          {/* Profile photo & edit section */}
          <div className="flex flex-col items-start gap-5 mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-[#f6f6f6] border border-[#eceaec] flex items-center justify-center">
              {user.image ? (
                <img
                  src={user.image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span
                  className="text-[#b0b0b0] text-[32px] font-bold flex items-center justify-center w-full h-full"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 600,
                    letterSpacing: 0,
                  }}
                >
                  {initials}
                </span>
              )}
            </div>
            {/* File input (hidden) */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageFile}
              className="hidden"
            />
            <div className="flex flex-row gap-3">
              <button
                className="flex items-center gap-1 border border-[#d6d6d6] rounded-lg bg-white px-4 py-1 hover:bg-[#f6f6f6] focus:outline-none"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "100%",
                  letterSpacing: 0,
                  color: "#000",
                }}
                type="button"
                onClick={handleEditPhoto}
              >
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  className="mr-1"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M12.8 3.7a2.5 2.5 0 013.5 3.54l-.79.8-3.53-3.54.8-.8zM2.5 14.29V17.5h3.2l9.44-9.44-3.2-3.2L2.5 14.29z"
                    fill="#666"
                  />
                </svg>
                Edit
              </button>
              <button
                className="flex items-center gap-1 border border-[#d6d6d6] rounded-lg bg-white px-4 py-1 hover:bg-[#f6f6f6] focus:outline-none"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "100%",
                  letterSpacing: 0,
                  color: "#000",
                }}
                type="button"
                onClick={handleRemovePhoto}
                disabled={!user.image}
              >
                Remove Profile Photo
              </button>
            </div>
          </div>

          {/* Profile Details */}
          <div>
            <div
              className="mb-4"
              style={{
                fontFamily: "'Open Sans', sans-serif",
                fontWeight: 600,
                fontSize: 16,
                lineHeight: "100%",
                letterSpacing: 0,
                color: "#000",
              }}
            >
              Profile Details
            </div>
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10"
              onSubmit={(e) => {
                e.preventDefault();
                saveEdit();
              }}
            >
              <ProfileField
                label="Full Name"
                value={editing ? fields.fullName : user.fullName}
                editing={editing}
                onChange={handleFieldChange("fullName")}
              />
              <ProfileField
                label="Email Address"
                value={editing ? fields.email : user.email}
                editing={editing}
                onChange={handleFieldChange("email")}
                type="email"
              />
              <ProfileField
                label="Mobile Number"
                value={editing ? fields.mobile : user.mobile}
                editing={editing}
                onChange={handleFieldChange("mobile")}
              />
              <ProfileField
                label="Password"
                value={editing ? fields.password : user.password}
                editing={editing && showPassword}
                onChange={handleFieldChange("password")}
                type={editing && showPassword ? "text" : "password"}
              />
            </form>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-end gap-3">
              <button
                className="border border-[#d6d6d6] rounded-xl bg-white px-5 py-2 hover:bg-[#f6f6f6] focus:outline-none"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: 14,
                  lineHeight: "100%",
                  letterSpacing: 0,
                  color: "#000",
                }}
                type="button"
                onClick={handleChangePassword}
              >
                {showPassword ? "Hide Password" : "Change Password"}
              </button>
              {!editing ? (
                <button
                  className="rounded-xl bg-black px-7 py-2 hover:bg-[#222] transition focus:outline-none"
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: "100%",
                    letterSpacing: 0,
                    color: "#fff",
                  }}
                  type="button"
                  onClick={() => setEditing(true)}
                >
                  Edit Details
                </button>
              ) : (
                <>
                  <button
                    className="rounded-xl bg-[#e0e0e0] px-6 py-2 transition text-black"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: "100%",
                      letterSpacing: 0,
                      marginRight: 0,
                    }}
                    type="button"
                    onClick={cancelEdit}
                  >
                    Cancel
                  </button>
                  <button
                    className="rounded-xl bg-black px-7 py-2 hover:bg-[#222] transition text-white"
                    style={{
                      fontFamily: "'Open Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: "100%",
                      letterSpacing: 0,
                    }}
                    type="button"
                    onClick={saveEdit}
                  >
                    Save
                  </button>
                </>
              )}
            </div>
          </div>
        </>
      )}

      {tab === "payment" && <PaymentDetails />}

      {tab === "certificates" && <Certificates />}
    </main>
  );
}
