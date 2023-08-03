import React, { useEffect, useState } from "react";
import { auth, firestore } from './firebase'; // Import getFirestore
import { onAuthStateChanged } from 'firebase/auth';
import "./Dashboard.css";
import { query, collection, where, getDocs } from "firebase/firestore";

function Dashboard() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.uid);
        setLoggedIn(true);

        // Create a query that filters documents where the "uid" field matches the user's UID
        const userRef = collection(firestore, "users");
        const q = query(userRef, where("uid", "==", user.uid));

        getDocs(q)
          .then((querySnapshot) => {
            if (!querySnapshot.empty) {
              const docData = querySnapshot.docs[0].data();
              console.log(docData);
              setUsername(docData.userName);
              setFirstName(docData.firstName);
              setLastName(docData.lastName);
            } else {
              setUsername(user.email);
            }
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      } else {
        setLoggedIn(false);
        setUsername("");
      }
    });

    // Unsubscribe from the authentication state listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const [info, setInfo] = useState(false);
  const showInfo = () => {
    setInfo(true);
    setSetting(false);
  };

  const [setting, setSetting] = useState(false);
  const showSet = () => {
    setSetting(true);
    setInfo(false);
  };

  return (
    <div className="dashboard">
      <div className="block">
        <h1>{loggedIn ? username || "Guest" : "Guest"}</h1>
        <div className="bl"></div>
      </div>
      <div className="side-bar">
        <div className="side-con">
          <li className="upper">Profile</li>
          <li onClick={showInfo}>Dashboard</li>
          <li onClick={showSet}>Settings</li>
        </div>
      </div>
      <div className="main-content">
        <div className="noti">
          <div className="up2">
            <h3>Notifications</h3>
            <h4>Setting</h4>
          </div>
          <hr />
          <p>No Notifications</p>
        </div>
        <div>
          {info && (
            <div className="section1">
              <h1>Application Status</h1>
              <hr />
              <div className="box-4">
                <div className="col-1">
                  <div className="info">
                    <div className="de">
                      
                    <i className="far fa-2x fa-user"></i>
                    </div>

                      <div className="text">
                      <h4>Full Name</h4>
                      <p>Enter first name and last name fields.</p>
                      </div>
                    </div>
                    <div className="info">
                    <div className="de">
                      
                    <i className="far fa-2x fa-user"></i>
                    </div>

                      <div className="text">
                      <h4>Full Name</h4>
                      <p>Enter first name and last name fields.</p>
                      </div>
                    </div>
                    <div className="info">
                    <div className="de">
                      
                    <i className="far fa-2x fa-user"></i>
                    </div>

                      <div className="text">
                      <h4>Full Name</h4>
                      <p>Enter first name and last name fields.</p>
                      </div>
                    </div>
                    <div className="info">
                    <div className="de">
                      
                    <i className="far fa-2x fa-user"></i>
                    </div>

                      <div className="text">
                      <h4>Full Name</h4>
                      <p>Enter first name and last name fields.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           
          )}
        </div>
        {setting && <div className="section2"><h1>Settings</h1></div>}
      </div>
      {/* Add more sections and content based on your application's requirements */}
    </div>
  );
}

export default Dashboard;
