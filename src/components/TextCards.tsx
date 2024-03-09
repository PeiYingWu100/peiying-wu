import { ReactElement } from "react";
import TextCard from "./TextCard";

interface Props {
  children: ReactElement[];
}

const TextCards = ({ children }: Props) => {
  return (
    <div className="flex justify-center gap-2 flex-wrap grow m-4">
      {children.map((item, ind) => (
        <TextCard
          key={ind}
          title={item.props.title}
          content={item.props.content}
        />
      ))}
    </div>
  );
};

export default TextCards;
