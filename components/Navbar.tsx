"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import { Link } from "@/navigation";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
    const history = useRouter();
    const [toggleDrawer, setToggleDrawer] = useState(false);
    return (
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
            <Link href="/" className="flex items-center">
                <Image
                    src={"/smartwave_logo.png"}
                    alt="logo"
                    width={50}
                    height={41}
                />
                <b>SmartWave</b>
            </Link>

            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => {
                    console.log(link.href);
                    return (
                        <Link
                            href={link.href}
                            key={link.key}
                            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </ul>

            {/* <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div> */}

            {/* SmallScreen */}
            <div className="flex justify-between items-center relative">
                <Image
                    src="menu.svg"
                    alt="menu"
                    width={32}
                    height={32}
                    onClick={() => {
                        setToggleDrawer(!toggleDrawer);
                    }}
                    className="inline-block object-contain cursor-pointer lg:hidden"
                />
                <div
                    className={`mobile-menu rounded-full items-center border border-[#232323] border-collapse fixed top-[60px] right-0 bg-[#ffffff] z-10 shadow-secondary py-4 ${
                        !toggleDrawer
                            ? "opacity-0 translate-x-full"
                            : "opacity-100 translate-x-0"
                    } transition-all duration-700 ease-in-out`}
                >
                    <ul className="mb-4">
                        {NAV_LINKS.map((e) => (
                            <li
                                key={e.label}
                                className={`flex p-4`}
                                onClick={() => {
                                    setToggleDrawer(false);
                                    history.push(e.href);
                                }}
                            >
                                <p
                                    className={`ml-[20px] font-epilogue font-semibold text-[14px]`}
                                >
                                    {e.label}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
