import { Card, CardContent } from "@/components/ui/card";
import { ColorsPanel } from "../page";

type ActivityInfos = {
    picturePath: string;
    title: string;
    location: string;
    price: number;
    date: string;
    places_left: number;
};

interface ActivityProps {
    activityInfos: ActivityInfos;
    colors: ColorsPanel;
}

export default function RegisterActivity({activityInfos, colors}: ActivityProps) {

    return (
        <div className="h-[20rem] flex flex-col justify-center items-center border-2 rounded-lg py-5 px-5 bg-white max-sm:max-h-[20rem]">
            <div className="text-[var(--font-color)]">

                <div>
                    <div className="relative">
                    <img src={activityInfos.picturePath} />

                    </div>
                    <h2 className={`text-[${colors.primaryColor}]`}>{activityInfos.title}</h2>
                </div>

                <p>{activityInfos.location}</p>
                <p>{activityInfos.price}</p>
                <p>{activityInfos.date}</p>

                <button>Reserver</button>

                <p>{activityInfos.places_left} places restantes</p>

            </div>
        </div>
    );
} 