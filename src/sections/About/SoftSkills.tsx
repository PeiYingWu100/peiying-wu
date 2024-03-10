import TextCard from "../../components/TextCard";
import SkillList from "../../data/soft_skills";

const SoftSkills = () => {
  return (
    <div className="flex justify-center gap-2 flex-wrap grow m-4">
      {SkillList.map((skill, ind) => (
        <TextCard
          key={ind}
          title={skill.title}
          content={skill.content}
        ></TextCard>
      ))}
    </div>
  );
};

export default SoftSkills;
