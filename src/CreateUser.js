import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'


const CreateUser = () => {
const[values,setValues]=useState({
    name:"",
    email:"",
    phone:"",
})
const navigate = useNavigate();
const handleSubmit = (e) => {

    e.preventDefault();
    

axios.post("http://localhost:3001/users", values )
.then(res=>{
console.log(res)
navigate('/')
alert("Create successfully.");

})
.catch(err=>console.log(err))
}
    
     
  

  return (
    <div  className="d-flex w-100 justify-conten-center align-items-center bg-light">  
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">

      <h1 style={{color:"green"}}> User Add</h1>
      <form onSubmit={handleSubmit}>


<div className='mb-2'>
<label htmlFor="name">Name</label>
<input type="text" name="name" className="form control" placeholder="Enter the Name"
onChange={e=>setValues({...values,name:e.target.value})}/>
</div>
<div className='mb-2'>
<label htmlFor="name">Email</label>
<input type="text" email="email" className="form control" placeholder="Enter the Email"
onChange={e=>setValues({...values,email:e.target.value})}/>
</div>
<div className='mb-3'>
<label htmlFor="phone">Phone</label>
<input type="text" phone="phone" className="form control" placeholder="Enter the Phone"
onChange={e=>setValues({...values,phone:e.target.value})}/>
</div>



<button className="btn btn-primary m-2" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-success m-2">
                        Back
                      </Link>


      </form>


      </div>
      
    </div>
  )
}

export default CreateUser
