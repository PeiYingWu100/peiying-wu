import Timeline from "./Timeline";
import TimeLines from "./Timelines";
import EmployHistories from "../data/employ_histories";

const WorkHistory = () => {
  return (
    <TimeLines>
      {EmployHistories.map((work, ind) => (
        <Timeline
          key={ind}
          employ_history={work}
          title={work.title}
          org={work.org}
          start={work.start}
          end={work.end}
          work_details={work.work_details}
        />
      ))}
    </TimeLines>
  );
};

export default WorkHistory;
