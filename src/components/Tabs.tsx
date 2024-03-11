import { ReactElement, useState } from "react";
import TabBtn from "./TabBtn";

interface Props {
  children: ReactElement[];
}

const Tabs = ({ children }: Props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <ul className="flex list-none pb-8 gap-1">
        {children.map((item, index) => (
          <TabBtn
            active_classes={
              selectedTab === index ? "bg-violet-400 text-white" : "bg-white"
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
