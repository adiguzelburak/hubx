import Tabs from './components/tabs';
import TabsLayout from './components/tabs/tabs-layout';

export function App() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <TabsLayout
          tab="Sign & Stamp"
          title="One-Tap Focus"
          description="Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!"
        />
        <Tabs />
      </div>
    </div>
  );
}
