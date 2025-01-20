"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GetApp = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [budget, setBudget] = React.useState("");

    const router = useRouter();

    return (
        <section className="flexCenter w-full flex-col pb-[120px]">
            <div className="get-app">
                <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
                        Join us Growth Partner!
                    </h2>
                    {/* <p className="regular-16 text-gray-10">
                        Available on Discord
                    </p> */}
                    <div className="flex flex-col gap-5 xl:flex-row">
                        <div className="flex flex-col">
                            <label className="bold-16 whitespace-nowrap cursor-pointer">
                                Name
                            </label>
                            <input
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                id="form-name"
                                className="rounded-md outline-none text-black"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="bold-16 whitespace-nowrap cursor-pointer">
                                Email
                            </label>
                            <input
                                className="rounded-md outline-none text-black"
                                type="email"
                                id="form-email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 xl:flex-row">
                        <div className="flex flex-col">
                            <label className="bold-16 whitespace-nowrap cursor-pointer">
                                Phone Number
                            </label>
                            <input
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                                id="form-number"
                                className="rounded-md outline-none text-black"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="bold-16 whitespace-nowrap cursor-pointer">
                                Budget
                            </label>
                            <select
                                onChange={(e) => {
                                    setBudget(e.target.value);
                                }}
                                id="budget"
                                className="w-full rounded-md bg-gray-10 outline-none text-black"
                            >
                                <option selected value={""} disabled>
                                    Choose Your Budget
                                </option>
                                <option value="Under Rp.1.000.000">
                                    {"Under Rp.1.000.000"}
                                </option>
                                <option value="> Rp.1.000.000 & < Rp.10.000.000">
                                    {"> Rp.1.000.000 & < Rp.10.000.000"}
                                </option>
                                <option value="> Rp.10.000.000 & < Rp.50.000.000">
                                    {"> Rp.10.000.000 & < Rp.50.000.000"}
                                </option>
                                <option value="> Rp.50.000.000">
                                    {"> Rp.50.000.000"}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col mb-3">
                        <div className="flex flex-col">
                            <div className="lg:flexCenter">
                                <Button
                                    type="button"
                                    title="SUBMIT"
                                    icon=""
                                    variant="btn_dark_green"
                                    handleClick={() => {
                                        router.replace(
                                            `https://wa.me/6282127226844?text=${`Hi%20%2ASmartwave%2A%2C%0AIm%20%2A${name}%2A%2C%0AMy%20email%20is%20%2A${email}%2A%2C%0AMy%20phone%20number%20at%20%2A${phone}%2A%2C%0AAnd%20this%20is%20my%20Budget%20${budget}.%0A%0AI%20took%20an%20interest%20to%20get%20to%20know%20about%20your%20company%2C%20may%20we%20have%20a%20conversation%20about%20your%20products%3F%20`}`
                                        );
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 items-center justify-end">
                    <Image
                        src="/laptops.png"
                        alt="phones"
                        width={550}
                        height={870}
                    />
                </div>
            </div>
        </section>
    );
};

export default GetApp;
