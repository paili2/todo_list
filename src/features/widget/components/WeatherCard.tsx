"use client";

import { useEffect, useState } from "react";
import Text from "@/src/shared/ui/Text";

const WeatherCard = () => {
  const [temp, setTemp] = useState<number | null>(null);
  const [city, setCity] = useState<string>("Seoul");

  useEffect(() => {
    const getWeather = async (lat?: number, lon?: number) => {
      try {
        let url = "";

        if (lat && lon) {
          // 좌표 기반 요청
          url = `/api/weather?lat=${lat}&lon=${lon}`;
        } else {
          // 기본 도시로 요청
          url = `/api/weather?q=Seoul`;
        }

        const res = await fetch(url);
        const data = await res.json();
        setTemp(data.main.temp);
        setCity(data.name);
      } catch (err) {
        console.error("날씨 데이터 가져오기 실패", err);
      }
    };

    // 위치 요청
    if (typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          getWeather(latitude, longitude);
        },
        (error) => {
          console.warn("위치 접근 거부 또는 오류 → 서울로 fallback");
          getWeather(); // fallback to 서울
        }
      );
    } else {
      getWeather(); // fallback to 서울
    }
  }, []);

  return (
    <div className="w-full h-[150px] border-none rounded-2xl shadow-lg p-7 flex flex-col gap-5 justify-center">
      <Text
        variant="subTitle"
        basicText={`${city}'s Weather`}
        className="border-b border-gray-300 pb-3"
      />
      <Text variant="title" basicText={temp !== null ? `${temp}°C` : ""} />
    </div>
  );
};

export default WeatherCard;
