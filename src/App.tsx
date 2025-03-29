import Home from './container/home';

export function App() {
  return (
    <div className="bg-[#F5F5F7] lg:h-screen flex items-center">
      <div className="w-full bg-white">
        <div className="max-w-[1440px]  mx-auto">
          <Home />
        </div>
      </div>
    </div>
  );
}
