import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import HeroImage from "@/assets/img/hero-image.png";
import Link from "next/link";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import { ArrowRightIcon } from "lucide-react";

const Index = (): JSX.Element => {
	return (
		<>
			<div className="bg-brand-blue pb-[5%] section-padding">
				<NavBar />

				<HeroSection />
			</div>

			<main className="pb-12 -translate-y-[1%] lg:-translate-y-[1.5%]">
				<div className="relative h-full section-padding after:absolute after:h-1/2 after:bg-brand-blue after:w-full after:top-0 after:left-0 mb-12">
					<Image
						className="w-full h-auto relative z-50"
						src={HeroImage}
						alt="NestlyPay dashboard"
						placeholder="blur"
					/>
				</div>

				<div className="space-y-3 section-padding">
					<p className="font-[450]">
						Never chase a client again. Speed up your cash flow and
						manage your business at your fingertips. Let Nestlypay
						help with the hard work, while you focus on your
						business.
					</p>

					<Link
						className="text-[rgba(7,_7,_7,_1)] inline-flex items-center gap-2 font-medium transition-all hover:gap-4 ease-in-out duration-300 text-lg"
						href="/auth/personal"
					>
						Get a fast invoice today
						<ArrowRightIcon strokeWidth={1.5} />
					</Link>
				</div>

				<Carousel />
			</main>

			<Footer />
		</>
	);
};

export default Index;
