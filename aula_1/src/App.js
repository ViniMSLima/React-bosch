import React, { useState, useEffect } from 'react';
import style from './App.css';

const App = () => {
 const [count, setCount] = useState(0);
 const [pageTitle, setPageTitle] = useState('Initial Page Title');
 const [notifVisible, setNotifVisible] = useState(false);

 useEffect(() => {
    document.title = pageTitle;
    setNotifVisible(true);
    setTimeout(() => {
      setNotifVisible(false);
    }, 1000);
 }, [pageTitle]);

 useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 5000);
    return () => clearInterval(timer);
 }, []);

 useEffect(() => {
    setPageTitle(`Count: ${count}`);
 }, [count]);

 return (
    <div>
      <h1>Website Title: {pageTitle}</h1>
      <div>

      {notifVisible && <div style={{borderRadius: "20px", backgroundColor: "lightgreen", width: "200px", height: "100px", fontSize: "30px", fontWeight: "bold"}}>Title has been changed!</div>}
      </div>
    </div>
 );
};

export default App;