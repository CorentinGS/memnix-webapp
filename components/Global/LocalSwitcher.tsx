"use client";

import {usePathname, useRouter} from 'next/navigation';
import {SetStateAction, useEffect, useState} from "react";
import path from "path";
import ISO6991 from "iso-639-1";

export default function LocaleSwitcher() {

    const locales = [{code: 'en', flag: getFlagEmoji("US")}, {code: 'fr', flag: getFlagEmoji("FR")}];

    const pathname = usePathname();
    const locale = path.basename(pathname)

    const [selected, setSelected] = useState(locale);


    const router = useRouter();

    function getFlagEmoji(countryCode: string) {
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map(char => 127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    }


    useEffect(() => {
        console.log('selected', selected);
        router.push(selected);

    }, [selected]);

    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
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