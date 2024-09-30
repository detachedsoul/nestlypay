"use client";

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
import Image, { StaticImageData } from "next/image";
import { useId, useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

type features = {
    id: string;
    header: string;
    text: string;
    image: StaticImageData;
};

const Carousel = (): JSX.Element => {
    const features: features[] = [
        {
            id: useId(),
            header: "Effortlessly Track Bills and Time",
            text: "Follow up on customers with automated payment reminders and keep track of invoice status so you’ll never leave money off the table again.",
            image: FeatureOne
        },
        {
            id: useId(),
            header: "Effortlessly Track Bills and Time",
            text: "Follow up on customers with automated payment reminders and keep track of invoice status so you’ll never leave money off the table again.",
            image: FeatureTwo
        },
        {
            id: useId(),
            header: "Create Free Invoice",
            text: "Receive payments in one click by creating a free invoice template for you business or for your job as a freelancer.",
            image: FeatureThree
        },
        {
            id: useId(),
            header: "Create Free Invoice",
            text: "Receive payments in one click by creating a free invoice template for you business or for your job as a freelancer.",
            image: FeatureFour
        },
        {
            id: useId(),
            header: "Create Free Invoice",
            text: "Receive payments in one click by creating a free invoice template for you business or for your job as a freelancer.",
            image: FeatureFive
        },
        {
            id: useId(),
            header: "Assign Roles and Users",
            text: "Ease work within your organization by assigning users and roles. Empower your members to manage transactions and invoices without sharing the username and password.",
            image: FeatureSix
        },
        {
            id: useId(),
            header: "Assign Roles and Users",
            text: "Ease work within your organization by assigning users and roles. Empower your members to manage transactions and invoices without sharing the username and password.",
            image: FeatureSeven
        },
        {
            id: useId(),
            header: "Assign Roles and Users",
            text: "Ease work within your organization by assigning users and roles. Empower your members to manage transactions and invoices without sharing the username and password.",
            image: FeatureEight
        },
        {
            id: useId(),
            header: "Everything You Need to Secure Your Cashflow",
            text: "Follow up on customers with automated payment reminders and keep track of invoice status so you’ll never leave money off the table again.",
            image: FeatureNine
        },
        {
            id: useId(),
            header: "Everything You Need to Secure Your Cashflow",
            text: "Follow up on customers with automated payment reminders and keep track of invoice status so you’ll never leave money off the table again.",
            image: FeatureTen
        }
    ];

    const parentContainer = useRef<HTMLDivElement>(null);

    const [activeSlide, setActiveSlide] = useState(0);

    const nextSlide = useCallback(() => {
		setActiveSlide((prevSlide) => {
			const newActiveSlide =
				prevSlide === features.length - 1 ? 0 : prevSlide + 1;

			const slideWidth = parentContainer!.current!.offsetWidth;
			const gap = 8; // 8px for gap-2

			const newScrollPosition = (slideWidth + gap) * newActiveSlide;

			parentContainer!.current!.scrollLeft = newScrollPosition;

			return newActiveSlide;
		});
	}, [features.length]);

	useEffect(() => {
		const autoSlide = setInterval(() => {
			nextSlide();
		}, 5000);

		return () => clearInterval(autoSlide);
	}, [nextSlide]);

    return (
		<section className="section-padding">
			<div
				className="min-w-full flex gap-2 overflow-x-auto custom-scrollbar transition-all ease-in-out duration-500 snap-x snap-mandatory scroll-smooth"
				id="slides"
				ref={parentContainer}
			>
				{features.map((feature: features) => (
					<div
						className="min-w-full relative my-12 bg-black/100 text-white/100 rounded-[40px] p-8 sm:pb-24 lg:px-12 lg:pt-12 lg:pb-48 xl:pb-44"
						key={feature.id}
					>
						<div className="sm:w-3/5 lg:w-1/2">
							<h2 className="font-bold text-xl/8 lg:text-3xl">
								{feature.header}
							</h2>

							<p className="text-white/90 font-[450] text-sm/7 mt-4 lg:text-base">
								{feature.text}
							</p>
						</div>

						<Image
							className="hidden sm:block w-full sm:w-auto sm:h-[calc(100%+13%)] object-cover object-center lg:-top-[6.5%] sm:absolute sm:-top-[7.5%] md:-top-[8.5%] sm:right-8 lg:right-12"
							src={feature.image}
							alt={feature.header}
						/>
					</div>
				))}
			</div>

			<div className="flex items-center gap-6 flex-wrap sm:pl-8 lg:pl-12">
				{features.map((_, index) => (
					<button
						className={cn(
							"rounded-full w-4 h-4 transition-colors duration-300 ease-in-out shrink-0",
							{
								"bg-black/100": activeSlide === index,
								"bg-black/10 hover:bg-black/100":
									activeSlide !== index,
							},
						)}
						type="button"
						key={_.id}
						aria-label={`Slide to ${index}`}
						onClick={() => {
							setActiveSlide(index);

							const slideWidth =
								parentContainer!.current!.offsetWidth;
							const gap = 8; // 8px for gap-2

							const newScrollPosition =
								(slideWidth + gap) * index;

							parentContainer!.current!.scrollLeft =
								newScrollPosition;
						}}
					></button>
				))}
			</div>
		</section>
	);
};
export default Carousel;
