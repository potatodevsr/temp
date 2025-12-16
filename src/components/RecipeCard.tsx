import { Recipe } from "@/app/data/recipes";
import Image from "next/image";

type Props = { recipe: Recipe };
// w-[250px] sm:h-[240px] sm:w-[300px]
export default function RecipeCard({ recipe }: Props) {
  return (
    <div
      className="group relative aspect-1/2 w-[220px] h-auto max-h-[300px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
      tabIndex={0}
      aria-label={recipe.title}
    >
      <Image
        src={recipe.imageUrl}
        alt={recipe.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04] group-focus:scale-[1.04]"
        sizes="(max-width: 640px) 250px, 300px"
        priority={false}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

      {recipe.badge ? (
        <div className="absolute right-3 top-3 h-10 w-10 rounded-full bg-white/90 text-center text-sm font-semibold leading-10 text-neutral-900 shadow ring-1 ring-black/10">
          {recipe.badge}
        </div>
      ) : null}

      <div className="absolute bottom-3 left-3 right-3">
        <div className="text-white">
          <div className="text-sm font-semibold tracking-wide">
            {recipe.title}
          </div>
          <div className="mt-1 text-xs text-white/85">
            {recipe.timeLabel} | {recipe.servingsLabel}
          </div>
        </div>
      </div>
    </div>
  );
}
