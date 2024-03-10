import Tabs from "../../components/Tabs";
import TabContent from "../../components/TabContent";
import SoftSkills from "./SoftSkills";
import WorkHistory from "./WorkHistory";
import Education from "./EducationHistory";
import Container from "../../components/Container";

const TabTitleList = [
  { title: "Personal Attributes", child: <SoftSkills /> },
  { title: "Employment History", child: <WorkHistory /> },
  { title: "Educational Background", child: <Education /> },
] as const;

const About = () => {
  return (
    <Container
      id="about"
      bgClasses={["bg-gradient-to-r", "from-violet-100", "to-white"]}
      cssClasses={["w-full"]}
    >
      <Tabs>
        {TabTitleList.map((tab, ind) => (
          <TabContent key={ind} title={tab.title}>
            {tab.child}
          </TabContent>
        ))}
      </Tabs>
    </Container>
  );
};

export default About;
