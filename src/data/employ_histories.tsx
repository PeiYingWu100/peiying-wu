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
  {
    desc: (
      <p>
        Skills: <strong>PHP, HTML, CSS, JavaScript, JQuery, SQL</strong>
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
  {
    desc: (
      <p>
        Skills: <strong>HTML, CSS, JavaScript, React</strong>
      </p>
    ),
  },
];

const BInspiringIntern: EmploymentDetails[] = [
  {
    desc: (
      <p>
        Supported a not-for-profit to develop, manage and maintain its strategic
        partnerships and relationships with universities, corporations, and
        other external organisations.
      </p>
    ),
  },
  {
    desc: (
      <p>
        Utilised Microsoft Excel to track progress, responses and queries from
        potential sponsors.
      </p>
    ),
  },
  {
    desc: (
      <p>
        Enhanced my project management and professional communication skills.
      </p>
    ),
  },
  {
    desc: (
      <p>
        Skills: <strong>Customer service, Microsoft Excel</strong>
      </p>
    ),
  },
];

const G4Logistics: EmploymentDetails[] = [
  {
    desc: <p>Responsible for warehouse management and organisation.</p>,
  },
  {
    desc: (
      <p>
        Utilised Microsoft Excel to track progress, responses and queries from
        potential sponsors.
      </p>
    ),
  },
  {
    desc: <p>Monitored over 10, 000 inventory products.</p>,
  },
  {
    desc: (
      <p>
        Managed sales orders and drafted financial reports and relevant
        presentations every week.
      </p>
    ),
  },
  {
    desc: <p>Liaised between departments and international clients.</p>,
  },
  {
    desc: (
      <p>
        Skills:{" "}
        <strong>Customer service, Microsoft Excel, Warehouse Management</strong>
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
  {
    title: "Partnerships Intern",
    org: "B.Inspiring Inc., Sydney, New South Wales",
    start: new Date(2019, 1),
    end: new Date(2019, 10),
    details: BInspiringIntern.map((item, ind) => (
      <li key={ind} className="list-disc">
        {item.desc}
      </li>
    )),
  },
  {
    title: "Logistics Officer",
    org: "G4 Technology, Taipei, Taiwan",
    start: new Date(2014, 9),
    end: new Date(2015, 11),
    details: G4Logistics.map((item, ind) => (
      <li key={ind} className="list-disc">
        {item.desc}
      </li>
    )),
  },
];

export default EmployHistories;
