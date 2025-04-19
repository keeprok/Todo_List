export default function DetialLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center  min-h-screen">
      <div className="w-full max-w-[1200px] bg-white  sm:px-6 lg:px-8 z-[-2]">{children}</div>
    </div>
  );
}
