import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineLike, AiOutlineSend } from "react-icons/ai";

const Postpage = () => {
    const [posts, setposts] = useState([])
    const navigate = useNavigate()
    function handleclick() {
        navigate("/post")
    }
    useEffect(() => {
        fetch("http://localhost:8080/all").then(res => res.json())
            .then((data) => {
                console.log(data.result);
                setposts(data?.result)
            })
    }, [])
    console.log(posts.imagefile);
    console.log(posts.username);
    return (
        <div>
            <nav className="header">
                <section className='logo'> <img src={require("../component/images/newestinstaclone.jpg")} alt="logo" /></section>
                <section className='camera-icon'> <img onClick={handleclick} src={require("../component/images/newcamera.jpg")} alt="camera" height="70px" width="90px" /> </section>
            </nav>
            <div className="postimg">
                {
                    posts?.map?.((post, index) => {
                        // console.log(post);
                        return (
                            <div key={index}>
                                <h4 className="post-name">{post?.username}</h4>
                                <h6 className="post-location">{post?.location}</h6>
                                <img src={`http://localhost:8080/image/${post?.imagefile}`} alt="pics" width={700} height={300} />
                                <section className="detail">
                                    <section className="likes-section">
                                       <AiOutlineLike width={32} height={32}/>
                                        <AiOutlineSend width={32} height={32}/>
                                        <p className="date">{post?.date}</p>
                                    </section>
                                    <p>{Math.ceil(Math.random() * 100)} likes</p>
                                    <p className="post-description">{post?.description}</p>
                                </section>


                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Postpage;