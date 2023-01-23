import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Frontpage from "./component/frontpage";
import Postpage from "./component/postview";
import Add_post from "./component/add_post";

const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage/>}/>
          <Route path="/post" element={<Add_post/>}/>
          <Route path="/view" element={<Postpage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;