const milliToMin = (milliseconds: number): string => {
  const date = new Date(milliseconds),
    min = date.getMinutes(),
    sec = date.getSeconds()

  return `${min}:${sec < 10 ? "0" : ""}${sec}`
}

export default milliToMin
