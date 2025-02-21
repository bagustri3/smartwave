import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="flexCenter mb-24">
            <div className="padding-container max-container flex w-full flex-col gap-14">
                <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
                    <Link href="/" className="mb-10">
                        <Image
                            src="smartwave_logo.png"
                            alt="logo"
                            width={90}
                            height={41}
                        />
                    </Link>

                    <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
                        {FOOTER_LINKS.map(({ title, links }) => {
                            return (
                                <FooterColumn title={title} key={"columns"}>
                                    <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                                        {links.map(({ href, label }) => {
                                            return (
                                                <Link
                                                    href={`${href}`}
                                                    key={label}
                                                >
                                                    {label}
                                                </Link>
                                            );
                                        })}
                                    </ul>
                                </FooterColumn>
                            );
                        })}

                        <div className="flex flex-col gap-5">
                            <FooterColumn
                                title={FOOTER_CONTACT_INFO.title}
                                key={"columns"}
                            >
                                {FOOTER_CONTACT_INFO.links.map((link) => (
                                    <Link
                                        href="/"
                                        key={link.label}
                                        className="flex gap-4 md:flex-col lg:flex-row"
                                    >
                                        <p className="whitespace-nowrap">
                                            {link.label}:
                                        </p>
                                        <p className="medium-14 whitespace-nowrap text-blue-70">
                                            {link.value}
                                        </p>
                                    </Link>
                                ))}
                            </FooterColumn>
                        </div>

                        <div className="flex flex-col gap-5">
                            <FooterColumn title={SOCIALS.title} key={"columns"}>
                                <ul className="regular-14 flex gap-4 text-gray-30">
                                    {SOCIALS.links.map(
                                        ({ label, image, href }, i) => (
                                            <Link
                                                target="_blank"
                                                href={href}
                                                key={label}
                                            >
                                                <Image
                                                    src={image}
                                                    alt={label}
                                                    key={`link${i}`}
                                                    width={24}
                                                    height={24}
                                                />
                                            </Link>
                                        )
                                    )}
                                </ul>
                            </FooterColumn>
                        </div>
                    </div>
                </div>

                <div className="border bg-gray-20" />
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7922.716934733478!2d107.4999084!3d-6.8475607!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e31c0ba9581d%3A0xc0515734bebb7a21!2sSmartWave%20Innovations%20Technologies!5e0!3m2!1sid!2sid!4v1737232302889!5m2!1sid!2sid"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full justify-center items-center"
                />
                <div className="border bg-gray-20" />
                <p className="regular-14 w-full text-center text-gray-30">
                    2024 SmartWave Innovations Technology | All rights reserved
                </p>
            </div>
        </footer>
    );
};

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className="flex flex-col gap-5" key={"wrap"}>
            <h4 className="bold-18 whitespace-nowrap" key={"title"}>
                {title}
            </h4>
            {children}
        </div>
    );
};

export default Footer;
