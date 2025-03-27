import TabsLayout from './components/tabs-layout';

export function App() {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center h-screen">
      <TabsLayout
        tab="Sign & Stamp"
        title="One-Tap Focus"
        description="Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!"
      />
    </div>
  );
}
