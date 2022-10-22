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
          <button onClick={start} disabled={running} className={`startBtn ${running ? "disabled" : ""}`}>Start Transaction</button>
          <button onClick={pause} ref={stopRef} className={`stopBtn ${!running ? "disabled" : ""}`}>Stop Transaction</button>
          <button onClick={sendReport} className={`sendReportBtn ${running ? "disabled" : ""}`}>Send Transaction Report</button>
        </div>

        <div>
          <p>Meter Value</p>
          <input type="text" value={MeterVal} />
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
