import { useAppStore } from "../store/useAppStore"
import type { Drink } from "../types"

type DrinkCardProps={
    drink : Drink
}
export default function DrinkCard({drink}: DrinkCardProps) {
    const selectRecipe = useAppStore((state) => state.selectRecipe)
    return (
        <div className="border border-slate-100 rounded-lg shadow-lg">
            
            <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
                <img 
                    src={drink.strDrinkThumb} 
                    alt={`Imagen de ${drink.strDrink}`} 
                    className="w-full object-cover transition-transform duration-700 ease-out hover:scale-110 hover:rotate-1"
                />
            </div>
            <div className="p-5">
                <h2 className="text-2xl truncate font-black ">{drink.strDrink}</h2>
                <button
                    className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-3 font-bold text-white text-lg rounded-lg"
                    onClick={()=> selectRecipe(drink.idDrink)}
                >
                    Ver Receta
                </button>
            </div>
        </div>
    )
}
