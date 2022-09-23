import { UseProps } from "./trackTimer.type"
import { useState, useEffect, useMemo } from "react"
import milliToMin from "../../utils/milliToMin"

//TODO
// extract logic for create a timer hook.

const usetrackTimer = (): UseProps => {
  const
    DEFAULT_TIME = 120000,
    [timer, setTimer] = useState(DEFAULT_TIME),
    [start, setStart] = useState<boolean>(false),
    memoTimer = useMemo(() => milliToMin(timer), [timer])

  useEffect(() => {
    let 
        currentTimer: undefined | number,
        //prevent async state
        theTimer = timer
    if (start) {
      currentTimer = setInterval(() => {
        theTimer -= 100
        if (theTimer <= 0 && currentTimer) {
         clearInterval(currentTimer)
        }
        setTimer((timer) => timer - 100)
        
      }, 100)
      
    } else if (currentTimer) {
      clearInterval(currentTimer)
    }

    return () => {
      if (currentTimer) clearInterval(currentTimer)
      return
    } // <-- clear on unmount!
  }, [start])

  function startAndStop() {
    setStart(!start)
  }

  function reset(){
    setTimer(DEFAULT_TIME)
    setStart(false)
  }
  return {
    timerString: memoTimer,
    timer,
    startAndStop,
    reset,
    start
  }
}

export default usetrackTimer
