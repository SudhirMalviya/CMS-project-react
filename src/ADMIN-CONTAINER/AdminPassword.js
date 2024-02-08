import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectadminid } from './AdminSlice';

const AdminPassword = () => {
  const [oldpass, setOldpass] = useState('');
  const [newpass, setNewpass] = useState('');
  const [repass, setRepass] = useState('');
  const adminid = useSelector(selectadminid);

  const getdata = (e) => {
    e.preventDefault();
    let url = `http://localhost:4000/admin/${adminid}`;

    axios.get(url).then((res) => {
      if (res.data.password === oldpass) {
        if (newpass === repass) {
          url = `http://localhost:4000/admin/${adminid}`;
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
    <div className='adminpass_container'>
     
      <div className='Adminpass'>
        <h1 className='key-animation'>Set Password</h1>
        <form>
          <label>Old Password:</label>
          <input
            type='password'
            id='oldpass'
            name='oldpass'
            value={oldpass}
            onChange={(e) => setOldpass(e.target.value)}
          />

          <label>New Password:</label>
          <input
            type='password'
            id='newpass'
            name='newpass'
            value={newpass}
            onChange={(e) => setNewpass(e.target.value)}
          />

          <label>Re-Enter Password:</label>
          <input
            type='password'
            id='repass'
            name='repass'
            value={repass}
            onChange={(e) => setRepass(e.target.value)}
          />

          <button type='button' onClick={getdata}>
            Set Password
          </button>
        </form>
      </div>
      <div className='adminpass_image'>
        <img src="../image/passchange.png" />
      </div>
    </div>
    </>
  );
};

export default AdminPassword;

