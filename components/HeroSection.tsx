import Link from "next/link";

const HeroSection = (): JSX.Element => {
    return (
        <div className="lg:w-3/5 mx-auto text-center mt-12 lg:mt-20">
            <h1 className="font-medium text-3xl/10 lg:text-5xl/snug text-white">
                Connecting Businesses for Simplified Payments.
            </h1>

            <p className="text-lg/7 mt-2 mb-4 lg:text-xl/8 lg:mt-4 lg:mb-6 w-[90%] mx-auto text-white/90 block">
                Create and send invoices, manage your finance, track sales, and get paid faster.
            </p>

            <Link className="text-brand-blue bg-white hover:bg-brand-blue hover:text-white btn inline-block border-2 border-transparent hover:border-white" href="/auth/personal">
                Create free Invoice
            </Link>
        </div>
    );
};

export default HeroSection;
