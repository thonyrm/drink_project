import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
    const {pathname} = useLocation()

    const isHome= useMemo(() => pathname === '/' ,[pathname])
    console.log(isHome)

    return (
        
        <header className="bg-slate-800">
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
                        className="md:w-1/2 2xl:w-1/3"
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
                            />
                        </div>
                    </form>
                )}
            </div>
        </header>
    )
}
