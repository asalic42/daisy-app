'use client'
import Image from "next/image";
import RegisterActivity from "./components/RegisterActivity";
import activities from "./data/activities.json";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export type ColorsPanel = {
    backgroundColor: string;
    primaryColor: string;
    secondaryColor: string;
    titleColor: string;
}

export default function Home() {
  const activityColors : ColorsPanel = {
    backgroundColor: "var(--background-color)",
    primaryColor: "var(--primary-color)",
    secondaryColor: "var(--font-color)",
    titleColor: "var(--accent-color)",
  }

  return (
    
    <div className="relative z-10 flex flex-col min-h-screen items-center justify-center py-10 px-5 bg-[var(--color-background)]">

      <header className="flex flex-col items-start gap-6 text-left w-full border-b-2 pb-4">
        <h1 className="text-4xl font-bold">
          Daisy App
        </h1>
      </header>
        
      <main className="flex flex-1 w-full flex-col justify-center py-10 bg-[var(--color-background)] gap-5">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="max-w-sm text-2xl font-semibold tracking-tight text-[var(--accent-color)]">
            Reservez un atelier
          </h1>
          <p className="max-w-md text-md text-[var(--font-color)] ">
            Envie de développer votre esprit créatif ? 
          </p>
        </div>

        <div className="flex w-full flex-row justify-center gap-4 text-base font-medium px-4">
         
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-[30rem] max-sm:max-w-[15rem] lg:max-w-[50rem]"
          >
            <CarouselContent>
              {activities.map((activity, index) => (
                <CarouselItem key={index} className="basis-1/2 max-sm:basis-1/1 lg:basis-1/3 ">
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

      </main>
    </div>
  );
}
