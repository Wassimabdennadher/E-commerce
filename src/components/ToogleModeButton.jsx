import React, { useContext } from 'react'
import { ToogleModeContest } from '../context/DarkContext/ToogleMode'


function ToogleModeButton() {
    const {dark , toogleDark} = useContext(ToogleModeContest)
    return (
        <div className={`${dark ? 'light' : 'dark'} p-4 `}>
            <input type="checkbox" className={`checkbox`} id="checkbox" />
            <label for="checkbox" className={`checkbox-label ${dark ? 'dark' : 'light'}`}onClick={() => {toogleDark()}}>
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <span className={`ball ${dark ? 'light' : 'dark'}`} ></span>
            </label>
        </div>
    )
}

export default ToogleModeButton