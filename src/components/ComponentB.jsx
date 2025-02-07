import {ComponentC} from './ComponentC.jsx'
export const ComponentB = ({name})=>{
    return(
        <div>
          <ComponentC name={name}/>
        </div>
    )
}