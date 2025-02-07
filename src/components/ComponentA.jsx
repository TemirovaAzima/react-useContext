import {ComponentB} from './componentB.jsx'
export const ComponentA =({name})=>{
    return(
        <div>
           <ComponentB name={name}/>
        </div>
    )
}