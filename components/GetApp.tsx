"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
    return (
        <section className="flexCenter w-full flex-col pb-[120px]">
            <div className="get-app">
                <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
                        Join us Growth Partner!
                    </h2>
                    <p className="regular-16 text-gray-10">
                        Available on Instagram and Facebook
                    </p>
                    <div className="flex flex-col gap-5 xl:flex-row">
                        <div className="flex flex-col">
                            <label className="bold-16 whitespace-nowrap cursor-pointer">
                                Name
                            </label>
                            <input
                                onChange={(e) => {
                                    console.log(e.target.value);
                                }}
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
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 xl:flex-row">
                        <div className="flex flex-col">
                            <label className="bold-16 whitespace-nowrap cursor-pointer">
                                Phone Number
                            </label>
                            <input
                                className="rounded-md outline-none text-black"
                                type="text"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="bold-16 whitespace-nowrap cursor-pointer">
                                Budget
                            </label>
                            <select
                                id="budget"
                                className="w-full rounded-md bg-gray-10 outline-none text-black"
                            >
                                <option selected disabled>
                                    Choose Your Budget
                                </option>
                                <option value="US">{"< Rp.500.000"}</option>
                                <option value="CA">
                                    {"> Rp.500.000 & < Rp.1.000.000"}
                                </option>
                                <option value="FR">
                                    {"> Rp.1.000.000 & < Rp.2.000.000"}
                                </option>
                                <option value="DE">{"> Rp.2.000.000"}</option>
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
