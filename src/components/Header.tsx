import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../store/useAppStore";

export default function Header() {

    const [searchFilters, setSearchFilters] = useState({
        ingridient : '',
        category: ''
    })
    const {pathname} = useLocation()

    const isHome= useMemo(() => pathname === '/' ,[pathname])
    const fetchCategories =  useAppStore((state) => state.fetchCategories)
    const categories =  useAppStore((state) => state.categories)
    const searchRecipes =  useAppStore((state) => state.searchRecipes)
    const showNotification =  useAppStore((state) => state.showNotification)

    useEffect(() => {
        fetchCategories()
    },[])
    
    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(Object.values(searchFilters).includes('')){
            showNotification({
                text: "Todos los campos son obligatorios",
                error: true
            })
            return
        }
        searchRecipes(searchFilters)
    }
      

    return (
        
        <header className={isHome? "bg-[url(/bg.jpg)] bg-center bg-cover" : 'bg-slate-800' }>
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="logotipo" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink 
                            className= {({isActive}) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"}
                            to='/'

                        >Inicio</NavLink>
                        <NavLink 
                            className= {({isActive}) => isActive ? "text-orange-500 uppercase font-bold" : "text-white uppercase font-bold"}
                            to='/favoritos'
                        >Favoritos</NavLink>
                    </nav>
                </div>
                {isHome && (
                    <form 
                        className = "md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6 "
                        onSubmit = {handleSubmit}

                    >
                        <div className="space-y-4">
                            <label 
                                htmlFor="ingridient"
                                className="block text-white font-extrabold text-lg" 
                            >Nombre o Ingrededientes</label>
                            <input 
                                id="ingridient"
                                type="text" 
                                name="ingridient"
                                className="p-3 w-full rounded-lg bg-slate-200 focus:outline-none"
                                placeholder="Nombre o ingrediente. Ej. Vodka, Tequila, Café"
                                onChange={handleChange}
                                value={searchFilters.ingridient}
                            />
                        </div>
                        <div className="space-y-4">
                            <label 
                                htmlFor="category"
                                className="block text-white font-extrabold text-lg" 
                            >Categoría</label>
                            <select 
                                id="category"
                                name="category"
                                className="p-3 w-full rounded-lg bg-slate-200 focus:outline-none"
                                onChange={handleChange}
                                value={searchFilters.category}
                            > 
                                <option value=""> -- Seleccione -- </option>
                                {
                                    categories.drinks.map((category)=> (
                                        <option 
                                            value={category.strCategory}
                                            key={category.strCategory}
                                        > {category.strCategory} </option>
                                    ))
                                }
                              
                                
                                
                            </select>
                        </div>
                        <input type="submit"  
                            value='Buscar Recetas'
                            className="uppercase cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold rounded-lg p-2 w-full"
                        />
                    </form>
                )}
            </div>
        </header>
    )
}
