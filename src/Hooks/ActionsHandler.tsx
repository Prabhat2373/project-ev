import { useCallback, useState } from "react";
import { useSeconds } from "./UseSeconds";

export const ActionsHandler = ({
  seconds: initialSeconds = 0,
  running: initiallyRunning = false
} = {}) => {
  const [MeterVal, setMeterVal] = useState(initialSeconds);
  const [TransReport, setTransReport] = useState(0);
  const [running, setRunning] = useState(initiallyRunning);
  const increment = useCallback(
    () => (running ? setMeterVal((seconds) => seconds + 1) : undefined),
    [running]
  );
  const start = () => setRunning(true);
  const pause = () => {
    setRunning(false)
  };
  const sendReport = () => {
    setTransReport(MeterVal)
    alert(`Your Transaction Amount : ${MeterVal} is sent successfully`)
  };

  useSeconds(increment);

  return { pause, sendReport, running, MeterVal, start, TransReport };
};
