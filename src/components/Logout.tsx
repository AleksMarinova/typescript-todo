import {logout} from '../services/auth.service';
import { useNavigate } from 'react-router-dom';



const Logout = ()=> {

    const navigate = useNavigate();
    const handleLogout = (e: React.SyntheticEvent)=>{
        e.preventDefault();
        e.stopPropagation();
        logout();
        navigate('/');
    };
    return(
        <div className="logout">
            <button onClick={(e)=>handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout;