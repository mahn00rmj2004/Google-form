import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Form1 from './Components/Form1'
import EmployeeFeedback from "./Components/Preview";
import Sidebar from './Components/Sidebar';
import TemplateModal from './Components/Template';

const App = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [showTemplates, setShowTemplates] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar onPreviewClick={() => setShowPreview(true)} />

      {/* Form + Sidebar */}
      <div className="flex flex-1 bg-gray-100">
        <div className="flex-1">
          <Form1 />
        </div>

        {/* Sidebar*/}
        <Sidebar onBrowseTemplatesClick={() => setShowTemplates(true)} />
      </div>

      {/* Preview overlay */}
      {showPreview && (
        <EmployeeFeedback onClose={() => setShowPreview(false)} />
      )}

      {/* Template overlay */}
      {showTemplates && (
        <TemplateModal
          isOpen={showTemplates}
          onClose={() => setShowTemplates(false)}
        />

      )}
    </div>
  )
}

export default App
