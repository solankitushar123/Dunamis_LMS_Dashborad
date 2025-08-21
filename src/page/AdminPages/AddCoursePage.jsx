import React, { useState } from 'react';
import CourseInfoForm from './CourseForms/CourseInfoForm';
import CourseInstructorsForm from './CourseForms/CourseInstructorForm';
import CoursePricingForm from './CourseForms/CoursePricingForm';
import CourseContentForm from './CourseForms/CourseContentForm';
import CourseMediaForm from './CourseForms/CourseMediaForm';
import { useNavigate } from 'react-router-dom';
const AddCoursePage = () => {
    const tabs = ['Course Info', 'Instructors', 'Pricing', 'Content', 'Media'];
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [draftData, setDraftData] = useState({}); // For saving drafts per tab (mock)

    const handleNext = () => {
        const currentIndex = tabs.indexOf(activeTab);
        if (currentIndex < tabs.length - 1) {
            setActiveTab(tabs[currentIndex + 1]);
        }
    };

    const handleSaveDraft = () => {
        // To be Implement
    };
    const handleCancel = () => {
        navigate('/admin/content-management');
    };
    const renderTabContent = () => {
        switch (activeTab) {
            case 'Course Info':
                return <CourseInfoForm />;
            case 'Instructors':
                return <CourseInstructorsForm />;
            case 'Pricing':
                return <CoursePricingForm />;
            case 'Content':
                return <CourseContentForm />;
            case 'Media':
                return <CourseMediaForm />;
            default:
                return null;
        }
    };

    return (
        <div className="p-6 bg-white rounded shadow">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-xl font-semibold text-gray-800">Create New Course</h1>
            </div>

            {/* Tabs */}
            <div className="flex border-b mb-4 gap-4 overflow-x-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-2 px-4 text-sm whitespace-nowrap border-b-2 ${activeTab === tab
                            ? 'border-gray-800 text-gray-800 font-medium'
                            : 'border-transparent text-gray-500'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div>{renderTabContent()}</div>

            {/* Footer Actions */}
            <div className="col-span-full flex justify-between mt-6">
                <button
                    onClick={handleCancel}
                    className="px-4 py-2 border bg-gray-50 rounded-2xl hover:bg-gray-100"
                >
                    Cancel
                </button>
                <div className="flex gap-2">
                    <button
                        onClick={handleSaveDraft}
                        className="px-4 py-2 border bg-gray-50 rounded-2xl hover:bg-gray-100"
                    >
                        Save Draft
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={activeTab === tabs[tabs.length - 1]}
                        className={`px-4 py-2 rounded-2xl text-white ${activeTab === tabs[tabs.length - 1]
                            ? 'bg-gray-300 cursor-not-allowed'
                            : 'bg-black hover:bg-gray-800'
                            }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddCoursePage;
