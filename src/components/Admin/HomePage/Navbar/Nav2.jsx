import { LogOut, Sun, SunMoon, User } from "lucide-react"
import { useState } from "react"


export const Nav_Horizontal = () => {
    const[seen, setseen] = useState(false)
    const[d, setd] = useState(false)

    const handleLogout = (e)=>{
        e.preventDefault()
        setseen(!seen)
    }

    const handleDbtn = (e)=>{
        e.preventDefault()
        setd(!d)
    }

    return (
        <>
            <div className="h-16 border relative justify-end flex " >
                <div className="flex w-1/5 h-full justify-center items-center text-zinc-500 gap-3 " >
                {/* {
                    !d ? <Sun className="border-r-2 h-2/3 px-2 w-[40px] cursor-pointer " onClick={handleDbtn} /> : <SunMoon className="border-r-2 h-2/3 px-2 w-[40px] cursor-pointer" onClick={handleDbtn} />
                }  */}
                    <h2 className="font-semibold text-xl " >Welcome,</h2>
                    <div className="flex flex-col h-full " >  
                        <User className="cursor-pointer relative h-full text-xl" onClick={handleLogout} />
                        <span className={`${seen ? "flex" :"hidden"} cursor-pointer px-2 items-center gap-1 font-semibold bg-orange-200 top-15 ml-[-6] w-24 absolute  text-lg text-orange-500 h-10 border `} >Logout<LogOut/> </span>
                    </div>
                </div>
            </div>
        </>
    )
}