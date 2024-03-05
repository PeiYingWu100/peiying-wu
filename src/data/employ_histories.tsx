import { ReactElement } from "react";
import Link from "../components/Link";
import { History } from "../components/Timeline";

interface EmploymentDetails {
  desc: ReactElement;
}

const FunraisinDev: EmploymentDetails[] = [
  { desc: <p>Employee of the Month!</p> },
  { desc: <p>Customized more than 200 sites!</p> },
  {
    desc: (
      <p>
        Christmas Concept Examples:{" "}
        <Link href="https://www.womencan.org.au/event/honour-her/honour-wall">
          Women can – Honour Wall
        </Link>
      </p>
    ),
  },
];

const HandUpDev: EmploymentDetails[] = [
  {
    desc: (
      <p>
        Customized web application for students with mental issues to make
        appointments with health counsellors.
      </p>
    ),
  },
  {
    desc: (
      <p>
        Liaised with the Founder, Backend Developer and the Designer to work out
        the application workflow, provided technical input, and communicated
        technical risks/challenges.
      </p>
    ),
  },
  {
    desc: (
      <p>
        Demo: <Link href="https://youtu.be/Fr2xcJivhvE">Student interface</Link>{" "}
        & <Link href="https://youtu.be/I9eygQUlHzE">Counsellor Dashboard</Link>
      </p>
    ),
  },
];

const EmployHistories: History[] = [
  {
    title: "Platform/ Full-Stack Developer",
    org: "Funraisin, Sydney, New South Wales",
    start: new Date(2020, 9),
    end: new Date(2023, 5),
    details: FunraisinDev.map((item, ind) => (
      <li key={ind} className="list-disc">
        {item.desc}
      </li>
    )),
  },
  {
    title: "Front-end Developer",
    org: "HandUp, Sydney, New South Wales",
    start: new Date(2020, 2),
    end: new Date(2020, 9),
    details: HandUpDev.map((item, ind) => (
      <li key={ind} className="list-disc">
        {item.desc}
      </li>
    )),
  },
];

export default EmployHistories;
