import Tabs from "./Tabs";
import TabContent from "./TabContent";
import SoftSkills from "./SoftSkills";
import WorkHistory from "./WorkHistory";
import Education from "./Education";

const TabTitleList = [
  { title: "Personal Attributes", child: <SoftSkills /> },
  { title: "Employment History", child: <WorkHistory /> },
  { title: "Educational Background", child: <Education /> },
] as const;

const About = () => {
  return (
    <section id="about" className="min-h-[calc(100svh-74px)] bg-zinc-50">
      <div className="flex flex-col justify-center sm:gap-4 p-3 sm:p-16 max-w-5xl mx-auto">
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
