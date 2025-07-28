import { SectionProps } from "../../types/type";
import CalenderCard from "./components/CalenderCard";
import WeatherCard from "./components/WeatherCard";

const WidgetSection = ({ className }: SectionProps) => {
  return (
    <div
      className={`${className} w-full max-w-[1300px] max-h-screen mx-auto flex flex-col gap-5 p-10`}
    >
      <CalenderCard></CalenderCard>
      <WeatherCard></WeatherCard>
    </div>
  );
};

export default WidgetSection;
