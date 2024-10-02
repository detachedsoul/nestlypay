import Link from "next/link";
import Image from "next/image";
import Faces from "@/assets/img/faces.svg";

const AuthLayout = ({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element => {
	return (
		<main className="grid custom-scrollbar max-h-full overflow-hidden bg-purple-500 lg:grid-cols-2">
			<section className="bg-brand-blue px-5 lg:px-16 h-full hidden lg:flex flex-col justify-center">
				<Link
					className="font-medium text-xl/10 inline-flex items-center gap-4 text-white/100 mt-8"
					href="/auth"
				>
					<span>N E S T L Y</span>
					<span>P A Y</span>
				</Link>

				<div className="flex flex-col justify-center h-[80vh]">
					<h1 className="font-medium text-3xl/10 text-white/100">
						Start taking steps to manage your business now.
					</h1>

					<div className="flex items-center gap-4 mt-8">
						<Image
							src={Faces}
							alt="Join 1,893 People."
						/>
						<p className="text-sm text-white/100">
							Join 1,893 People.
						</p>
					</div>
				</div>
			</section>

			<div className="fixed bg-white/100 top-0 w-full left-0 pt-6 section-padding lg:hidden sm:px-[15%]">
				<Link
					className="font-medium text-xl/10 inline-flex items-center gap-4 text-brand-blue"
					href="/auth"
				>
					<span>N E S T L Y</span>
					<span>P A Y</span>
				</Link>
			</div>

			<section className="bg-white/100 flex flex-col place-content-center overflow-hidden h-[calc(100vh-6.5rem)] sm:h-[calc(100vh-3rem)] lg:h-screen">
				<div className="overflow-y-auto custom-scrollbar section-padding pb-12 pt-24 lg:pt-12  sm:px-[15%]">
					{children}
				</div>
			</section>
		</main>
	);
};

export default AuthLayout;
