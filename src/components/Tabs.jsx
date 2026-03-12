import React, { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabData = [
    { id: 1, label: 'Tab 1', content: 'This is the content for Tab 1' },
    { id: 2, label: 'Tab 2', content: 'This is the content for Tab 2' },
    { id: 3, label: 'Tab 3', content: 'This is the content for Tab 3' },
  ];

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '20px auto',
    border: '1px solid #ddd',
    borderRadius: '4px',
    overflow: 'hidden',
  };

  const tabListStyle = {
    display: 'flex',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
  };

  const getTabStyle = (tabId) => ({
    padding: '12px 24px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: activeTab === tabId ? '#fff' : 'transparent',
    color: activeTab === tabId ? '#333' : '#666',
    borderBottom: activeTab === tabId ? '3px solid #007bff' : '3px solid transparent',
    fontWeight: activeTab === tabId ? 'bold' : 'normal',
    transition: 'all 0.3s ease',
    fontSize: '16px',
    outline: 'none',
    ':hover': {
      backgroundColor: '#e9e9e9',
    }
  });

  const contentStyle = {
    padding: '24px',
    minHeight: '150px',
    backgroundColor: '#fff',
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      <div style={tabListStyle}>
        {tabData.map((tab) => (
          <button
            key={tab.id}
            style={getTabStyle(tab.id)}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={contentStyle}>
        {tabData.find(tab => tab.id === activeTab).content}
      </div>
    </div>
  );
};

export default TabComponent;