import React, {useState, useEffect} from 'react';
import './App.scss';

import Head_img from './assets/headline.png'

function App() {
  const [quiz, setQuiz] = useState("Are you under 65?")
  const [step, setStep] = useState("process")
  const [min, setMin] = useState(3)
  const [second, setSecond] = useState<any>(0)

  useEffect(() => {
    if(step==="Reviewing Your Answers..."){
      setTimeout(() => {
        setStep("Matching With Best Options...")
        }, 1500);
      }
    if(step==="Matching With Best Options..."){
      setTimeout(() => {
        setStep("Confirming Eligibility...")
        }, 1500);
      }
    if(step==="Confirming Eligibility..."){
      setTimeout(() => {
        setStep("completed")
        }, 1500);
      }

    if(step==="completed"){
      const startTime:any = new Date();
      const Timer = setInterval(()=> {
        const nowTime:any = new Date();
        // setMin(min+1)
        setSecond((180-Math.round((nowTime-startTime)/1000))%60)
        setMin(Math.floor((180-Math.round((nowTime-startTime)/1000))/60))
      }, 1000)
      if(min<0){
        clearInterval(Timer)
      }
    }
  }, [step, min])

  const handleQuiz = () => {
    if(quiz === "Are you under 65?"){
      setQuiz("Are You On Medicaid or Medicare?")
    }else{
      setStep("Reviewing Your Answers...")
    }
  }

  return (
    <div className="App">
      <div className='top-sticky'>USA Savings Journal</div>
      {step==="process"?
        <>
          <div className='main-container'>
            <div className='main-descrition'>
              {/* <div className='main-des-title'>Biden Extends Free Health Subsidies For Americans Making Less Than $50k/year</div> */}
              <img src = {Head_img} alt = "head" width = "100%" />
              <div className='mian-des-1'>The deadline to lock in your health subsidy ends on <span style = {{fontWeight:"700"}}>January 15th</span>, so call the hotline if you qualify!</div>
              <div className='main-des-2'>Answer 2 simple questions below to check eligibility in just 30 seconds</div>
            </div>
            <div className='survey'>
              <div className='quiz'>{quiz}</div>
              <div className='answer'>
                <div className='answer-btn' onClick={handleQuiz}>Yes</div>
                <div className='answer-btn' onClick={handleQuiz}>No</div>
              </div>
            </div>
          </div>
        </>:
        (
          step!=="process" && step!=="completed"?
            <div className='checking' style={{fontWeight:"700"}}>
              {step}
            </div>:
            <div className='checking'>
              <div className='congrats'>Congratulations, YOU QUALIFY!</div>
              <div className='top-description'>Make a quick call to claim your health subsidy!</div>
              <div className='spots-count'>Spots remaining: 4</div>
              <div className='tap-direction'>👇 TAP BELOW TO CALL 👇</div>
              <div className='call-btn'>
                <a href = "tel:+18332464598">CALL (833)-246-4598</a>
              </div>
              <div className='sub-title'>We Have Reserved Your Spot</div>
              <div className='sub-description'>Due to high call volume, your official agent is waiting for only 3 minutes, then your spot will not be reserved.</div>
              <div className='timer'>
                <div className='timer-cell'>{min}</div>
                <div className='timer-cell'>:</div>
                <div className='timer-cell'>{second}</div>
              </div>
            </div>
        )
      }
      <div className='footer'>
        <div className='terms'>Terms & Conditions | Privacy Policy</div>
        <div className='copyright'>Copyright © 2022 - All right reserved USA Savings Journal.</div>
      </div>
    </div>
  );
}

export default App;
