import { ReactNode } from "react";

interface Props {
  message: string;
  children: ReactNode;
}

const Tooltip = ({ message, children }: Props) => {
  return (
    <div className="group relative flex items-center justify-center">
      {children}
      <span className="absolute bottom-12 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
        {message}
      </span>
    </div>
  );
};

export default Tooltip;
