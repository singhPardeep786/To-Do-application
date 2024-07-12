import React, { useEffect, useState } from 'react'

const DateAndTime = () => {

    const [dateTime, setdateTime] = useState("")

    useEffect(()=>{
        const interval = setInterval(() => {
            const now = new Date();
            const currentDate = now.toLocaleDateString();   
            const currentTime = now.toLocaleTimeString();
    
            setdateTime(`${currentDate} - ${currentTime}`)
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
  return (
    <>
        <h2 className='date-time'>{dateTime}</h2>
    </>
  )
}

export default DateAndTime