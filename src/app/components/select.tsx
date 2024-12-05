import { Dispatch, SetStateAction } from "react";
import { Toggle } from "./toggle";

interface SelectArgs {
  className?: string;
  classNameInner?: string;
  classNameToggled?: string;
  options: string[];
  curr: number;
  setCurr: Dispatch<SetStateAction<number>>;
}

export function Select ({... args}: SelectArgs) {
  args.className = `${args.className} absolute left-0 right-0 top-[100%] flex-col`;
  return <Toggle {...args} />;
}
