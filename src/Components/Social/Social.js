import React, { useEffect, useState, useRef } from "react"
import ConfirmModal from "../Modal/Confirm";

import "./social.css"

function Social() {

    let dayArray = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

    const [time, setTime] = useState('00:00')
    const [day, setDay] = useState('')
    const [period, setPeriod] = useState('1')

    const [activityIsPaused, setActivityIsPaused] = useState({
        textChat: '',
        voiceChat: '',
        betterOfficer: '',
    })
    const [disableBtn, setDisableBtn] = useState(false)
    const [errorFlag, setErrorFlag] = useState(false)

    const [confirmModal, setConfirmModal] = useState({
        show: false,
        description: 'You sure?',
        action: '',
    })

    {
        if (errorFlag) {
            fetch("https://god-assistant.vercel.app/test.json")
                .then(data => data.json())
                .then((data) => {
                    setDay(data.socialCard.currentDay)
                    setTime(data.socialCard.currentTime)
                    setPeriod(data.socialCard.currentPeriod)
                    setActivityIsPaused({
                        textChat: data.socialCard.activityIsPaused.textChat,
                        voiceChat: data.socialCard.activityIsPaused.voiceChat,
                        betterOfficer: data.socialCard.activityIsPaused.betterOfficer
                    })
                    setDisableBtn(data.socialCard.activityIsPaused.textChat)

                    setErrorFlag(false)
                })
        }
    }

    useEffect(() => {
        fetch("http://localhost:3000/test.json")
            .then(data => data.json())
            .then((data) => {
                setDay(data.socialCard.currentDay)
                setTime(data.socialCard.currentTime)
                setPeriod(data.socialCard.currentPeriod)
                setActivityIsPaused({
                    textChat: data.socialCard.activityIsPaused.textChat,
                    voiceChat: data.socialCard.activityIsPaused.voiceChat,
                    betterOfficer: data.socialCard.activityIsPaused.betterOfficer
                })
                setDisableBtn(data.socialCard.activityIsPaused.textChat)
            })
            .catch(() => {
                setErrorFlag(true)
            })
    }, [])

    function handleTimeChange(e) {
        setTime(e.target.value)
    }
    function handleDayChange(e) {
        setDay(e.target.value)
    }
    function handlePeriodChange(e) {
        setPeriod(e.target.value)
    }
    function handleSendData() {
        setActivityIsPaused({ textChat: false, voiceChat: false, betterOfficer: false })
        setDisableBtn(false)
        let data = {
            activity: "textChat, voiceChat, betterOfficer",
            time: time,
            day: day,
            period: `Every ${period} week`,
            isPaused: false,
        }
        let json = JSON.stringify(data)
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: json,
        }
        fetch("http://localhost:3000/send.json", {
            options,
        }).then(response => {
            console.log(response)
        })
        console.log(data)
    }
    function handlePauseEvent() {
        setActivityIsPaused({ textChat: true, voiceChat: true, betterOfficer: true })
        setDisableBtn(true)
        let data = {
            activity: "textChat, voiceChat, betterOfficer",
            isPaused: true,
        }
        let json = JSON.stringify(data)
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: json,
        }
        fetch("http://localhost:3000/send.json", {
            options,
        }).then(response => {
            console.log(response)
        })
        console.log(data)
    }

    return (
        <div className="socialContentWrapper">
            <ConfirmModal
                modalConfigs={confirmModal}
                onClose={() => setConfirmModal({ ...confirmModal, show: false })}
                onConfirm={() => confirmModal.action()}
            ></ConfirmModal>

            <div className="socialContent">
                <div className="socialHeader">
                    <h1 className="socialEventName">Social events</h1>
                </div>
                <div className="socialUpdTime contentContainer">
                    <h2>Update time/day/period</h2>
                    <div className="socialUpdTimeContent">
                        <input type="time" className="updateTime socialUpdTimeTime superstyle" title="Enter deadline time" onChange={handleTimeChange} value={time}></input>
                        <select
                            name="day_selector"
                            className="updateDay socialUpdTimeDay"
                            title="Select deadline day"
                            value={day}
                            onChange={e => handleDayChange(e)}>
                            <option value="?" selected hidden>Choose day...</option>
                            {
                                dayArray.map((day, key) => <option className="dayOption" value={day} key={key}>{day}</option>)
                            }
                        </select>
                        <input type="number" className="socialUpdTimePeriod superstyle" title="How many weeks to update" onChange={handlePeriodChange} value={period} placeholder="Weeks to update"></input>
                    </div>
                </div>
            </div>
            <div className="socialBtnContainer">
                <div className="btnWrapper">
                    <button className="btn pauseBtn" onClick={() => setConfirmModal({ show: true, description: 'Pause event?', action: handlePauseEvent })} disabled={disableBtn}>
                        {!disableBtn ? "Pause event" : "Event on pause"}
                    </button>
                </div>
                <div className="btnWrapper">
                    <button className="btn updateBtn" onClick={() => {
                        !disableBtn ?
                            setConfirmModal({ show: true, description: 'Update rules?', action: handleSendData })
                            : setConfirmModal({ show: true, description: 'Resume event?', action: handleSendData })
                    }}>
                        {!disableBtn ? "Update rules" : "Resume event"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Social;