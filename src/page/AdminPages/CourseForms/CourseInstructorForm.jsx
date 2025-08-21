import React, { useState, useRef, useEffect } from 'react';

const instructorOptions = [
    { value: 'instructor1', label: 'Instructor Name 1' },
    { value: 'instructor2', label: 'Instructor Name 2' },
    { value: 'instructor3', label: 'Instructor Name 3' },
];

const InstructorForm = () => {
    const [selectedInstructors, setSelectedInstructors] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleSelect = (option) => {
        if (selectedInstructors.find((i) => i.value === option.value)) {
            // Remove if already selected
            setSelectedInstructors((prev) =>
                prev.filter((i) => i.value !== option.value)
            );
        } else {
            // Add if not selected
            setSelectedInstructors((prev) => [...prev, option]);
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Instructors</label>
            <div
                ref={dropdownRef}
                className="relative w-full bg-gray-100 rounded-2xl border border-gray-200 min-h-[48px] flex items-center flex-wrap gap-1 px-3 py-1 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
            >
                {/* Selected pills */}
                {selectedInstructors.length === 0 && (
                    <span className="text-gray-500 select-none">Select instructors</span>
                )}
                {selectedInstructors.map((inst) => (
                    <div
                        key={inst.value}
                        className="flex items-center bg-white rounded-2xl px-3 py-1 text-sm text-gray-700"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        {inst.label}
                        <button
                            onClick={() =>
                                setSelectedInstructors((prev) =>
                                    prev.filter((i) => i.value !== inst.value)
                                )
                            }
                            className="ml-2 text-gray-400 hover:text-red-500 focus:outline-none"
                            aria-label={`Remove ${inst.label}`}
                        >
                            ✕
                        </button>
                    </div>
                ))}

                {/* Dropdown icon */}
                <svg
                    className="ml-auto w-4 h-4 text-gray-600 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? 'M6 15l6-6 6 6' : 'M19 9l-7 7-7-7'} />
                </svg>

                {/* Dropdown options */}
                {isOpen && (
                    <ul className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-2xl bg-white border border-gray-200 shadow-lg text-sm">
                        {instructorOptions.map((option) => {
                            const isSelected = selectedInstructors.some(
                                (i) => i.value === option.value
                            );
                            return (
                                <li
                                    key={option.value}
                                    className={`cursor-pointer select-none px-4 py-2 ${isSelected ? 'bg-gray-100 text-gray-900' : 'hover:bg-gray-50'
                                        }`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleSelect(option);
                                    }}
                                >
                                    {option.label}
                                    {isSelected && (
                                        <span className="ml-2 text-green-500 font-bold">✓</span>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default InstructorForm;
