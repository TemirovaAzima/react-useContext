import {UserContext} from "../UserContext.jsx"
import {useContext} from 'react'

const UserProfile = ()=>{
    const {user}= useContext(UserContext);
    return(
        <div>
            <h1>User Profile</h1>
            <p>My name is {user.name}</p>
        </div>
    )
}
export default UserProfile