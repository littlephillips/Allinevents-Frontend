import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";

// css
import "../css/profilepage.css"

function ProfilePage() {

const {token} = localStorage.getItem("jwt");
const {user} = localStorage.getItem("user");
const [modal, setModal]=useState(false)
const [error, setError] = useState(null)


const navigate = useNavigate();
const [newDetails, setNewDetails] = useState({});
const [update, setUpdate] = useState(false);


useEffect(() => {
    fetch("/users")
    .then((res) => res.json())
    .then((data) => setNewDetails(data))
},[]);

window.console.dir(newDetails)


function handleUpdate() {
    setUpdate(true);
}

function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setNewDetails({ ...newDetails, [name]: value });
}

function handleDelete() {
    fetch(`/users/${user.id}`, {
        method: "DELETE",
        headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
        },
    }
    )
    .then((r) => r.json())
    .then((data) => {
        localStorage.clear();
        navigate("/login");
    });
    }

function handleSave() {
    fetch(`/users/${user.id}`, {
        method: "PATCH",
        headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newDetails),
    }
    )
    .then((res) => {
        if(res.ok){
        res.json().then((data)=>{
            setUpdate(!update);
            handleNotify()
        })
        }else{
        res.json().then((data)=>{setError(data)})
        }
})
}


function handleNotify(){
    setUpdate(!update);
    setModal(true)
    setTimeout(reset,2000)
}

function reset(){
    setModal(false)
}




return (
    <div className="profile-container">

    {update ? (

        <div className="profile-update">
        <div className="profile-update-details">
            Update your details here
        </div>

        {error ? <span> {error.error} </span> : null }
        
        <div className="profile-min-inputs">
        <div className="profile-label">
            <label>Username:</label>
            <input
            onChange={(e) => handleChange(e)}
            className="profile-input"
            name="username"
            />
        </div>

        <div className="profile-label">
            <label>Email:</label>
            <input
            onChange={(e) => handleChange(e)}
            className="profile-input"
            name="email"
            />
        </div>
        </div>

        <div className="profile-update-container">
            <button
            onClick={handleSave}
            className="profile-update-button save">
            Save
            </button>

            <button
            onClick={() => setUpdate(!update)}
            className="profile-update-button discard">
            Discard
            </button>
        </div>

        </div>

        ) : null }

    <div className="profile-welcome">
        Welcome {/* {user.username} */}
    </div>

    {modal ?

    <div className="profile-update-success">
        <span>details updated sucessfully 🥳   </span>
    </div>

    : null } 

    <div className="profile-show">

        <div>
        <label className="profile-show-labels">Username:</label>
        <input
            className="profile-change-inputs"
            name="username"
            onChange={(e)=>handleChange(e)}
            // value={user.username}
        />
        </div>

        <div>
        <label className="profile-show-labels">Email:</label>
        <input
            className="profile-change-inputs"
            name="email"
            onChange={(e)=>handleChange(e)}
            // value={user.email}
        />
        </div>
    </div>

    <div className="profile-destroy">
        <button
        onClick={handleUpdate}
        className=" profile-details-update">
        Update Account
        </button>

        <button
        onClick={() => handleDelete()}
        className="profile-destroy-delete">
        Delete Account
        </button>

        <button
        onClick={() => navigate("/admin")}
        className="profile-new-event">
        Create event
        </button>        
    </div>

    </div>
);
}

export default ProfilePage;
