import Tabs from "../../components/Tabs";
import TabContent from "../../components/TabContent";
import SoftSkills from "./SoftSkills";
import WorkHistory from "./WorkHistory";
import Education from "./EducationHistory";

const TabTitleList = [
  { title: "Personal Attributes", child: <SoftSkills /> },
  { title: "Employment History", child: <WorkHistory /> },
  { title: "Educational Background", child: <Education /> },
] as const;

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[calc(100svh-74px)] flex flex-col justify-start p-3 sm:p-16 bg-gradient-to-r from-violet-100 to-white"
    >
      <div className="max-w-5xl mx-auto w-full">
        <Tabs>
          {TabTitleList.map((tab, ind) => (
            <TabContent key={ind} title={tab.title}>
              {tab.child}
            </TabContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default About;
