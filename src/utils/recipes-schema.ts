import {z }from "zod";

export const CategoriesAPIResonseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})