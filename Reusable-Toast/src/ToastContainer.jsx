import React, { useState } from 'react';
import Toast from './Toast.jsx';
const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);
  const addToast = (message, type, duration) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, duration }]);
    setTimeout(() => {
      removeToast(id);
    }, duration);
  }
  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }
  return (
    <div
    style={{display:"flex",justiyContent:"center",alignItems:"center",top:"20px",right:"20px",flexDirection:"column",gap:"10px",zIndex:999,width:"100%"}}
    >
      <div style={{display:"flex",justiyContent:"center",gap:"10px",margin:"40px 0"}}>
        <button onClick={()=>addToast('Success Message','success',3000)}>Show Success</button>
        <button onClick={()=>addToast('Error Message','error',4000)}>Show Error</button>
        <button onClick={()=>addToast("Info Message","info",2000)}>Show Info</button>
      </div>
      {toasts.map(({ id, message, type, duration }) => (
        <Toast
          key={id}
          message={message}
          type={type}
          duration={duration}
          />
      ))}
    </div>
  );
};

export default ToastContainer;
