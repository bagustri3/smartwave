"use client";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Hero = () => {
    const router = useRouter();
    return (
        <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
            <div className="hero-map" />

            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                <Image
                    src="/smartwave_logo.png"
                    alt="smartwave_logo"
                    width={90}
                    height={90}
                    className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
                />
                <h1 className="bold-52 lg:bold-88">
                    SmartWave Innovations Technologies
                </h1>
                <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
                    Embark on unforgettable journeys with SmartWave Digital
                    Agency as your trusted guide. We're here to enhance every
                    step of your adventure, ensuring you experience the sheer
                    beauty of nature in its purest form. Our app is your gateway
                    to exploring the world, offering seamless access to
                    breathtaking destinations and immersive experiences. Let us
                    be your companion, transforming your travel dreams into
                    reality with our expertise and dedication. Join us and
                    unlock a world of unparalleled beauty and discovery, all
                    within the palm of your hand
                </p>

                <div className="my-11 flex flex-wrap gap-5">
                    <div className="flex items-center gap-2">
                        {Array(5)
                            .fill(1)
                            .map((_, index) => (
                                <Image
                                    src="/star.svg"
                                    key={index}
                                    alt="star"
                                    width={24}
                                    height={24}
                                />
                            ))}
                    </div>

                    <p className="bold-16 lg:bold-20 text-blue-70">
                        5 Stars
                        <span className="regular-16 lg:regular-20 ml-1">
                            Good Services
                        </span>
                    </p>
                </div>

                <div className="flex flex-col w-full gap-3 sm:flex-row">
                    <Button
                        type="button"
                        title="Our Services"
                        variant="btn_green"
                        handleClick={() => {
                            router.push("/services");
                        }}
                    />
                    <Button
                        type="button"
                        title="Teams"
                        icon="/play.svg"
                        variant="btn_white_text"
                        handleClick={() => {
                            router.push("/about/team");
                        }}
                    />
                </div>
            </div>

            <div className="relative flex flex-1 items-start">
                <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
                    <div className="flex flex-col">
                        <div className="flexBetween">
                            <p className="regular-16 text-gray-20">Location</p>
                            <Image
                                src="/close.svg"
                                alt="close"
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className="bold-20 text-white">West Bandung</p>
                    </div>

                    <div className="flexBetween">
                        <div className="flex flex-col">
                            <p className="regular-16 block text-gray-20">
                                Latitude
                            </p>
                            <p className="bold-20 text-white">
                                -6.846270010721875
                            </p>
                        </div>
                    </div>
                    <div className="flexBetween">
                        <div className="flex flex-col">
                            <Link
                                href={""}
                                className="regular-16 block text-gray-20"
                            >
                                Longitude
                            </Link>
                            <p className="bold-20 text-white">
                                107.5009387294596
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
