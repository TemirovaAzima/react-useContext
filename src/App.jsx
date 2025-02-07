import {ComponentA} from './components/ComponentA.jsx'
import {createContext} from 'react'
export const Data = createContext();
export const Data2 = createContext();
export const Data3 = createContext();
export const Data4 = createContext();
export const App =() =>{
    const name = "Azima"
    const age = 17
    const dateOfBirth = {dateOfBirth: 2007}
    const myFavouriteNumbers =[1,2,3,4,5]
    return(
        <div>
            <Data.Provider value={name}>
                <Data2.Provider value={age}>
                    <Data3.Provider value={dateOfBirth}>
                        <Data4.Provider value={myFavouriteNumbers}>
                            <ComponentA />
                        </Data4.Provider>
                    </Data3.Provider>
                </Data2.Provider>
            </Data.Provider>
        </div>
    )
}