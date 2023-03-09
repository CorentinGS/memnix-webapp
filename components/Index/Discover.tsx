// Path: components /Index/Discover.tsx

import React from "react";
import {useTranslations} from 'next-intl';
import {BiWorld} from "react-icons/bi";
import {FiFeather} from "react-icons/fi";
import {IoRocketSharp} from "react-icons/io5";
import {DiOpensource} from "react-icons/di";

export default function Discover() {
    const t = useTranslations('Discover');
    const items = [
        [
            {
                key: t("features.personalized_learning"),
                description: t("features.personalized_learning_description"),
                icon: BiWorld
            },
            {
                key: t("features.modern"),
                description: t("features.modern_description"),
                icon: IoRocketSharp
            }
        ],
        [
            {
                key: t("features.open_source_free"),
                description: t("features.open_source_free_description"),
                icon: DiOpensource
            },
            {
                key: t("features.accessible"),
                description: t("features.accessible_description"),
                icon: FiFeather
            }
        ]
    ]
    return (
        <section className="scroll-mt-16" id="features">
            <div className="px-4 py-16 mx-auto max-w-6xl lg:px-8 lg:py-20">
                <div className="mb-10 md:mx-auto sm:text-center md:mb-12 max-w-3xl">
                    <p className="text-base text-primary font-semibold tracking-wide uppercase">
                        {t("features.features")}
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading"
                    >
                        {t("features.what_you_get")}
                    </h2>
                </div>
                <div className="grid mx-auto space-y-6 md:grid-cols-2 md:space-y-0">
                    {
                        items.map((subitems) => (
                            <div  className="space-y-8 sm:px-8">
                                {subitems.map(({key, description , icon: Icon }) => (
                                    <div  key={key} className="flex max-w-md flex-row">
                                        <div className="mb-4 mr-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full">
                                                {Icon && <Icon className="h-12 w-12"/>}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="mb-3 text-xl font-bold">{key}</h3>
                                            <p className="">{description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}