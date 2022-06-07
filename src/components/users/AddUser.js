import Axios from 'axios';
import React,{useState} from 'react'
import {useHistory} from "react-router-dom";

const AddUser = ()=>
{
    let history=useHistory();

    const [user,setUser]=useState({
    user:"",
    username:"",
    email:"",
    phone:"",
    website:""
});
//destruction for user
const {name,username,email,phone,website}= user;


const onInputChange = e=>
{
    //we are using spread operator
    //using spread operators fields will not show errors.
    setUser({...user,[e.target.name]:e.target.value})
}

//for form submission
const onSubmit= async e=>
{
    e.preventDefault();

    //call post method
    await Axios.post("http://localhost:3001/users",user);
    //redirecting the data to home screen
    history.push("/");
}


    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add A User</h2>
                <form  onSubmit={e=>onSubmit(e)}>
                    <div className="form-group">
                       <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Name"
                            name="name"
                            value={name}
                            onChange={e=>onInputChange(e)} />
                    </div>
                    <div className="form-group">
                       <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your UserName"
                            name="username" 
                            value={username}
                            onChange={e=>onInputChange(e)}
                            />
                    </div>
                    <div className="form-group">
                       <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Email Address"
                            name="email"
                            value={email}
                            onChange={e=>onInputChange(e)} />
                    </div>
                    <div className="form-group">
                       <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Phone No"
                            name="phone" 
                            value={phone}
                            onChange={e=>onInputChange(e)}/>
                    </div>

                    <div className="form-group">
                       <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Website Name"
                            name="website"
                            value={website}
                            onChange={e=>onInputChange(e)} />
                    </div>
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>

    )
}
export default AddUser; 
