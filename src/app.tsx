import React from "react";
import { Button } from "@/components/ui/button";

export default function App() {
  const [count, setCount] = React.useState<number>(0);
  const handleClick = () => {
    setCount((x) => x + 1);
  };

  return (
    <div
      className={"w-screen h-screen flex flex-col items-center justify-center"}
    >
      <p>
        Vitecn:{" "}
        <a
          href={"https://vite.dev"}
          target={"_blank"}
          className={
            "inline-block no-underline transition-colors hover:text-sky-400 text-sky-500"
          }
        >
          Vite
        </a>{" "}
        +{" "}
        <a
          href={"https://ui.shadcn.com"}
          target={"_blank"}
          className={
            "inline-block no-underline transition-colors hover:text-sky-400 text-sky-500"
          }
        >
          shadcn/ui
        </a>
      </p>

      <div className="mt-2">
        <Button
          variant={"default"}
          onClick={handleClick}
          className="cursor-pointer"
        >
          Clicked {count} times
        </Button>
      </div>
    </div>
  );
}
