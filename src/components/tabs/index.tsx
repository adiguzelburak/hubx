import { useState } from 'react';
import { Tab } from './tab';
import DocumentScanner from './tab-contents/document-scanner';
import { TabsEnum } from '../../lib/tabs';
import SignStamp from './tab-contents/sign-stamp';
import BadgeScanning from './tab-contents/batch-scanning';
import { AnimatePresence } from 'framer-motion';
import AdvancedFilters from './tab-contents/advanced-filters';
import ExportShare from './tab-contents/export-share';

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
      id: TabsEnum.BATCH_SCANNING,
      label: 'Batch Scanning',
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
      <AnimatePresence mode="wait">
        {activeTab === TabsEnum.DOCUMENT_SCANNER && (
          <DocumentScanner key="document-scanner" />
        )}
        {activeTab === TabsEnum.SIGN_STAMP && <SignStamp key="sign-stamp" />}
        {activeTab === TabsEnum.BATCH_SCANNING && (
          <BadgeScanning key="batch-scanning" />
        )}
        {activeTab === TabsEnum.ADVANCED_FILTERS && (
          <AdvancedFilters key="advanced-filters" />
        )}
        {activeTab === TabsEnum.EXPORT_SHARE && (
          <ExportShare key="export-share" />
        )}
      </AnimatePresence>
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
