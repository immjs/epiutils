import { Dispatch, SetStateAction } from "react";

interface ToggleArgs {
  className?: string;
  classNameInner?: string;
  classNameToggled?: string;
  options: string[];
  curr: number;
  setCurr: Dispatch<SetStateAction<number>>;
}

export function Toggle(
  args: ToggleArgs
) {
  return (
    <div className={`${args.className} flex`}>
      {
        args.options.map((contents, i) => (
          <button
            key={i}
            className={`flex-1 ${args.classNameInner} ${args.curr === i && args.classNameToggled}`}
            onClick={() => args.setCurr(i)}
          >
            {contents}
          </button>
        ))
      }
    </div>
  );
}
