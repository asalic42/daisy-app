import Image from "next/image";
import RegisterActivity from "./components/RegisterActivity";
import activities from "./data/activities.json";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export type ColorsPanel = {
    backgroundColor: string;
    primaryColor: string;
    secondaryColor: string;
}

export default function Home() {

  const activityColors : ColorsPanel = {
    backgroundColor: "var(--background-color)",
    primaryColor: "var(--primary-color)",
    secondaryColor: "var(--font-color)",
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-background)]">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-25 px-10 bg-[var(--color-background)] sm:items-start">
        <div className="flex flex-col items-start gap-6 text-left w-full border-b-2 pb-4">
          <h1 className="text-4xl font-bold">
            Daisy App
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center text-center max-sm:items-start max-sm:text-left">
          <h1 className="max-w-sm text-2xl font-semibold tracking-tight text-[var(--accent-color)]">
            Reservez un atelier
          </h1>
          <p className="max-w-md text-md text-[var(--font-color)] ">
            Envie de développer votre esprit créatif ? 
          </p>
        </div>

        <div className="flex w-full flex-row justify-center gap-4 text-base font-medium">
         
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-[25rem] max-sm:max-w-[20rem]"
          >
            <CarouselContent>
              {activities.map((activity) => (
                <CarouselItem className="basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                      <RegisterActivity activityInfos={activity} colors={activityColors}/>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
            
        </div>

        <div></div>
        <div></div>

      </main>
    </div>
  );
}
