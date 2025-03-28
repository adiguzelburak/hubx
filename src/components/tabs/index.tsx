import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FreeMode, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { TabsEnum } from '../../lib/tabs';
import { Tab } from './tab';
import AdvancedFilters from './tab-contents/advanced-filters';
import BadgeScanning from './tab-contents/batch-scanning';
import DocumentScanner from './tab-contents/document-scanner';
import ExportShare from './tab-contents/export-share';
import SignStamp from './tab-contents/sign-stamp';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(TabsEnum.DOCUMENT_SCANNER);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    console.log(swiper);
    setActiveIndex(swiper.activeIndex);
  };

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
      <div className="lg:hidden block h-[120px]">
        <Swiper
          slidesPerView={1.25}
          centeredSlides={!(activeIndex === 0 || activeIndex === 4)}
          onSlideChange={handleSlideChange}
          spaceBetween={0}
          freeMode={true}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Grid, FreeMode]}
          className="mySwiper"
        >
          {tabs.map((tab, index) => (
            <SwiperSlide key={tab.id}>
              <Tab
                index={index}
                label={tab.label}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                icon={tab.icon}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden lg:grid grid-cols-5 z-10">
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
