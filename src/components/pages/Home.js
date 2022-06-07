import React,{useState,useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
const Home = ()=>
{
    //useState with blank array
    const [users,setUser]=useState([]);

    //to perform some action on a page
    //we will call loadUser on page load with 1 time.
    useEffect(()=>
    {
        loadUsers();
    },[])

    const loadUsers = async ()=>
    {
        //await untill the request is not completed.
       const result= await axios.get("http://localhost:3001/users");
        //set the data to home page
        setUser(result.data);
    }

    return (
        <div className="container">
               <div className="py-4">
               <h1>Home Page</h1> 
               <table class="table border shadow">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
                <th scope="row">{index+1}</th>
                <td>{user.name}</td> 
                <td>{user.username}</td> 
                <td>{user.email}</td> 
                <td>
            <Link class="btn btn-primary mr-2">view</Link>
            <Link class="btn btn-outline-primary mr-2">Edit</Link>
            <Link class="btn btn-danger mr-2">Delete</Link>
                </td>
            </tr>
        ))
    }
  </tbody>
</table>


               </div> 
        </div>
    )
}
export default Home;