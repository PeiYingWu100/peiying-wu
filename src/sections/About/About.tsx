import Tabs from "../../components/Tabs";
import TabContent from "../../components/TabContent";
import SoftSkills from "./SoftSkills";
import WorkHistory from "./WorkHistory";
import Container from "../../components/Container";
import AboutMe from "./AboutMe";

const TabTitleList = [
  { title: "Who I Am", child: <AboutMe /> },
  { title: "Employment History", child: <WorkHistory /> },
  { title: "Personal Attributes", child: <SoftSkills /> },
] as const;

const About = () => {
  return (
    <Container
      id="about"
      bgClasses={[
        "bg-gradient-to-r",
        "from-violet-100",
        "to-white",
        "justify-start",
      ]}
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
