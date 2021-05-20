import React, { useState, useRef  } from 'react';

export default function LiveOrDead() {
  const [ live, setLive ] = useState(true);
  const [ timeInterval, setTimeInterval ] = useState(1000);

  let timer = useRef(null);
  const start = () => {
    timer.current = setInterval(() => {
      setLive(l => !l);
    }, timeInterval)
  };

  const stop = () => {
    clearInterval(timer.current);
  };

  const setTime = (t) => {
    clearInterval(timer.current);
    setTimeInterval(t);
    timer.current = setInterval(() => {
      setLive(l => !l);
    }, t)
  };

  const reset = () => {
    clearInterval(timer.current);
    setTimeInterval(1000);
  };


  return <div id={"game"}>
    <span onClick={() => { stop(); }} className={"button"}>{ live ? '生' : '死' }</span>
    <span>当前时间间隔：{(timeInterval)/1000}s</span>
    <div className={'actions'}>
      <div onClick={() => {setTime(50)}} className={'action'}>0.05s</div>
      <div onClick={() => {setTime(100)}} className={'action'}>0.1s</div>
      <div onClick={() => {setTime(200)}} className={'action'}>0.2s</div>
      <div onClick={() => {setTime(300)}} className={'action'}>0.3s</div>
      <div onClick={() => {setTime(400)}} className={'action'}>0.4s</div>
      <div onClick={() => {setTime(500)}} className={'action'}>0.5s</div>
      <div onClick={() => {setTime(600)}} className={'action'}>0.6s</div>
      <div onClick={() => {setTime(700)}} className={'action'}>0.7s</div>
      <div onClick={() => {setTime(800)}} className={'action'}>0.8s</div>
      <div onClick={() => {start()}} className={'action'}>开始</div>
      <div onClick={() => {reset()}} className={'action'}>重置</div>
    </div>
  </div>
}
