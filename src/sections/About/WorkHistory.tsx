import Timeline from "./Timeline";
import TimeLines from "./Timelines";
import EmployHistories from "../../data/employ_histories";

const WorkHistory = () => {
  return (
    <TimeLines>
      {EmployHistories.map((work, ind) => (
        <Timeline key={ind} history={work} />
      ))}
    </TimeLines>
  );
};

export default WorkHistory;
