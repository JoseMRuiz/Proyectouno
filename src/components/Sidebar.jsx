import { MoreVertical, ChevronLast, ChevronFirst,BriefcaseMedical,TriangleAlert, ClipboardCheck  } from "lucide-react"
import { useContext, createContext, useState } from "react"
import { Link } from "react-router-dom"

const SidebarContext = createContext()

    export default function Sidebar({ children }) {
        let nombre = "jose"
        let email = "josemruiz6@gmail.com"
    const [expanded, setExpanded] = useState(true)
    
    
    return (
        <div className="h-screen display:block">
        <nav className="h-screen flex flex-col bg-white border-r shadow-sm">
                <div className="flex">
                <img
            src="/src/images/descarga.png"
            className={`overflow-hidden transition-all ${
                expanded ? "w-40" : "w-0"
            }`}
            alt=""
        />
        
                
            <button
                onClick={() => setExpanded((curr) => !curr)}
                className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 ml-4"
            >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
                </div>
            <div className="p-4 pb-2  justify-start items-start">
        
                <ul className="flex-1 px-3">
    
    <div className="flex flex-col items-start">
        <Link to="/Form">
        <button 
            className="p-1.5 mt-16 mb-16 rounded-lg bg-gray-50 hover:bg-blue-100 ml-4"
        >
        {expanded ? "Formulario" : <none />}
        </button>
        </Link>
        
        <Link to="/Pantalla_postLogin"><button 
            className="p-1.5 mt-16 mb-16 rounded-lg bg-gray-50 hover:bg-blue-100 ml-4"
            
        >
        {expanded ? "Inicio": <none/>}
        </button>
        </Link>
        <button 
            className="p-1.5 mt-16 mb-16 rounded-lg bg-gray-50 hover:bg-blue-100 ml-4"
        >
        {expanded ? "boton3" : <none/>}</button>
        
        <Link to="/Loginn"><button 
            className="p-1.5 mt-16 mb-16 rounded-lg bg-gray-50 hover:bg-blue-100 ml-4"
            
        >
        {expanded ? "cerrar sesion": <none/>}
        </button>
        </Link>
                
    </div>
    </ul>
        </div>


        <SidebarContext.Provider value={{ expanded }}>

        </SidebarContext.Provider>

        <div className="border-t flex p-3 mt-8">
            <img
                src="/src/images/descarga1.jpg"
                alt=""
                className="w-10 h-10 rounded-md"
            />
            <div
                className={`
                flex justify-between items-center
                overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
            `}
            >
                <div className="leading-4">
                <h4 className="font-semibold">{nombre}</h4>
                <span className="text-xs text-gray-600">{email}</span>
                </div>
                <MoreVertical size={20} />
            </div>
            </div>
        </nav>
    
    </div>

)
}