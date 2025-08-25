import React, { useState } from "react";

// DEMO DATA (Replace with backend fetch as needed)
const demoCourses = [
  {
    id: "bharatnatyam",
    name: "Bharatnatyam for Beginners",
    classType: "Group class",
    payee: "a******@okicicibank",
    mode: { label: "Google Pay", icon: "/gpay.svg" },
    paymentType: "Installments",
    status: { label: "30 installments left", paid: false },
    amountPaid: "₹2,500",
    fullAmount: "₹18,999",
    nextPayment: "24 May, 2025",
  },
  {
    id: "keyboard",
    name: "Keyboard Fundamentals",
    classType: "Group class",
    payee: "**** 3243",
    mode: { label: "Credit/Debit Card", icon: "/mastercard.svg" },
    paymentType: "Installments",
    status: { label: "24 installments left", paid: false },
    amountPaid: "₹5,000",
    fullAmount: "₹18,999",
    nextPayment: "12 May, 2025",
  },
  {
    id: "spanish",
    name: "Spanish for Business",
    classType: "Individual class",
    payee: "**** 3243",
    mode: { label: "Credit/Debit Card", icon: "/mastercard.svg" },
    paymentType: "Full Payment",
    status: { label: "Paid", paid: true },
    amountPaid: "₹16,500",
    fullAmount: "₹18,999",
    nextPayment: null,
  },
];

// Demo checklist/session/payments for each course id
const demoSessionDetails = {
  keyboard: [
    {
      id: "s1",
      course: "Keyboard Fundamentals",
      type: "Group session",
      amount: "₹3,000",
      datetime: "19:03, 16 Apr 2025",
      paymentType: "Installment",
      paymentMode: "UPI",
      txn: "574839294484932",
      status: "Due",
    },
    {
      id: "s2",
      course: "Keyboard Fundamentals",
      type: "Group session",
      amount: "₹3,000",
      datetime: "12:08, 16 Mar 2025",
      paymentType: "Installment",
      paymentMode: "Debit Card",
      txn: "574839294484932",
      status: "Paid",
    },
    {
      id: "s3",
      course: "Keyboard Fundamentals",
      type: "Group session",
      amount: "₹3,000",
      datetime: "22:17, 16 Feb 2024",
      paymentType: "Installment",
      paymentMode: "UPI",
      txn: "574839294484932",
      status: "Paid",
    },
  ],
  bharatnatyam: [
    {
      id: "s1",
      course: "Bharatnatyam for Beginners",
      type: "Group session",
      amount: "₹2,500",
      datetime: "19:03, 16 Apr 2025",
      paymentType: "Installment",
      paymentMode: "Google Pay",
      txn: "883839294484932",
      status: "Due",
    },
  ],
  spanish: [
    {
      id: "s1",
      course: "Spanish for Business",
      type: "Individual",
      amount: "₹12,000",
      datetime: "07:24, 02 Aug 2024",
      paymentType: "Full Payment",
      paymentMode: "Credit Card",
      txn: "123839294484932",
      status: "Paid",
    },
  ],
};

// Detail badge/label row utility
function Detail({ label, value }) {
  return (
    <div className="flex flex-row items-center gap-2 min-w-[120px]">
      <span
        className="text-black/40 text-xs font-normal w-[82px] inline-block"
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 400,
          fontSize: 12,
          lineHeight: "100%",
          letterSpacing: 0,
        }}
      >
        {label}
      </span>
      <span
        className="text-[14px] text-black font-normal"
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 400,
          lineHeight: "100%",
          letterSpacing: 0,
        }}
      >
        {value}
      </span>
    </div>
  );
}

// Upper tab/nav bar + Download Invoices button (responsive)
function PaymentDetailsTopBar({ onDownload }) {
  return (
    <div
      className="flex flex-wrap justify-between items-center w-full mb-6 pt-2 px-0"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      {/* Tabs */}
      <div className="flex gap-0.5 items-center flex-wrap">
        <span
          className="text-[#B0B0B0] text-[16px] font-normal"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          My Info
        </span>
        <span
          className="text-[16px] px-3 font-semibold"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            color: "#18181B",
            borderBottom: "2px solid #212121",
            lineHeight: "100%",
          }}
        >
          Payment Details
        </span>
        <span
          className="text-[#B0B0B0] text-[16px] font-normal"
          style={{ fontFamily: "'Open Sans', sans-serif" }}
        >
          Certificates
        </span>
      </div>
      <button
        className="border border-[#dbdbdb] rounded-full px-5 py-2 text-black bg-white hover:bg-[#f6f6fc] transition text-[15px] font-normal flex items-center gap-2 mt-2 sm:mt-0 select-none"
        style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 400 }}
        onClick={
          typeof onDownload === "function"
            ? onDownload
            : () => alert("Download invoices")
        }
        type="button"
      >
        <svg
          width={18}
          height={18}
          fill="none"
          viewBox="0 0 20 20"
          className="mr-1"
          aria-hidden="true"
          focusable="false"
        >
          <rect x="3" y="4" width="14" height="12" rx="5" fill="#F1F1F7" />
          <path
            d="M10 11V7M10 13.167l-1.167-1.167M10 13.167l1.167-1.167"
            stroke="#191919"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Download Invoices
      </button>
    </div>
  );
}

export default function PaymentDetails() {
  const [selectedId, setSelectedId] = useState(demoCourses[0].id);
  const [checked, setChecked] = useState([]);

  // Dynamic session rows
  const sessions = demoSessionDetails[selectedId] || [];
  const allChecked = checked.length === sessions.length && sessions.length > 0;

  // Row selection handlers
  const toggleCheck = (id) =>
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  const checkAll = () =>
    setChecked(allChecked ? [] : sessions.map((item) => item.id));

  const handleDelete = () => setChecked([]);
  const handleCopy = () =>
    navigator.clipboard.writeText(
      sessions
        .filter((s) => checked.includes(s.id))
        .map((row) => Object.values(row).join(" | "))
        .join("\n")
    );

  // Download invoices logic (plug in real backend here)
  const handleDownloadInvoices = () => {
    alert("Downloading all invoices... (replace this with backend logic)");
  };

  return (
    <div
      className="w-full pt-2"
      style={{ fontFamily: "'Open Sans', sans-serif" }}
    >
      <PaymentDetailsTopBar onDownload={handleDownloadInvoices} />

      {/* HEADING & Subheading */}
      <div
        className="text-base font-semibold mb-1"
        style={{
          fontWeight: 600,
          fontSize: 16,
          lineHeight: "100%",
          letterSpacing: 0,
          color: "#000",
        }}
      >
        {demoCourses.find((c) => c.id === selectedId).name}
      </div>
      <div className="text-xs text-gray-600 mb-4" style={{ fontWeight: 400 }}>
        Select the course to see your homework and session feedback
      </div>

      {/* COURSE SUMMARY CARDS */}
      <div className="flex flex-wrap gap-4 mb-6">
        {demoCourses.map((item) => (
          <div
            key={item.id}
            className={`rounded-2xl px-5 py-4 w-full md:w-[430px] bg-[#f8f8fa] border transition-all shadow ${
              selectedId === item.id ? "border-[#6348c1]" : "border-[#f1f1f7]"
            } cursor-pointer`}
            onClick={() => {
              setSelectedId(item.id);
              setChecked([]);
            }}
            style={{ fontFamily: "'Open Sans', sans-serif" }}
          >
            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1"
              style={{ fontWeight: 600, fontSize: 14 }}
            >
              <span className="font-semibold text-black text-base">
                {item.name}
              </span>
              <span className="bg-[#E7DEF9] text-[#7B51C4] text-xs px-2 py-0.5 rounded-full font-normal ml-1">
                {item.classType}
              </span>
              <span className="ml-auto text-[14px] text-black flex items-center gap-1 font-normal">
                <span>{item.payee}</span>
                {item.mode.icon && (
                  <img
                    src={item.mode.icon}
                    alt={item.mode.label}
                    className="w-5 h-5"
                  />
                )}
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-y-2 flex-wrap gap-x-8 mt-1">
              <Detail
                label="Mode"
                value={
                  <span className="inline-flex items-center gap-1">
                    {item.mode.icon && (
                      <img
                        src={item.mode.icon}
                        alt={item.mode.label}
                        className="w-4 h-4"
                      />
                    )}
                    {item.mode.label}
                  </span>
                }
              />
              <Detail label="Payment Type" value={item.paymentType} />
              <Detail
                label="Status"
                value={
                  item.status.paid ? (
                    <span className="inline-flex items-center gap-1 text-green-500">
                      <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />
                      <span>Paid</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-gray-400">
                      <span className="w-2 h-2 bg-gray-300 rounded-full inline-block" />
                      <span>{item.status.label}</span>
                    </span>
                  )
                }
              />
              <Detail
                label="Amount Paid"
                value={
                  <span>
                    <span className="font-semibold text-black">
                      {item.amountPaid}
                    </span>
                    <span className="line-through ml-1 text-red-600 text-xs">
                      {item.fullAmount}
                    </span>
                  </span>
                }
              />
              {item.nextPayment && (
                <Detail label="Next Payment" value={item.nextPayment} />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* SESSION/PAYMENT TABLE */}
      <div className="rounded-2xl border border-gray-200 bg-white overflow-x-auto shadow-sm">
        <div className="p-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={allChecked}
              onChange={checkAll}
              className="accent-[#6348c1] w-5 h-5"
            />
            <span className="text-black text-sm font-normal">Select All</span>
            <button
              className="ml-3 px-3 rounded bg-gray-100 text-black/80 text-xs font-normal border border-gray-200"
              disabled={!checked.length}
              onClick={handleCopy}
            >
              Copy
            </button>
            <button
              className="ml-1 px-3 rounded bg-gray-100 text-black/80 text-xs font-normal border border-gray-200"
              disabled={!checked.length}
              onClick={handleDelete}
            >
              Delete
            </button>
            <span className="ml-2 text-xs text-gray-400">
              {checked.length ? `${checked.length} Selected` : null}
            </span>
          </div>
        </div>

        {/* TABLE */}
        <table className="min-w-[600px] w-full text-sm font-normal">
          <thead>
            <tr className="text-gray-500 font-normal bg-gray-100">
              <th className="text-left px-4 py-2 font-normal">Course</th>
              <th className="text-left px-2 py-2 font-normal">Session type</th>
              <th className="text-left px-2 py-2 font-normal">Amount</th>
              <th className="text-left px-2 py-2 font-normal">Time & Date</th>
              <th className="text-left px-2 py-2 font-normal">Payment Type</th>
              <th className="text-left px-2 py-2 font-normal">Payment Mode</th>
              <th className="text-left px-2 py-2 font-normal">
                Transaction ID
              </th>
              <th className="text-left px-2 py-2 font-normal">Fee Status</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((row) => (
              <tr
                key={row.id}
                className={`hover:bg-gray-100 transition-colors ${
                  checked.includes(row.id) ? "bg-purple-50" : ""
                }`}
              >
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={checked.includes(row.id)}
                    onChange={() => toggleCheck(row.id)}
                    className="accent-[#6348c1] w-5 h-5 mr-2"
                  />
                  {row.course}
                </td>
                <td className="px-2 py-2">{row.type}</td>
                <td className="px-2 py-2">{row.amount}</td>
                <td className="px-2 py-2">{row.datetime}</td>
                <td className="px-2 py-2">{row.paymentType}</td>
                <td className="px-2 py-2">{row.paymentMode}</td>
                <td className="px-2 py-2">{row.txn}</td>
                <td className="px-2 py-2">
                  {row.status === "Paid" ? (
                    <span className="inline-flex items-center gap-1 text-green-600">
                      <span className="w-2 h-2 bg-green-400 rounded-full" />
                      Paid
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-yellow-500">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                      Due
                    </span>
                  )}
                </td>
              </tr>
            ))}
            {!sessions.length && (
              <tr>
                <td colSpan={8} className="py-4 text-center text-gray-400">
                  No session/payment data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {/* Pagination placeholder */}
        <div className="flex justify-end items-center gap-2 py-3 px-4 text-xs text-gray-400">
          <button className="px-2 rounded border border-gray-200 bg-white hover:bg-gray-100">
            &lt;
          </button>
          <span className="font-semibold text-black">1</span>
          <span>2 ... 12 13</span>
          <button className="px-2 rounded border border-gray-200 bg-white hover:bg-gray-100">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
