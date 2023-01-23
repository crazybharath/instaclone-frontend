import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Add_post=()=>{
    const [Username,setusername]=useState("")
    const [location,setlocation]=useState("")
    const [imagefile,setimagefile]=useState("")
    const [Description,setdescription]=useState("")
    const navigate=useNavigate()

    function handleclick(){
        navigate("/view")
    }
    
    

    const uploadpost=()=>{
        
        const formData=new FormData();
        //takes a value in the key valueformat
        formData.append("username",Username);
        formData.append("location",location);
        formData.append("imagefile",imagefile);
        formData.append("Description",Description);
        console.log(imagefile);
        fetch("http://localhost:8080/uploads",{
            method:"POST",
            body:formData
        })

        
    }
    function callboth(){
        uploadpost()
        handleclick()
    }
    
    
    return(
        <div className="card">
            <nav className="header">
                <section className='logo'> <img src={require("../component/images/newestinstaclone.jpg")} alt="logo" /></section>
                <section className='camera-icon'> <img src={require("../component/images/newcamera.jpg")} alt="camera" height="70px" width="90px" /> </section>
            </nav>
            <div className="form-card">
                <input className="file" type="file" placeholder="Browser" onChange={(e)=>{
                    setimagefile(e.target.files[0])
                }}/>
                <input className="author" placeholder="Author" value={Username} onChange={(e)=>{setusername(e.target.value)}}/>
                <input className="location" placeholder="location" value={location} onChange={(e)=>{setlocation(e.target.value)}} />
                <textarea className="description" placeholder="Description" value={Description} onChange={(e)=>{setdescription(e.target.value)}}></textarea>
                <button className="post" onClick={callboth} >Post</button>
            </div>
        </div>
    )
}
export default Add_post;