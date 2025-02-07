import {Data,Data2} from '../App.jsx'
import {useContext} from 'react'
export const ComponentC =()=>{
    const userName= useContext(Data)
    const userAge = useContext(Data2)
    return(
        <div>
         <h1>My name is {userName} and my age is {userAge}</h1>
        </div>
    )
}
