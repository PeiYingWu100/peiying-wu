interface Props {
  title: string;
  index: number;
  active_classes: string;
  setSelectedTab: (index: number) => void;
}

const TabBtn = ({ title, index, active_classes, setSelectedTab }: Props) => {
  return (
    <li className="grow">
      <button
        className={`border-2 border-violet-400 rounded-lg w-full py-2 hover:bg-violet-400 hover:text-white ${active_classes}`}
        onClick={() => setSelectedTab(index)}
      >
        {title}
      </button>
    </li>
  );
};

export default TabBtn;
