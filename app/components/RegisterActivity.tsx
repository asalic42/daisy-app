import { Card, CardContent } from "@/components/ui/card";
import { ColorsPanel } from "../page";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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

type Logs = {
    type: "loading" | "empty" | "success" | "error";
    message?: string;
}

export default function RegisterActivity({activityInfos, colors}: ActivityProps) {
    const [logs, setLogs] = useState<Logs>({type: "empty"});

    const dateFormat = new Date(activityInfos.date).toLocaleDateString("fr-FR", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
    const capitalizeDate = dateFormat.replace(/^./, dateFormat[0].toUpperCase());

    if (logs.type === "loading" ) {
        return (
            <div><p>Loading...</p></div>
        );
    } else {
    return (

        <div className={`h-[20rem] flex flex-col shadow-md border-2 rounded-lg bg-white cursor-pointer transition-transform transform hover:scale-101 max-sm:max-h-[20rem]`}
        style={{ borderColor: `${colors.titleColor}`}}>
            <div className="text-sm">

                <div className="relative h-35 ">
                    <img className="rounded-t-md object-cover w-full h-full" title={activityInfos.title} src={activityInfos.picturePath} />

                    <div className="absolute bottom-0 w-full backdrop-blur-sm p-1 "
                    style={{ backgroundColor: "rgba(255,255,255,0.5)" }}>
                        <h2 className={`font-semibold text-base text-[${colors.titleColor}]`}>{activityInfos.title}</h2>
                    </div>
                </div>

                <div className="flex flex-1 flex-col p-2">

                    <div className={`flex flex-col h-full text-[${colors.secondaryColor}]`}>
                        <p>📍{activityInfos.location}</p>
                        <p>🪙 {activityInfos.price}€</p>
                        <p>🗓️ {capitalizeDate}</p>
                    </div>

                    <div className="flex flex-col justify-center mt-5">
                        <button
                            disabled={activityInfos.places_left <= 0}
                            onClick={() => {
                                setLogs({type:"success", message: "Vous avez réservé cet atelier 🍾"});
                                if (activityInfos.places_left > 0 ) activityInfos.places_left --;
                            }}
                            className={`text-white p-1 rounded-lg border-1 transition-transform transform hover:scale-101 hover:border-black`}
                            style={{ backgroundColor: `${colors.primaryColor}`}}
                        >
                            Reserver
                        </button>
                        {logs.type === "success" || logs.type === "error" && <p className={`text-${logs.type === "error" ? "red-400" : '[' + colors.titleColor + ']'} text-xs text-center`}>{logs.message}</p>}
                    </div>

                    <div className={`flex justify-center mt-2 text-[${colors.secondaryColor}]`}>
                        <p>👥 {activityInfos.places_left} places restantes</p>
                    </div>
                </div>
            </div>
        </div>
    );
    }

} 