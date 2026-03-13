export type ColorsPanel = {
    backgroundColor: string;
    primaryColor: string;
    secondaryColor: string;
    titleColor: string;
};

export type ActivityInfos = {
    picturePath: string;
    title: string;
    location: string;
    price: number;
    date: string;
    places_left: number;
    hours: string[];
};

export type Logs = {
    type: "loading" | "empty" | "success" | "error";
    message?: string;
};