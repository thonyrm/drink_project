import { useMemo } from "react"
import { useAppStore } from "../store/useAppStore"
import DrinkCard from "../components/DrinkCard"


export default function IndexPage() {

    const drinks =  useAppStore((state)=> state.drinks)
    const hasDrinsks = useMemo(() => drinks.drinks.length,[drinks])
    
    return (
        <>
            <h1 className="text-6xl font-extrabold">Recetas</h1>
            {hasDrinsks ? (
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10">
                    {drinks.drinks.map((drink)=> (
                        <DrinkCard
                            key={drink.idDrink}
                            drink= {drink}
                        />
                    ))}
                </div>
            ) :
            (
                <p className="my-10 text-center text-2xl">No hay resultados aún, utilioza el formulario de recetas</p>
            )
            }
           
        </>
    )
}
