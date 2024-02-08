import { useEffect,useState } from "react";
import  axios  from "axios";
import {useSelector} from  'react-redux';
import { selectStuId } from "./stuSlice";
let sno=0;
const SeeAdminAns=()=>{
    const [myData,setMyData]=useState([]);
    const  stuid=useSelector(selectStuId);
    useEffect(()=>{
        loaddata();
    },[])
    const loaddata=()=>{
        let url = `http://localhost:4000/stuComplain/?stuid=${stuid}`;


        axios.get(url).then((res) => {
            setMyData(res.data);
        });
    }
    const studentComplain = myData.map((key) => {
        sno++;
        return (
            <tr key={sno}>
                <td>{sno}</td>
                <td>{key.stucomplain}</td>
                <td>{key.ans}</td>
            </tr>
        );
    });
   

    return(
        <>
        <div className="see_ans">
            <h1>Response By Admin</h1>
            <table class="container_stc">
            <thead>
              <tr>
                <th><h1>Sno</h1></th>
                <th><h1>Complaintsr</h1></th>
                <th><h1>Response by admin</h1></th>
               
              </tr>
            </thead>
            <tbody>
            {studentComplain}
           </tbody>
       </table>
       </div>
                    
               
        </>


    );

}
export default SeeAdminAns;