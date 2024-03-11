import { ReactElement } from "react";
import { History } from "../sections/About/Timeline";

interface EducationDetails {
  desc: ReactElement;
}

const UTS: EducationDetails[] = [
  { desc: <p>Academic Excellence Award and Scholarship</p> },
  { desc: <p>Thesis: Data visualization of dementia in Australia </p> },
];

const CCU: EducationDetails[] = [
  {
    desc: <p>Academic Excellence Award</p>,
  },
  {
    desc: <p>GPA: 4/4</p>,
  },
  {
    desc: (
      <p>
        Thesis: "Simultaneous Determinants of Contract Length and Monetary
        Payments in the Franchising Industry"
      </p>
    ),
  },
];

const FJU: EducationDetails[] = [
  {
    desc: (
      <p>
        Vice President at Department of Pure Mathematics Student Association.
      </p>
    ),
  },
  {
    desc: (
      <p>
        Organised events for freshman students such as Freshman Orientation, as
        well as campus fairs and other creative events.
      </p>
    ),
  },
  {
    desc: (
      <p>
        Successfully obtained sponsorship from numerous businesses to fund club
        activities.
      </p>
    ),
  },
  {
    desc: (
      <p>
        Co-Founder/Drummer/Lead Singer at Department of Pure Mathematics Music
        Club.
      </p>
    ),
  },
];

const EducationHistories: History[] = [
  {
    title: "Master of Information Technology",
    org: "University of Technology Sydney - Sydney, Australia",
    start: new Date(2018, 3),
    end: new Date(2019, 11),
    details: UTS.map((item, ind) => (
      <li key={ind} className="list-disc">
        {item.desc}
      </li>
    )),
  },
  {
    title: "Master of International Economics",
    org: "National Chung Cheng University - Taiwan",
    start: new Date(2012, 9),
    end: new Date(2014, 6),
    details: CCU.map((item, ind) => (
      <li key={ind} className="list-disc">
        {item.desc}
      </li>
    )),
  },
  {
    title: "Bachelor of Science: Mathematics",
    org: "Fu Jen Catholic University - Taiwan",
    start: new Date(2006, 9),
    end: new Date(2010, 6),
    details: FJU.map((item, ind) => (
      <li key={ind} className="list-disc">
        {item.desc}
      </li>
    )),
  },
];

export default EducationHistories;
