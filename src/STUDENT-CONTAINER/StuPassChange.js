import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectStuId } from './stuSlice';

const StuPassChange = () => {
  const [oldpass, setOldpass] = useState('');
  const [newpass, setNewpass] = useState('');
  const [repass, setRepass] = useState('');
  const stuid = useSelector(selectStuId);

  const SunmitHandle = (e) => {
    e.preventDefault();
    let url = `http://localhost:4000/student/${stuid}`;

    axios.get(url).then((res) => {
      if (res.data.password === oldpass) {
        if (newpass === repass) {
          url = `http://localhost:4000/student/${stuid}`;
          axios.patch(url, { password: newpass }).then(() => {
            alert('Password successfully changed');
          });
        } else {
          alert('Passwords do not match');
        }
      } else {
        alert('Please enter a valid password');
      }
    });
  };

  return (
    <>
     <div className='stupass_container'>
     <div className='stupass_image'>
        <img src="../image/keypass.png" />
      </div>
     
     <div className='stupass'>
       <h1 className='key-animation'>Set Password</h1>
      <form>
        Old Password:
        <input
          type="text"
          name="oldpass"
          value={oldpass}
          onChange={(e) => setOldpass(e.target.value)}
        />

        New Password:
        <input
          type="text"
          name="newpass"
          value={newpass}
          onChange={(e) => setNewpass(e.target.value)}
        />

        Re-Enter Password:
        <input
          type="text"
          name="repass"
          value={repass}
          onChange={(e) => setRepass(e.target.value)}
        />

        <button type="button" onClick={SunmitHandle}>
          Set Password
        </button>
      </form>
      </div>
     
    </div>
    </>
  );
};

export default StuPassChange;

