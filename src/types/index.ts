import {z} from 'zod'
import type { CategoriesAPIResonseSchema, DrinkAPIResponse, DrinksAPIResponse, SearchFilterSchema } from '../utils/recipes-schema'


export type Categories = z.infer<typeof CategoriesAPIResonseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkAPIResponse>
