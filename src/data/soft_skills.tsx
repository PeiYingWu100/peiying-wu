import { ReactElement } from "react";

interface Skills {
  title: ReactElement;
  content: string;
}

const SkillList: Skills[] = [
  {
    title: <span>Self-motivated</span>,
    content:
      "I am actively improving my knowledge of Web development through self-study. In addition, I completed multiple online courses relating to TypeScript, React, etc.",
  },
  {
    title: <span>Detail-oriented and organised</span>,
    content:
      "My prior role as a warehouse manager developed my strong detail-orientation and organisation skills.",
  },
  {
    title: <span>Team player and leader</span>,
    content:
      "I was a vice president, co-founder, and active team player in several university societies when I was studying my bachelor’s degree.",
  },
  {
    title: <span>Problem-solving</span>,
    content:
      "I have a background in mathematics, which demonstrates my problem-solving skills.",
  },
  {
    title: <span>Forward-thinking</span>,
    content:
      "My prior role as a vice president and co-founder developed my strong forward-thinking skills. I did regularly in my role at HandUp and Funraisin to find the potential issues of the project.",
  },
  {
    title: (
      <span>
        Multilingual: <br /> English and Mandarin
      </span>
    ),
    content:
      "I am fluent in writing, listening, reading and speaking both languages.",
  },
];

export default SkillList;
