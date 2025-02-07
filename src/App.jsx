import {ComponentA} from './components/ComponentA.jsx'
export const App =() =>{
    const name = "Azima"
    return(
        <div>
           <ComponentA name={name}/>
        </div>
    )
}