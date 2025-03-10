import { AI_LOGO, TASKBOARD_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
    backgroundImage: string;
    title: string;
    subtitle: string;
    peopleJoined: string;
    uri: Array<string>;
}

const CampSite = ({
    backgroundImage,
    title,
    subtitle,
    peopleJoined,
    uri,
}: CampProps) => {
    return (
        <div
            className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0`}
        >
            <div className="flex h-full flex-col items-start justify-between p-10 lg:px-20 lg:py-10">
                <div className="flexCenter gap-4">
                    <div className="rounded-full bg-green-50 p-4 ">
                        <Image
                            src="/folded-map.svg"
                            alt="map"
                            width={28}
                            height={28}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h4 className="bold-18 text-white border-collapse drop-shadow-[0_3.3px_3.3px_rgba(0,0,0,0.8)]">
                            {title}
                        </h4>
                        <p className="regular-14 drop-shadow-[0_3.3px_3.3px_rgba(0,0,0,0.8)] text-white">{subtitle}</p>
                    </div>
                </div>

                <div className="flexCenter gap-6">
                    <span className="flex -space-x-4 overflow-hidden">
                        {uri.map((url) => (
                            <Image
                                className="inline-block bg-white bg-gradient-to-tr from-white via-50 h-10 w-10 rounded-full"
                                src={url}
                                key={url}
                                alt="feature"
                                width={52}
                                height={52}
                            />
                        ))}
                    </span>
                    <p className="bold-16 md:bold-20 text-white drop-shadow-[0_3.3px_3.3px_rgba(0,0,0,0.8)]">
                        {peopleJoined}
                    </p>
                </div>
            </div>
        </div>
    );
};

const Camp = () => {
    return (
        <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
            <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
                <CampSite
                    backgroundImage="bg-bg-img-1"
                    title="Collaborative Taskboard"
                    subtitle="promoting transparency and efficiency."
                    peopleJoined="Working with Time Management"
                    uri={TASKBOARD_URL}
                />
                <CampSite
                    backgroundImage="bg-bg-img-2"
                    title="Updated Technologies"
                    subtitle="Empowering Your Digital Future"
                    peopleJoined="Following Ai Development"
                    uri={AI_LOGO}
                />
            </div>

            <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
                <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
                    <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
                        <strong>Feeling Lost</strong> and not sure where to
                        turn?
                    </h2>
                    <p className="regular-14 xl:regular-16 mt-5 text-white">
                        Just like climbers facing new challenges, the journey
                        ahead can be daunting. But fear not, for we're here to
                        guide you through your digital adventure. Whether you're
                        starting a new project or seeking to enhance your online
                        presence, let us be your compass in the digital
                        landscape.
                    </p>
                    <Image
                        src="/quote.svg"
                        alt="camp-2"
                        width={186}
                        height={219}
                        className="camp-quote"
                    />
                </div>
            </div>
        </section>
    );
};

export default Camp;
