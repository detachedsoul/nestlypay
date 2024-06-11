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
            <div className="bg-brand-blue px-6 lg:px-16 pb-[5%] mb-[45%] lg:mb-[35%]">
                <NavBar />

                <HeroSection />

                <Image className="w-full mt-12 -mb-[40%] lg:mt-20" src={HeroImage} alt="NestlyPay dashboard" placeholder="blur" />
            </div>

            <main className="px-6 pb-12 space-y-12 lg:px-16">
                <div>
                    <p className="font-[450]">
                        Never chase a client again. Speed up your cash flow and manage our business at your fingertips. Let Nestlypay help with the hard work, while you focus on your business.
                    </p>

                    <Link className="text-[rgba(7,_7,_7,_1)] inline-flex items-center gap-2 font-medium mt-3 transition-all hover:gap-4 ease-in-out duration-300 text-lg" href="/auth/personal">
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
