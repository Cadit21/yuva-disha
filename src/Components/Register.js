import React, { useState } from "react";
import "./reg.css";
import { createUserDocument, auth } from './firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    orgname: "",
    selectedSector: "",
    issamarth: false,
    
  });

  const handleInput = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { ...userInfo };

    try {
      // Create the user account using email and password
      const { email, password } = userData;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      userData.uid = userCredential.user.uid;
      console.log(userData.uid);
      // Save additional user data in Firestore
      delete userData.password;
      await createUserDocument("users", userData);

      console.log("Registration successful!", userCredential.user);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const sectors = ['Technology', 'Finance', 'Healthcare', 'Education', 'Other'];

  return (
    <div className="container-1">
    <div className="container">
      <div className="con">
        <div className="button2">
          <button onClick={() => setUserInfo({ ...userInfo, issamarth: false })}>Abhilashi</button>
          <button onClick={() => setUserInfo({ ...userInfo, issamarth: true })}>Samarth</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name:</label>
            <input type="text" name="firstName" required onChange={handleInput} />
            <label>Last Name:</label>
            <input type="text" name="lastName" required onChange={handleInput} />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input type="text" name="userName" required onChange={handleInput} />
            <label>Email:</label>
            <input type="email" name="email" required onChange={handleInput} />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" required onChange={handleInput} />
            <br />
            <label>Confirm Password:</label>
            <input type="password" name="confirmPassword" required onChange={handleInput} />
          </div>
          <br />
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" required onChange={handleInput} />
          {!userInfo.issamarth && (
            <div>
              <label>Organisation Name:</label>
              <input type="text" name="orgname" required onChange={handleInput} />
            </div>
          )}
          <label>Select Sector:</label>
          <select name="selectedSector" required onChange={handleInput}>
            <option value="" disabled>
              Please select a sector
            </option>
            {sectors.map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Register;
