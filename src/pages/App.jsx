import { useMemo, useState } from "react";
import { Ring } from "./Ring";

export const App = () => {
  const [view, setView] = useState("idle");
  const content = useMemo(() => {
    switch (view) {
      case "ring":
        return <Ring />;
      case "idle":
        return <div className="h-7"></div>;
    }
  }, [view]);

  return (
    <>
      <div className="bg-white min-w-[100px] h-fit rounded-full">
        {content}
      </div>
      <button
        className="w-32 h-10 rounded-full ring-1 ring-white bg-gray-950 hover:bg-gray-800"
        onClick={() => setView("idle")}
      >
        idle
      </button>
      <button
        className="w-32 h-10 rounded-full ring-1 ring-white bg-gray-950 hover:bg-gray-800"
        onClick={() => setView("ring")}
      >
        ring
      </button>
    </>
  );
};
