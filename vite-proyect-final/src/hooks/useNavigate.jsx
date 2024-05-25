import {createContext, useContext, useState, useEffect, Children} from "react"

//contexto
const NavigationContext = createContext({page: '/', navigate: ()=>{}})
const NavigationProvider = ({children}) =>{
    const path = window.location.hash.substring(1)

    const [page, setPage] = useState(path || '/')

    useEffect(()=>{
        if(path){
            setPage(path)
        }
    },  [path])
    
    const navigate = (url)=>{
        console.log("Page: ",url)
        setPage(url)
        window.location.hash = url
    }

    return(
        <NavigationContext.Provider value={{page, navigate}}>
            {children}
        </NavigationContext.Provider>
    )
}

const useNavigate=()=>{
    return useContext(NavigationContext)
}

export default useNavigate
export {NavigationProvider}