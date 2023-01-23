import React from "react";
import lens from "./images/lens.jpg"
import "./css/style.css"
import Add_post from "./add_post";
import { useNavigate } from "react-router-dom";


const Frontpage = () => {
    const navigate = useNavigate()

    function handleclick() {
        navigate("/view");
    }
    function progress(){
        navigate("/post")
    }
    return (
        <div className="card">
            <nav className="header">
                <section className='logo'> <img src={require("../component/images/newestinstaclone.jpg")} alt="logo" /></section>
                <section className='camera-icon'> <img onClick={progress} src={require("../component/images/newcamera.jpg")} alt="camera" height="70px" width="90px" /> </section>
            </nav>
            <div className="picture">
                <img className="image" src={require("../component/images/lens.jpg")} alt="lens" />
                <h3 className="content-text">10x Team 04</h3>
                <div><button className="button" onClick={handleclick}>Enter</button></div>
            </div>
            

        </div>
    )
}
export default Frontpage;