"use client";
import { useTranslations } from "next-intl";
import { Epiutils } from "./components/epiutils";
import { Toggle } from "./components/toggle";
import { useState } from "react";
import { Select } from "./components/select";
import { useTheme } from "@/lib/theme-client";

export default function HomeLoggedIn({ idToken }: { idToken: string }) {
  const tMain = useTranslations("main");
  const [currTab, setCurrTab] = useState(0);
  const CurrentTab = [HomeworkTab][currTab];

  return (
    <>
      <Epiutils />
      <Toggle
        className="bg-half-orange w-full rounded-lg"
        classNameToggled="bg-orange"
        classNameInner="p-4 rounded-lg"
        options={[tMain('homeworks'), tMain('mcqs')]}
        curr={currTab}
        setCurr={setCurrTab}
      />
      <CurrentTab />
    </>
  );
}

function HomeworkTab() {
  const tHW = useTranslations("homeworks");
  const [sortByDropdown, setSortByDropdown] = useState(false);
  const [sortByNumber, setSortByNumber] = useState(0);
  const sortBy = tHW(["due_date", "priority"][sortByNumber]);

  const theme = useTheme();

  return (
    <>
      <div className="relative">
        <button onClick={() => setSortByDropdown(!sortByDropdown)}>
          {tHW("sort_by")}
          {' '}
          <span className="underline">{sortBy}</span>
          {' '}
          <img className="inline-block" src={`/assets/icons/${theme}/chevron.png`} />
        </button>
        {sortByDropdown && <Select
          options={[tHW('due_date'), tHW('priority')]}
          curr={sortByNumber}
          setCurr={(v) => (setSortByDropdown(false), setSortByNumber(v))}
          className="bg-surface-ii rounded-lg"
          classNameInner="p-4 py-2 rounded-lg"
          classNameToggled="bg-surface-i"
        />}
      </div>
      
    </>
  );
}

function SortedByDueDate() {
  const allDates = 
}
