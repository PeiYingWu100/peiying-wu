import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ErrorMessage = ({ children }: Props) => {
  return <p className="text-red-600 font-bold text-xs">{children}</p>;
};

export default ErrorMessage;
