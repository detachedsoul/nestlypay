import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/img/logo.svg";

const NavBar = (): JSX.Element => {
    return (
        <header className="flex items-center gap-4 justify-between py-5">
            <Link href="/">
                <Image className="h-7" src={Logo} alt="NestlyPay" quality={10} />
            </Link>

            <Link className="text-white border-2 border-white hover:bg-white hover:text-brand-blue btn" href="/auth">
                Sign In
            </Link>
        </header>
    );
};

export default NavBar;
