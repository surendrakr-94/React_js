import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const { userid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/").then((res) => {
            return res.json();
        }).then((resp) => {
            
            namechange(resp.name);
            emailchange(resp.email);
            phonechange(resp.phone);
            
        }).catch((err) => {
            console.log(err.message);
        })
    }, [userid]);

    
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const userdata={name,email,phone};
      

      fetch("https://jsonplaceholder.typicode.com/users",{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(userdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>

        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>

                    <div className="card" style={{"textAlign":"left"}}>
                        <div className="card-title">
                            <h2>User Edit</h2>
                        </div>
                        <div className="card-body">

                            <div className="row">

                                

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                    {name.length===0 && validation && <span className="text-danger">Enter the name</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                
                                <div className="col-lg-12">
                                    <div className="form-group">
                                       <button className="btn btn-success" type="submit">Save</button>
                                       <Link to="/" className="btn btn-danger">Back</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </form>

            </div>
        </div>
    </div>
     );
}
 
export default Update;