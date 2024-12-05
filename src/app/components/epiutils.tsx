import { useTranslations } from "next-intl";

export function Epiutils () {
  const translationsCommon = useTranslations('common');

  return <h1 className="text-4xl m-0 w-fit font-head">{translationsCommon('epiutils')}</h1>;
};