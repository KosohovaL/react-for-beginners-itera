// import React, { useState, useRef } from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import './Timer.css';

class MyStore {
    timer = new Date(new Date().setHours(0, 0, 0, 0, 0))
    running = false
    idInterval

    constructor() {
        makeAutoObservable(this)
    }

    setTimer(props) {
        if (props === true) {
            this.running = true
            this.timer = new Date(this.timer.setHours(0, 0, 0, 0, 0))
            this.idInterval = setInterval(() => {
                this.timer = new Date(this.timer.setSeconds(this.timer.getSeconds() + 1))
            }, 1000)
        } else {
            this.running = false
            clearInterval(this.idInterval);
        }
    }
}

const myStore = new MyStore()

const Timer = observer(() => {
    const { timer, running } = myStore

    return (
        <div className='timer' >
            <header>
                <div>{!running ? 'My React timer' : 'Running'}</div>
            </header>
            <h2>{timer.toLocaleTimeString()}</h2>
            <button type='button' onClick={() => { myStore.setTimer(true) }}>Start</button>
            <button type='button' onClick={() => { myStore.setTimer(false) }}>Stop</button>
        </div >
    )

})

export default Timer