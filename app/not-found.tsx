import NotFoundIcon from "@/assets/img/not-found-icon.svg";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Page not found",
    description: "Sorry, the page you're looking for doesn’t exist or has been moved."
};

const NotFound = () => {
    return (
        <div className="bg-white/20 backdrop-blur-2xl max-h-screen overflow-hidden h-screen sm:grid sm:place-content-center">
            <div className="sm:w-4/5 md:w-1/2 sm:mx-auto grid gap-6 gap-x-6 text-center translate-y-1/3 sm:translate-y-0">
                <Image className="w-32 h-auto mx-auto" src={NotFoundIcon} alt="" />

                <p className="text-brand-blue font-medium rounded py-1 px-3 inline-block mx-auto bg-brand-blue/10 duration-500 animate-pulse w-fit backdrop-blur-2xl text-lg text-center">404 error</p>

                <h1 className="text-4xl text-gray-900 font-bold">
                    We’ve lost this page
                </h1>

                <p>
                    Sorry, the page you're looking for doesn’t exist or has been moved. We’re still developing the site though, so be sure to check back later.
                </p>
            </div>
        </div>
    );
};

export default NotFound;
