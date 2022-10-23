import React, { useRef } from 'react'
import { ActionsHandler } from '../Hooks/ActionsHandler';
import Connect from './Connect';
import "../"
import { useState } from 'react';

const TransMeter = () => {
  const { pause, sendReport, running, MeterVal, start, TransReport } = ActionsHandler();
  const [isConnected, setIsConnected] = useState(false)
  const stopRef = useRef<any>();

  return (
    <>
      <Connect isConnected={isConnected} setIsConnected={setIsConnected} />
      {isConnected && <div>
        <h2 className="">Actions</h2>
        <div className="action-btns">
          {/* <button onClick={start} disabled={running} className={`startBtn ${running ? "disabled" : ""}`}>Start Transaction</button> */}


          <button  onClick={start} className={`inline-flex ${running ? "opacity-50 cursor-not-allowed" : ""} items-center  justify-center px-5 py-3 text-lg  font-semibold font-sans text-center text-indigo-100 border border-green-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-green-700   via-green-500 to-green-800`}>
            <svg className="w-5 h-5 mr-2" fill="#fff" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <span className="relative">Start Transaction</span>
          </button>


          <button  onClick={pause} ref={stopRef} className={`inline-flex ${!running ? "opacity-50 cursor-not-allowed" : ""} items-center justify-center px-5 py-3 text-lg  font-semibold font-sans text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-red-500 via-red-800 to-red-400`}>
            <img src="https://www.svgrepo.com/show/59220/not-allowed-symbol.svg" alt="" className='w-5 h-5 mr-2' />
            <span className="relative">Stop Transaction</span>
          </button>

          <button  onClick={sendReport} className={`inline-flex ${running ? "opacity-50 cursor-not-allowed" : ""} items-center justify-center px-5 py-3 text-lg  font-semibold font-sans text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-indigo-800 via-indigo-500 to-indigo-800`}>
            <img src="https://www.svgrepo.com/show/127605/send-email.svg" alt="" className='w-5 h-5 mr-2' />
            <span className="relative">Send Transaction Report</span>
          </button>


        </div>


        <div>
          <p>Meter Value</p>
          <input type="text" value={MeterVal} className="text-black font-semibold"/>
        </div>
        <div>
          <h3>Transaction Amount :</h3>
          <p>{TransReport}</p>
        </div>
      </div>}
    </>
  )
}

export default TransMeter
