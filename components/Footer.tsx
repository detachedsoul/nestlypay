import Link from "next/link";
import Image from "next/image";
import BannerImageLG from "@/assets/img/footer-banner-lg.png";
import BannerImageSM from "@/assets/img/footer-banner-sm.png";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const Footer = (): JSX.Element => {
    return (
        <>
            <div className="bg-brand-blue pt-6 relative lg:pt-16 section-padding">
                <div className="lg:w-1/2">
                    <h2 className="font-medium text-3xl/10 lg:text-5xl/tight text-white">
                        Ready to Grow Your Business in One Solution?
                    </h2>

                    <p className="mt-2 mb-4 lg:text-lg/8 lg:mt-4 lg:mb-6 text-white/90 block">
                        Say hello to Nestlypay, a platform that enables you to send professional invoices, save time, digitalize your bills and manage your business in minutes.
                    </p>

                    <Link className="text-white border-2 border-white hover:bg-white hover:text-brand-blue btn inline-block" href="/auth">
                        Get Started
                    </Link>
                </div>

                <div className="flex items-end mt-4 relative">
                    <div className="w-1/4 absolute">
                        <Image className="h-full w-full" src={BannerImageSM} alt="NestlyPay mobile app" placeholder="blur" />
                    </div>

                    <div className="w-[78%] h-full ml-auto">
                        <Image className="w-full h-full oject-cover" src={BannerImageLG} alt="NestlyPay dashboard" placeholder="blur" />
                    </div>
                </div>
            </div>

            <footer className="py-6 flex items-center justify-between flex-col gap-8 sm:flex-row sm:flex-wrap section-padding">
                <div className="flex items-center gap-4">
                    <Link className="text-brand-blue rounded-full w-10 h-10 grid place-items-center bg-brand-blue/10 hover:bg-brand-blue hover:text-white transition-colors duration-300 ease-in-out" href="" aria-label="Connet with us on Facebook">
                        <FacebookIcon size={18} />
                    </Link>

                    <Link className="text-brand-blue rounded-full w-10 h-10 grid place-items-center bg-brand-blue/10 hover:bg-brand-blue hover:text-white transition-colors duration-300 ease-in-out" href="" aria-label="Connect with us on Twitter">
                        <TwitterIcon size={18} />
                    </Link>

                    <Link className="text-brand-blue rounded-full w-10 h-10 grid place-items-center bg-brand-blue/10 hover:bg-brand-blue hover:text-white transition-colors duration-300 ease-in-out" href="" aria-label="Connect with us on Instagram">
                        <InstagramIcon size={18} />
                    </Link>

                    <Link className="text-brand-blue rounded-full w-10 h-10 grid place-items-center bg-brand-blue/10 hover:bg-brand-blue hover:text-white transition-colors duration-300 ease-in-out" href="" aria-label="Connect with us on LinkedIn">
                        <LinkedinIcon size={18} />
                    </Link>
                </div>

                <Link className="hover:underline hover:decoration-wavy underline-offset-8 hover:text-brand-blue" href="">
                    help@nestlypay.co
                </Link>

                <p className="sm:w-full sm:mx-auto sm:flex sm:place-content-center lg:w-auto lg:mx-0 lg:block">
                    © 2022. NestlyPay Limited All rights reserved
                </p>
            </footer>
        </>
    );
};

export default Footer;
