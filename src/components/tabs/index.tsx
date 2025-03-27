import { useState } from 'react';
import { Tab } from './tab';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: 'Document Scanner',
      icon: '/assets/tab-icons/document-scanner.svg',
    },
    { id: 1, label: 'Sign & Stamp', icon: '/assets/tab-icons/sign-stamp.svg' },
    { id: 2, label: 'Batch Processing', icon: '/assets/tab-icons/batch.svg' },
    {
      id: 3,
      label: 'Advanced Filters',
      icon: '/assets/tab-icons/advanced-filters.svg',
    },
    {
      id: 4,
      label: 'Export & Share',
      icon: '/assets/tab-icons/export-share.svg',
    },
  ];

  return (
    <div className="grid grid-cols-5">
      {tabs.map((tab, index) => (
        <Tab
          index={index}
          key={tab.id}
          label={tab.label}
          isActive={activeTab === tab.id}
          onClick={() => setActiveTab(tab.id)}
          icon={tab.icon}
        />
      ))}
    </div>
  );
}
