import { createContext, useState } from "react";
const ToogleModeContest = createContext()
const ToogleModeProvider = (props) => {
    const [dark,setDark] = useState(false)
    const toogleDark = () => {
        setDark(!dark)
    }
    return (
        <ToogleModeContest.Provider value={{dark, toogleDark}} >
            {props.children}
        </ToogleModeContest.Provider>
    )
}
export {ToogleModeProvider, ToogleModeContest}