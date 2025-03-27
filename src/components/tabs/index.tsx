import { useState } from 'react';
import { Tab } from './tab';
import DocumentScanner from './tab-contents/document-scanner';
import { TabsEnum } from '../../lib/tabs';
import SignStamp from './tab-contents/sign-stamp';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(TabsEnum.DOCUMENT_SCANNER);

  const tabs = [
    {
      id: TabsEnum.DOCUMENT_SCANNER,
      label: 'Document Scanner',
      icon: '/assets/tab-icons/document-scanner.svg',
    },
    {
      id: TabsEnum.SIGN_STAMP,
      label: 'Sign & Stamp',
      icon: '/assets/tab-icons/sign-stamp.svg',
    },
    {
      id: TabsEnum.BATCH_PROCESSING,
      label: 'Batch Processing',
      icon: '/assets/tab-icons/batch.svg',
    },
    {
      id: TabsEnum.ADVANCED_FILTERS,
      label: 'Advanced Filters',
      icon: '/assets/tab-icons/advanced-filters.svg',
    },
    {
      id: TabsEnum.EXPORT_SHARE,
      label: 'Export & Share',
      icon: '/assets/tab-icons/export-share.svg',
    },
  ];

  return (
    <div>
      {activeTab === TabsEnum.DOCUMENT_SCANNER && <DocumentScanner />}
      {activeTab === TabsEnum.SIGN_STAMP && <SignStamp />}
      <div className="grid grid-cols-5 z-10">
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
    </div>
  );
}
