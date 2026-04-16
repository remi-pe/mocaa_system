"use client";

import { SectionWrapper } from "@/components/design-system/section-wrapper";
import { ComponentPreview } from "@/components/design-system/component-preview";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const COLORS = [
  "bg-rose-100 dark:bg-rose-900/30",
  "bg-blue-100 dark:bg-blue-900/30",
  "bg-green-100 dark:bg-green-900/30",
  "bg-amber-100 dark:bg-amber-900/30",
  "bg-violet-100 dark:bg-violet-900/30",
];

export function CarouselSection() {
  return (
    <SectionWrapper
      id="carousel"
      title="Carousel"
      description="A carousel with motion and swipe built using Embla."
    >
      <ComponentPreview title="Horizontal Carousel">
        <div className="w-full max-w-xs">
          <Carousel>
            <CarouselContent>
              {COLORS.map((color, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent
                      className={`flex aspect-square items-center justify-center p-6 ${color}`}
                    >
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </ComponentPreview>
    </SectionWrapper>
  );
}
