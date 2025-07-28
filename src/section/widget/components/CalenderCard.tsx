"use client";

import Text from "@/src/shared/ui/Text";
import { useEffect, useState } from "react";

const CalenderCard = () => {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="w-full h-[150px] border-none rounded-2xl shadow-lg p-7 flex flex-col gap-2 justify-center">
      {now && (
        <>
          <Text
            variant="date"
            basicText={`${days[now.getDay()]} ${pad(
              now.getDate()
            )}, ${now.getFullYear()}`}
          />
          <Text
            variant="title"
            basicText={`${pad(now.getHours())}:${pad(now.getMinutes())}:`}
            pointText={`${pad(now.getSeconds())}`}
          />
        </>
      )}
    </div>
  );
};

export default CalenderCard;
