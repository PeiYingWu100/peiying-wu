import { ReactElement } from "react";

interface Props {
  title: ReactElement;
  content: string;
}

const TextCard = ({ title, content }: Props) => {
  return (
    <div
      role="card"
      className="flex-initial max-w-xs shadow-2xl rounded-lg p-4 bg-white"
    >
      <h3 className="text-violet-400 text-2xl text-center mb-2">{title}</h3>
      <p className="text-slate-700">{content}</p>
    </div>
  );
};

export default TextCard;
