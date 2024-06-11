import Link from "next/link";
import Image from "next/image";
import Faces from "@/assets/img/faces.svg";

const AuthLayout = ({children}: {children: React.ReactNode}): JSX.Element => {
    return (
        <main className="grid max-h-screen overflow-hidden lg:grid-cols-2">
            <section className="bg-brand-blue px-6 lg:px-16 h-screen hidden lg:block">
                <Link className="font-medium text-xl/10 inline-flex items-center gap-4 text-white/100 mt-8" href="/auth">
                    <span>
                        N E S T L Y
                    </span>

                    <span>
                        P A Y
                    </span>
                </Link>

                <div className="flex flex-col place-content-center h-[80vh]">
                    <h1 className="font-medium text-3xl/10 text-white/100">
                        Start taking steps to manage your business now.
                    </h1>

                    <div className="flex items-center gap-4 mt-8">
                        <Image src={Faces} alt="Join 1,893 People." />

                        <p className="text-sm text-white/100">
                            Join 1,893 People.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white/100 px-6 lg:px-16 flex flex-col place-content-center min-h-min h-[calc(100vh-10rem)] mt-6 lg:mt-8 lg:h-[calc(100vh-4rem)] overflow-hidden relative">
                <Link className="font-medium text-xl/10 inline-flex items-center gap-4 text-brand-blue absolute top-0 lg:hidden" href="/auth">
                    <span>
                        N E S T L Y
                    </span>

                    <span>
                        P A Y
                    </span>
                </Link>

                <div className="overflow-y-auto custom-scrollbar mt-6 lg:mt-0">
                    {children}
                </div>
            </section>
        </main>
    );
};

export default AuthLayout;
