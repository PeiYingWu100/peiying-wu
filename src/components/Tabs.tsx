import { ReactElement, useState } from "react";
import TabBtn from "./TabBtn";

interface Props {
  children: ReactElement[];
}

const Tabs = ({ children }: Props) => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div>
      <ul className="flex list-none p-0 gap-1">
        {children.map((item, index) => (
          <TabBtn
            active_classes={
              selectedTab === index
                ? "bg-slate-600 text-white"
                : "bg-white text-slate-600"
            }
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </div>
  );
};

export default Tabs;
