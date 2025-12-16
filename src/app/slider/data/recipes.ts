export type Recipe = {
    id: string
    title: string
    timeLabel: string
    servingsLabel: string
    imageUrl: string
    badge?: string
}

export const recipes: Recipe[] = Array.from({ length: 12 }).map((_, i) => {
    const n = i + 1
    const imageIndex = i % 3
    return {
        id: String(n),
        title: `MENU ${n}`,
        timeLabel: "20 mins",
        servingsLabel: "4 servings",
        imageUrl: `/images/recipes/${imageIndex}.png`,
    }
})
