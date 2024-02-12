"use client";

import { IconButton as MaterialIconButton, Typography as MaterialTypography } from "@material-tailwind/react";

interface IconButtonProps {
  variant: string;
  color: string;
  size: string;
}

interface TypographyProps {
  variant: string;
  color: string;
  className?: string;
}

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/image-4.jpeg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <MaterialTypography variant="h1" color="white" className="block antialiased tracking-normal font-sans text-5xl font-semibold leading-tight text-white">
            Exploring the Wonders of Biology at Night...
          </MaterialTypography>
          <MaterialTypography
            variant="lead"
            color="white"
            className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mt-4 mb-12 w-full md:max-w-full lg:max-w-3xl"
          >
            Introduction: Join us in a a journey into the world of life!
          </MaterialTypography>
          <MaterialTypography
            variant="paragraph"
            color="white"
            className="mt-1 mb-7 font-medium uppercase"
          >
            Connect with us on:
          </MaterialTypography>
          <div className="gap-8 flex">
            <MaterialIconButton variant="text" color="white" size="sm">
              <i className="fa-brands fa-twitter text-base" />
            </MaterialIconButton>
            <MaterialIconButton variant="text" color="white" size="sm">
              <i className="fa-brands fa-facebook text-base" />
            </MaterialIconButton>
            <MaterialIconButton variant="text" color="white" size="sm">
              <i className="fa-brands fa-instagram text-base" />
            </MaterialIconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
