import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectStuId } from './stuSlice';
import axios from "axios";

const StuComplain = () => {
  const [complain, setComplain] = useState("");
  const stuId = useSelector(selectStuId);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = "http://localhost:4000/stuComplain";
    axios.post(url, { "stuid": stuId, "stucomplain": complain, "ans": "" }).then((res) => {
      alert("Complaint will be registered");
    });
  };

  return (
    <>
    <div className="stucomplain_container">
      <h2 className="stucomplain_heding">Submit a Complaint</h2>
      <form onSubmit={handleSubmit}className="stucomplain_form">
        <textarea
          className="stucomplain_textarea"
          name="complain"
          cols="50"
          rows="6"
          value={complain}
          onChange={(e) => setComplain(e.target.value)}
          placeholder="Enter your complaint..."
        />
       
        <button className="stucomplain_submit_button" type="submit">Submit</button>
      </form>
      
    </div>
    </>
  );
};

export default StuComplain;

