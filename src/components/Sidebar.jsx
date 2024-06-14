import { MoreVertical, ChevronLast, ChevronFirst, BriefcaseMedical, TriangleAlert, ClipboardCheck } from "lucide-react"
import { useContext, createContext, useState } from "react"
import { Link } from "react-router-dom"
import { RiBookmarkFill, RiHome2Fill, RiMailFill, RiUser3Fill, RiLogoutBoxFill } from "react-icons/ri";
import { useAuth } from "../hooks/useAuth";
import { useSelector } from "react-redux";
import Solicitudes from "./Solicitudes";

const SidebarContext = createContext()

export default function Sidebar({ children }) {
    const { user } = useSelector(state => state.auth)
    if (user.rol > 0) {
        console.log('Admin')
    }
    let nombre = user.nombre
    let email = user.email
    const [expanded, setExpanded] = useState(true)
    const { startLogout } = useAuth()

    const handleClickCerrarSesion = () => {
        startLogout()
    }

    return (
        <div className={`min-h-full bg-slate-100 transition-all duration-500${expanded ? "w-2/4" : "w-20"}`} >
            <div className="flex flex-col border-r shadow-sm  h-full p-2">
                <div className="flex justify-around p-2">
                    <img
                        src="/src/images/descarga.png"
                        className={` p-2 overflow-hidden transition-all rounded-lg ${expanded ? "w-40" : "w-0"
                            }`}
                        alt=""
                    />
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100"
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>
                <ul className="h-full  p-2">

                    <div className="flex flex-col  gap-10 p-2 items-center overflow-y-hidden">
                        {
                            user && user.rol > 0 ? (

                                <Link to="/VistaDatos" className={`flex rounded p-2 gap-2 text-xl cursor-pointer stroke-[0.75]  stroke-neutral-400 text-neutral-950  place-items-center  hover:bg-blue-100 transition-color duration-100 ${expanded ? 'w-full' : 'w-20'}`}>
                                    <RiMailFill className={`${expanded ? "" : "w-full h-7"}`} />
                                    <p className={`tracking-wide ${expanded ? "w-full" : "w-0"}`}>{expanded ? 'Solicitudes' : ''}</p>

                                </Link>
                            ) : (
                                <h1> </h1>
                            )
                        }
                        <Link to="/Pantalla_postLogin" className={`flex rounded p-2 gap-2 text-xl cursor-pointer stroke-[0.75]   stroke-neutral-400 text-neutral-950  place-items-center  hover:bg-blue-100 transition-color duration-100 ${expanded ? 'w-full' : 'w-20'}`}>
                            <RiHome2Fill className={`${expanded ? "" : "w-full h-7"}`} />
                            <p className={`tracking-wide ${expanded ? "w-full" : "w-0"}`}>{expanded ? 'Inicio' : ''}</p>

                        </Link>
                        <Link to="/Solicitudes" className={`flex rounded p-2 gap-2 text-xl cursor-pointer stroke-[0.75]   stroke-neutral-400 text-neutral-950  place-items-center  hover:bg-blue-100 transition-color duration-100 ${expanded ? 'w-full' : 'w-20'}`}>
                            <RiHome2Fill className={`${expanded ? "" : "w-full h-7"}`} />
                            <p className={`tracking-wide ${expanded ? "w-full" : "w-0"}`}>{expanded ? 'Solicitud tabla' : ''}</p>

                        </Link>
                        <Link to="/Form" className={`flex rounded p-2 gap-2 text-xl cursor-pointer stroke-[0.75]  stroke-neutral-400 text-neutral-950  place-items-center  hover:bg-blue-100 transition-color duration-100 ${expanded ? 'w-full' : 'w-20'}`}>
                            <RiBookmarkFill className={`${expanded ? "" : "w-full h-7"}`} />
                            <p className={`tracking-wide ${expanded ? "w-full" : "w-0"}`}>{expanded ? 'Formulario' : ''}</p>
                            {/* <button className="rounded-lg bg-gray-50 hover:bg-blue-700 p-2 min-w-full">

                                {expanded ? "Formulario" : <none />}
                            </button> */}
                        </Link>

                        <Link to="/Usuario" className={`flex rounded p-2 gap-2 text-xl cursor-pointer stroke-[0.75]  stroke-neutral-400 text-neutral-950  place-items-center  hover:bg-blue-100 transition-color duration-100 ${expanded ? 'w-full' : 'w-20'}`}>
                            <RiUser3Fill className={`${expanded ? "" : "w-full h-7"}`} />
                            <p className={`tracking-wide ${expanded ? "w-full" : "w-0"}`}>{expanded ? 'Perfil' : ''}</p>

                        </Link>

                        <button to="/Loginn" onClick={handleClickCerrarSesion} className={`flex rounded p-2 gap-2 text-xl cursor-pointer stroke-[0.75]  stroke-neutral-400 text-neutral-950  place-items-center  hover:bg-blue-100 transition-color duration-100 ${expanded ? 'w-full' : 'w-20'}`}>
                            <RiLogoutBoxFill className={`${expanded ? "" : "w-full h-7"}`} />
                            <p className={`tracking-wide ${expanded ? "w-full" : "w-0"}`}>{expanded ? 'Cerrar sesion' : ''}</p>


                        </button>
                    </div>
                </ul>

                <SidebarContext.Provider value={{ expanded }}>

                </SidebarContext.Provider>
                <div className=" flex p-3">
                    <img
                        src="/src/images/descarga1.jpg"
                        alt=""
                        className="w-10 h-10 rounded-md"
                    />
                    <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
                        <div className="leading-4">
                            <h4 className="font-semibold text-xl">{nombre}</h4>
                            <span className="text-base text-gray-600">{email}</span>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}