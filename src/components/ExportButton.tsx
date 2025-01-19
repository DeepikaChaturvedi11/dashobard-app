import React from 'react';

const ExportButton: React.FC = () => {
  const handleExport = () => {
    alert('Export functionality coming soon!');
  };

  return (
    <button
      onClick={handleExport}
      className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
    >
      Export Data
    </button>
  );
};
export default ExportButton;