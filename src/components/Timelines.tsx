import { ReactElement } from "react";
import Timeline from "./Timeline";

interface Props {
  children: ReactElement[];
}

const TimeLines = ({ children }: Props) => {
  return (
    <ul role="list" className="m-8 max-w-screen-md">
      {children.map((item, ind) => (
        <Timeline
          key={ind}
          employ_history={item.props}
          title={item.props.title}
          org={item.props.org}
          start={item.props.start}
          end={item.props.end}
          work_details={item.props.work_details}
        />
      ))}
    </ul>
  );
};

export default TimeLines;
