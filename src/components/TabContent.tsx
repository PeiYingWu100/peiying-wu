import { ReactElement } from "react";

interface Props {
  title: string;
  children: ReactElement;
}

const TabContent = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default TabContent;
