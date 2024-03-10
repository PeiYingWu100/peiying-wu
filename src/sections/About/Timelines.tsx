import { ReactElement } from "react";
import Timeline from "./Timeline";

interface Props {
  children: ReactElement[];
}

const TimeLines = ({ children }: Props) => {
  return (
    <ul role="list" className="m-8 max-w-screen-md">
      {children.map((item, ind) => (
        <Timeline key={ind} history={item.props.history} />
      ))}
    </ul>
  );
};

export default TimeLines;
