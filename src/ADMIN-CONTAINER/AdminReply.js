import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const AdminReply = () => {
  const [ans, setAns] = useState("");
  const { id } = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = `http://localhost:4000/stucomplain/${id}`;
    
      axios.patch(url, { ans: ans}).then((res)=>{
        alert("submited")
      }) 
  };
  
  return (
    <>
    <div className="admin_reply_container2">
      <h1 className="admin_heading">Admin Answer</h1>
       <div className="admin_id">ID : {id}</div>

      <form onSubmit={handleSubmit} className="admin_reply_form">
        <textarea
          className="admin_reply_textarea"
          name="ans"
          cols="30"
          rows="6"
          value={ans}
          onChange={(e) => setAns(e.target.value)}
          placeholder="Enter your Answer..."
        />
        <button className="admin_REPLY_submit_button" type="submit">
          Submit
        </button>
      </form>
      </div>
    </>
  );
};

export default AdminReply;
