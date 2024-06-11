"use client";

import useCarousel from "@/store/useCarousel";
import FeatureOne from "@/assets/img/features-1.png";
import FeatureTwo from "@/assets/img/features-2.png";
import FeatureThree from "@/assets/img/features-3.png";
import FeatureFour from "@/assets/img/features-4.png";
import FeatureFive from "@/assets/img/features-5.png";
import FeatureSix from "@/assets/img/features-6.png";
import FeatureSeven from "@/assets/img/features-7.png";
import FeatureEight from "@/assets/img/features-8.png";
import FeatureNine from "@/assets/img/features-9.png";
import FeatureTen from "@/assets/img/features-10.png";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useId, useState, useRef } from "react";

type features = {
    id: string;
    header: string;
    text: string;
    image: React.ReactNode;
};
const Carousel = (): JSX.Element => {
    const parentContainer = useRef<HTMLDivElement>(null);

    const features = [
        {
            id: useId(),
            header: "Effortlessly Track Bills and Time",
            text: "Follow up on customers with automated payment reminders and keep track of invoice status so you’ll never leave money off the table again.",
            image: FeatureOne
        },
        // {
        //     id: useId(),
        //     header: "Effortlessly Track Bills and Time",
        //     text: "Follow up on customers with automated payment reminders and keep track of invoice status so you’ll never leave money off the table again.",
        //     image: FeatureTwo
        // },
        // {
        //     id: useId(),
        //     header: "Create Free Invoice",
        //     text: "Receive payments in one click by creating a free invoice template for you business or for your Job as a Freelancer.",
        //     image: FeatureThree
        // },
        // {
        //     id: useId(),
        //     header: "Create Free Invoice",
        //     text: "Receive payments in one click by creating a free invoice template for you business or for your Job as a Freelancer.",
        //     image: FeatureFour
        // },
        // {
        //     id: useId(),
        //     header: "Create Free Invoice",
        //     text: "Receive payments in one click by creating a free invoice template for you business or for your Job as a Freelancer.",
        //     image: FeatureFive
        // },
        // {
        //     id: useId(),
        //     header: "Assign Roles and Users",
        //     text: "Ease work within your organization by assigning users and roles. Empower your members to manage transactions and invoices without sharing the username and password.",
        //     image: FeatureSix
        // },
        // {
        //     id: useId(),
        //     header: "Assign Roles and Users",
        //     text: "Ease work within your organization by assigning users and roles. Empower your members to manage transactions and invoices without sharing the username and password.",
        //     image: FeatureSeven
        // },
        // {
        //     id: useId(),
        //     header: "Assign Roles and Users",
        //     text: "Ease work within your organization by assigning users and roles. Empower your members to manage transactions and invoices without sharing the username and password.",
        //     image: FeatureEight
        // },
        // {
        //     id: useId(),
        //     header: "Everything You Need to Secure Your Cashflow",
        //     text: "Follow up on customers with automated payment reminders and keep track of invoice status so you’ll never leave money off the table again.",
        //     image: FeatureNine
        // },
        // {
        //     id: useId(),
        //     header: "Everything You Need to Secure Your Cashflow",
        //     text: "Follow up on customers with automated payment reminders and keep track of invoice status so you’ll never leave money off the table again.",
        //     image: FeatureTen
        // }
    ];

    const { activeSlide, handleScrollLeft, handleScrollRight } = useCarousel();

    return (
        <section>
            <div
                className="min-w-full flex gap-2 overflow-x-auto custom-scrollbar transition-all ease-in-out duration-500 snap-x snap-mandatory scroll-smooth"
                id="slides"
                ref={parentContainer}
            >
                {features.map(feature => (
                    <div className="relative min-w-full bg-black/100 text-white/100 rounded-[40px] p-8 lg:px-12 lg:pt-12 lg:pb-44 lg:mt-14 lg:mb-16" key={feature.id}>
                        <div className="">
                            <h2 className="font-bold text-xl/8 lg:text-3xl lg:w-1/2">
                                {feature.header}
                            </h2>

                            <p className="text-white/90 font-[450] text-sm/7 mt-4 lg:text-base lg:w-1/2">
                                {feature.text}
                            </p>
                        </div>

                        <Image className="hidden lg:block w-full lg:w-auto lg:h-[27rem] object-contain object-center ml-auto -top-12 lg:absolute lg:right-12" src={feature.image} alt={feature.header} />
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-6 mt-8 lg:-mt-8">
                <button className="rounded-full bg-black/100 w-4 h-4" type="button" aria-label="Active Slide"></button>

                <button className="rounded-full bg-black/10 w-4 h-4 hover:bg-black/100 transition-colors duration-300 ease-in-out" type="button" aria-label="Slide 1"></button>

                <button className="rounded-full bg-black/10 w-4 h-4 hover:bg-black/100 transition-colors duration-300 ease-in-out" type="button" aria-label="Slide 1"></button>

                <button className="rounded-full bg-black/10 w-4 h-4 hover:bg-black/100 transition-colors duration-300 ease-in-out" type="button" aria-label="Slide 1"></button>
            </div>
        </section>
    );
};
export default Carousel;
