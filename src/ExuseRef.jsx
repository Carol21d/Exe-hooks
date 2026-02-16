// In this lab, you will generate a 6-digit OTP (One-Time Password) 
// and display it to the user. The OTP will expire after 5 seconds, 
// and a new OTP will be generated when the user clicks the "Generate New OTP" button.

import {useState,useEffect,useRef} from 'react'

function OTPGenerator() {
 const [opt,setOPT] = useState(null);
 const [timeLeft, setTimeLeft] = useState(0);
 const timerRef = useRef(null);

 useEffect(() => {
    if (timeLeft > 0) {
        timerRef.current = setInterval(() =>{
            setTimeLeft((prev) => prev - 1);
        }, 1000);
    }
   if (timeLeft === 0 &&  timerRef.current){
    clearInterval(timerRef.current);
   }
    return () => clearInterval(timerRef.current);
 }, [timeLeft]);

const generateOTP = () => {
   const newOTP =  Math.floor(100000 + Math.random() * 900000);
   setOPT(newOTP);
   setTimeLeft(7);
};

return(
    <div className="container">
        <h1 id="otp-title">OTP Generator</h1>
        <h2 id="opt-display"> 
            {!opt
             ? "Click 'Generate OTP' to get a code"  
             :timeLeft === 0
             ? "OTP expired. Click the button to generate a new OTP."
             : opt}
            </h2>
        <p id="opt-timer" aria-live="polite">
            {timeLeft > 0 && `Expires in: ${timeLeft} seconds`}
        </p>
        <button
         id="generate-otp-button"
         onClick={generateOTP}
         disabled={timeLeft > 0 }
        >Generate OTP</button>
    </div>
)
    
}

export default OTPGenerator