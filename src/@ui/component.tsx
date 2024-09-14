import { Fragment, ReactNode } from "react";
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

export function Heading({
  title,
  body,
  id,
}: {
  title: ReactNode;
  body: ReactNode;
  id?: string;
}) {
  return (
    <article id={id}>
      <h2 className="text-2xl font-semibold my-5 text-primary-500">{title}</h2>
      <div className="text-xl">{body}</div>
    </article>
  );
}
