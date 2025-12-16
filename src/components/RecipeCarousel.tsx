"use client";

import { useRef } from "react";

import RecipeCard from "./RecipeCard";
import { Recipe } from "@/app/slider/data/recipes";

type Props = { items: Recipe[] };

export default function RecipeCarousel({ items }: Props) {
  return (
    <div className="flex gap-4 hide-scrollbar relative overflow-x-auto pb-3 pt-2 snap-x snap-mandatory scroll-smooth">
      {/* Right spacer to allow scrolling and extend beyond screen */}
    </div>
  );
}
