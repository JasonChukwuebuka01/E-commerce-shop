import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';



const ProfileDisplay = () => {
    const [toggle, setToggle] = useState(false);
    const { logOut, user } = useContext(AuthContext);

    const navigate = useNavigate();

    console.log(user)

    function handleSignout() {
        logOut()
            .then(() => {
                alert(" Signed out Succesfully")
                navigate("/", { replace: true });
                // Reloads the current page
                location.reload();

            })
            .catch((error) => {
                const errorMsg = error.message;
                alert(`${errorMsg}`);
            })
    };


    return (
        <div className='profile-display-box'>
            <div className="profile-photo-thumb">
                <img src={user !== null ? `${user}` : "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg"} alt="" />
            </div>
            <i className={toggle ? "icofont-rounded-down" : "icofont-rounded-up"} onClick={() => setToggle(!toggle)}></i><i className="icofont-arrow"></i>

            <div className={`toggle-content  ${toggle ? "active" : ""}`}>
                <ul className="lab-ul toggle-list-option">
                    <li onClick={handleSignout}>Logout</li>
                    <li><Link to={"/cart-page"}>Shopping Cart</Link></li>
                    <li >Profile</li>
                    <li className='order'>Order</li>
                </ul>
            </div>


        </div>
    )
}

export default ProfileDisplay