import { useState } from 'react';

const ChangePassword = ({ changePasswordHandler }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    // add validation
    changePasswordHandler({ oldPassword, newPassword });

    setOldPassword('');
    setNewPassword('');
  };

  return (
    <form onSubmit={submitHandler} className="form-container">
      <h1>Change Password</h1>
      <div>
        <label htmlFor="email">Old password</label>
        <input
          id="email"
          type="text"
          name="oldPassword"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.currentTarget.value)}
        />
      </div>
      <div>
        <label htmlFor="password">New password</label>
        <input
          type="text"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.currentTarget.value)}
        />
      </div>
      <button type="submit">Change Password</button>
    </form>
  );
};

export default ChangePassword;
