"use client";

import SectionTitle from "./SectionTitle";
import RecipeCarousel from "./RecipeCarousel";
import { recipes } from "@/app/data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecommendedRecipesSection() {
  return (
    <section className="relative h-[500px] bg-[#f7efe6]">
      <div className="relative mx-auto max-w-6xl py-10 sm:py-14 z-20 px-4">
        <div className="flex items-end justify-between gap-4">
          <SectionTitle title="RECOMMENDED" subtitle="Recipes" />
        </div>
      </div>

      <div className="relative z-20 -mt-6 hide-scrollbar overflow-x-auto pl-4">
        <div className="flex gap-4 mx-auto max-w-6xl">
          {recipes.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/cook.svg" className="absolute bottom-2 left-2 z-10" alt="" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/sun.svg" className="absolute top-2 right-2 z-10" alt="" />
      <svg
        className="absolute z-0 -bottom-[3%] md:bottom-[-7%] xl:bottom-[-10%] right-0 left-0"
        viewBox="0 0 321 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M320.973 102.91H320.939C320.96 102.985 320.973 103.059 320.973 103.134C320.973 109.4 249.121 114.479 160.486 114.479C71.852 114.479 0 109.4 0 103.134C1.117e-05 103.059 0.0127152 102.985 0.0332031 102.91H0V0H320.973V102.91Z"
          fill="#f7efe6"
        />
      </svg>
    </section>
  );
}
