import { ReactElement } from "react";

export interface History {
  title: string;
  org: string;
  start: Date;
  end: Date;
  details: ReactElement[];
}

interface Props extends History {
  history: History;
}

const Timeline = ({ history }: Props) => {
  return (
    <li className="group relative flex flex-col pb-4 pl-7 last:pb-0">
      <div className="absolute -bottom-2 left-[calc(0.25rem-0.5px)] top-0 w-px bg-violet-900/10 group-first:top-3"></div>
      <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-violet-900 bg-violet-50"></div>
      <h3 className="mt-2 text-base/6 font-semibold text-slate-700">
        {history.title}
      </h3>
      <p className="text-xs/6 text-slate-700">{history.org}</p>
      <p className="font-display text-2xs/6 order-first font-semibold tracking-[0.2em] text-violet-400">
        <time dateTime={history.start.toLocaleString()}>
          {`${history.start.getFullYear()}/${history.start.getMonth() + 1}`}
        </time>{" "}
        -
        <time
          dateTime={history.end.toLocaleString()}
        >{`${history.end.getFullYear()}/${history.end.getMonth() + 1}`}</time>
      </p>
      <ul className="mt-0.5 text-sm/6 text-zinc-400 ml-5">{history.details}</ul>
    </li>
  );
};

export default Timeline;
