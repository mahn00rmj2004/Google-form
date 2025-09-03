import React from "react";
import { IoClose } from "react-icons/io5";

const TemplateModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const templates = [
        { title: "Event Feedback", desc: "Post-event satisfaction with ratings & comments" },
        { title: "Job Application", desc: "Collect candidate info & resume upload" },
        { title: "Customer Satisfaction (CSAT + NPS)", desc: "NPS, usage questions & comments" },
        { title: "Course Evaluation", desc: "Education-focused feedback for instructors" },
        { title: "Event Registration", desc: "Basic registration form with date & time" },
        { title: "RSVP", desc: "Yes/No RSVP with meal preference" },
        { title: "Bug Report", desc: "Repro steps + file upload screenshot" },
        { title: "Employee Feedback", desc: "Internal company pulse survey" },
        { title: "Lead Capture", desc: "Simple marketing lead form" },
        { title: "Quiz (Multiple Choice)", desc: "Preconfigured quiz mode with scoring" },
    ];

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white w-[800px] max-h-[90vh] rounded-xl shadow-lg flex flex-col">

                {/* Header*/}
                <div className="flex items-center justify-between border-b px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Choose a template
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                        <IoClose />
                    </button>
                </div>

                {/* Templates list*/}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 overflow-y-auto"
                    style={{ maxHeight: "calc(90vh - 64px)" }}>
                    {templates.map((t, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-4 flex flex-col justify-between shadow-sm hover:shadow-md transition"
                        >
                            <div>
                                <h3 className="font-medium text-gray-900">{t.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{t.desc}</p>
                            </div>
                            <button className="mt-4 bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-indigo-700">
                                Use this
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default TemplateModal;
