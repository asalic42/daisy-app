import type { ColorsPanel, ActivityInfos, Logs } from "../types/types";
import { useEffect, useState } from "react";

interface ActivityProps {
    activityInfos: ActivityInfos;
    colors: ColorsPanel;
}

export default function RegisterActivity({activityInfos, colors}: ActivityProps) {
    const [logs, setLogs] = useState<Logs>({type: "empty"});
    const [selectHour, setSelectHour] = useState<string | null>(null);
    const [reservedHour, setReservedHour] = useState<string | null>(null);
    const [placeLeft, setPlaceLeft] = useState<number>(0);

    useEffect(() => {
        setPlaceLeft(activityInfos.places_left);
    }, [activityInfos.places_left])

    const dateFormat = new Date(activityInfos.date).toLocaleDateString("fr-FR", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
    const capitalizeDate = dateFormat.replace(/^./, dateFormat[0].toUpperCase());

    const bookReservation = () => {
        if (!selectHour) {
            setLogs({ type: "error", message: "Sélectionnez un créneau."});
        } else if (reservedHour === selectHour) {
            setLogs({ type: "error", message: "Créneau déjà réservé."});
        } else {
            setPlaceLeft((prev) => prev -1);
            setReservedHour(selectHour);
            setLogs({type:"success", message: "Vous avez réservé cet atelier 🍾"});
        }
    };

    const selectedHour = (hour: string) => {
        if (reservedHour === hour) {
            setLogs({ type: "error", message: "Créneau déjà réservé."});
        } else {
            setLogs({ type: "empty"});
            setSelectHour(hour);
        }
    }

    if (logs.type === "loading" ) {
        return <div><p>Loading...</p></div>
    } else {
        return (

            <div
                className={`h-[23rem] flex flex-col shadow-md border-2 rounded-lg bg-white cursor-pointer transition-transform transform hover:scale-101 max-sm:max-h-[22rem]`}
                style={{ borderColor: `${colors.titleColor}`}}
            >
                <div className="text-sm">

                    <div className="relative h-35 ">
                        <img
                            className="rounded-t-md object-cover w-full h-full"
                            title={activityInfos.title}
                            src={activityInfos.picturePath}
                        />

                        <div
                            className="absolute bottom-0 w-full backdrop-blur-sm p-1 "
                            style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                        >
                            <h2 className={`font-semibold text-base text-[${colors.titleColor}]`}>
                                {activityInfos.title}
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-1 flex-col p-2 gap-6 max-sm:gap-4">
                        <div className={`flex flex-col h-full text-[${colors.secondaryColor}]`}>
                            <p>📍{activityInfos.location}</p>
                            <p>🪙 {activityInfos.price}€</p>
                            <p>🗓️ {capitalizeDate}</p>
                            <p>👥 {placeLeft} places restantes</p>
                        </div>

                        <div className="flex flex-row justify-around gap-2 w-full overflow-y-auto">
                            {activityInfos.hours.map((hour, index) => 
                                <button
                                    key={index}
                                    className={`interactive-button`}
                                    onClick={() => selectedHour(hour)}
                                    style={{
                                        backgroundColor: `${selectHour === hour ? colors.primaryColor : ""}`,
                                        fontWeight: `${selectHour === hour ? "bold" : ""}`,
                                        borderColor: `${selectHour === hour ? colors.primaryColor : ""}`,
                                        color: `${selectHour === hour ? "white" : ""}`,
                                    }}
                                >
                                    {hour}
                                </button>
                            )}
                        </div>

                        <div className="flex flex-col justify-center">
                            <button
                                disabled={ placeLeft <= 0 }
                                onClick={ bookReservation }
                                className={`text-white p-1 rounded-lg border-1 transition-transform transform hover:scale-101 hover:border-black`}
                                style={{ backgroundColor: `${colors.primaryColor}`}}
                            >
                                Réserver
                            </button>

                            { (logs.type === "success" || logs.type === "error") && 
                                <p
                                    className={`text-[${colors.titleColor}] text-xs text-center`}
                                >
                                    {logs.message}
                                </p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 