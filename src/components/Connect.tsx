import React from 'react'
import { useState } from 'react';
import Auth from './Auth';
interface Props {
  isConnected: boolean;
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
}

const Connect = ({ isConnected, setIsConnected }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <div className="connect-container">
        <h1>Connect To Your Station</h1>
        <p>Enter Your Station Protocol</p>
        <input type="text" name="connectionProtocol" id="cennectProto" className="connectionInp" placeholder='http://localhost:3000/' value={'http://localhost:3000/'}/>
        <button onClick={(e) => {
          if (!isConnected) {
            setIsLoading(true)
            setTimeout(() => {
              setIsConnected(true)
              setIsLoading(false)
            }, 2000);
          }
        }} className={`connect-btn ${isConnected ? "disabled" : ""}`}>Connect</button>
        <p>{isLoading ? "Loading..." : ""}</p>
      </div>
      {isConnected && <Auth isAuth={isConnected}/>}
    </>
  )
}

export default Connect