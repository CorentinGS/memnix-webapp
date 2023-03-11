"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ISO6991 from "iso-639-1";

export default function LocaleSwitcher() {
  const locales = [
    { code: "en", flag: getFlagEmoji("US") },
    { code: "fr", flag: getFlagEmoji("FR") },
  ];

  const pathname = usePathname();

  // Get the locale from the pathname (e.g. /fr/auth/login) and remove the first slash (/fr/auth/login => fr)
  let locale = pathname.split("/")[1];
  // if locale isnt in the locales array, set it to the first locale in the array
  locales.map((locale) => locale.code).includes(locale) ||
    (locale = locales[0].code);

  const [selected, setSelected] = useState(locale);

  const router = useRouter();

  function getFlagEmoji(countryCode: string) {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  }

  useEffect(() => {
    const currentPath = window.location.pathname;
    const langRegex = /^\/[a-z]{2}(?=(\/|$))/;
    const newPath = `/${selected}${currentPath.replace(langRegex, "")}`;

    router.push(newPath);
  }, [selected]);

  const handleChange = (e: {
    target: { value: string | ((prevState: string) => string) };
  }) => {
    setSelected(e.target.value);
  };

  return (
    <select
      className="hidden md:block my-select-class select select-bordered select-md w-full max-w-[10rem] 0 text-base-content px-5"
      onChange={handleChange}
      value={selected}
    >
      {locales?.map((locale) => (
        <option key={locale.code} value={locale.code}>
          {locale.flag} {ISO6991.getNativeName(locale.code)}
        </option>
      ))}
    </select>
  );
}
