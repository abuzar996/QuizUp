
import {useState,useRef, useEffect} from 'react';



const Timer=(props)=>{
    
    const intervalRef=useRef(null);
    const [timer,setTimer]=useState('00:00:00')
    
    function getTimeRemaining(endtime){
        let total=Date.parse(endtime)-Date.parse(new Date());
        let seconds=Math.floor((total/1000)%60);
        let minutes=Math.floor((total/1000/60)%60);
        let hours=Math.floor((total/1000*60*60)%24);
        
        return {
            total,hours,minutes,seconds
        };
    }
    function startTimer(deadline){
        let {total,hours,minutes,seconds}=getTimeRemaining(deadline);
        
        if(total>=0)
        {
       
            setTimer(
                (hours >9? hours:'0'+hours)+':'+
                (minutes > 9? minutes: '0' + minutes)+":"+
                (seconds>9?seconds:'0'+seconds)
            )
        }
        else{
            
            clearInterval(intervalRef.current);
            props.ToggleTimer()
        }
    }
    function clearTimer(endtime)
    {
        if(intervalRef.current) clearInterval(intervalRef.current);
        const id=setInterval(()=>{
            startTimer(endtime);
        
        },1000)
        intervalRef.current=id;
    }
    function getDeadlineTime(){
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds()+60);
        return deadline;
    }
    useEffect(()=>{
        
        setTimer('00:00:60');
        clearTimer(getDeadlineTime());
        
        return ()=>{
            if(intervalRef.current) clearInterval(intervalRef.current)
        }
        
    },[]);
   
    if(props.resetTime===true)
    {
        
        clearTimer(getDeadlineTime());
        props.ToggleReset()
    }
    
    return (
        <div className="App">
                Time Left {timer}
                
        </div>
    )
}
export default Timer;