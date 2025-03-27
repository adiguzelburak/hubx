interface LayoutProps {
  tab: string;
  title: string;
  description: string;
}

export default function TabsLayout({ tab, title, description }: LayoutProps) {
  return (
    <div className="h-[610px] bg-red-50 w-full grid grid-cols-2 items-center">
      <div className="w-[610px] h-[560px] bg-blue-400">Phone</div>
      <div className="max-h-[260px] w-[556px] flex flex-col text-end justify-end items-end">
        <div className="text-[#0381FF] font-extrabold mb-4">{tab}</div>
        <div className="text-[#0B122A] font-bold text-[32px] mb-5">{title}</div>
        <p className="text-[#0B122A] font-normal text-[20px] leading-8 tracking-[0.8px] mb-5">
          {description}
        </p>
        <button className="w-[140px] h-[54px] border-[0.5px] border-black/15 px-5 py-2 text-[#0B122A] text-[20px] ">
          Learn More
        </button>
      </div>
    </div>
  );
}
