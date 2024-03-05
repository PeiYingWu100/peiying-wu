import Timeline from "./Timeline";
import TimeLines from "./Timelines";
import EducationHistories from "../data/education_histories";

const WorkHistory = () => {
  return (
    <TimeLines>
      {EducationHistories.map((edu, ind) => (
        <Timeline
          key={ind}
          history={edu}
          title={edu.title}
          org={edu.org}
          start={edu.start}
          end={edu.end}
          details={edu.details}
        />
      ))}
    </TimeLines>
  );
};

export default WorkHistory;
