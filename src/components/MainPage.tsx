import TodoSection from "./TodoSection";
import WidgetSection from "./WidgetSection";

const MainPage = () => {
  return (
    <div className="w-full h-screen flex">
      <TodoSection className="basis-2/3"></TodoSection>
      <WidgetSection className="basis-1/3"></WidgetSection>
    </div>
  );
};

export default MainPage;
