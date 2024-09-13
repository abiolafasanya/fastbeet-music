import { twMerge } from "tailwind-merge";

// utility function components
export function Component({ children }: { children: React.ReactNode }) {
  return <div className="w-full h-full">{children}</div>;
}

export function Center({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={twMerge(["w-full h-full max-w-6xl mx-auto", className])}>
      {children}
    </div>
  );
}
