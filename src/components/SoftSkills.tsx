import TextCards from "./TextCards";
import TextCard from "./TextCard";
import SkillList from "../data/soft_skills";

const SoftSkills = () => {
  return (
    <TextCards>
      {SkillList.map((skill, ind) => (
        <TextCard
          key={ind}
          title={skill.title}
          content={skill.content}
        ></TextCard>
      ))}
    </TextCards>
  );
};

export default SoftSkills;
