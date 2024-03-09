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
          history={item.props}
          title={item.props.title}
          org={item.props.org}
          start={item.props.start}
          end={item.props.end}
          details={item.props.details}
        />
      ))}
    </ul>
  );
};

export default TimeLines;
