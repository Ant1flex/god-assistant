import { concat } from "lodash"
import React, { useEffect, useState, useRef } from "react"

import "./damage.css"

function Damage() {
  let roleArray = ['Assault', 'Support', 'Medic', 'Sniper']
  let dayArray = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

  const inputRef = useRef();

  const [role, setRole] = useState('Assault')

  const [mode, setMode] = useState('')
  const [modeArray, setModeArray] = useState([])

  const [time, setTime] = useState('00:00')
  const [day, setDay] = useState('')

  const [assaultArray, setAssaultArray] = useState([])
  const [supportArray, setSupportArray] = useState([])
  const [medicArray, setMedicArray] = useState([])
  const [sniperArray, setSniperArray] = useState([])
  const [state, setState] = useState({
    search: '',
    role: '',
    operators: [],
  })

  const [formula, setFormula] = useState('')
  const [currentFormulas, setCurrentFormulas] = useState({
    assault: '',
    support: '',
    medic: '',
    sniper: '',
  })
  const [formulaBtnArray, setFormulaBtnArray] = useState([])
  const [formulasList, setFormulasList] = useState([])

  const [activityIsPaused, setActivityIsPaused] = useState({
    assault: '',
    support: '',
    medic: '',
    sniper: '',
  })

  const [selectFlag, setSelectFlag] = useState(true)
  const [savePresetFlag, setSavePresetFlag] = useState(false)
  const [deletePresetFlag, setDeletePresetFlag] = useState(false)
  const [disableBtn, setDisableBtn] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/test.json")
      .then(data => data.json())
      .then((data) => {
        setModeArray(data.damageCard.modeArray)
        data.damageCard.modeArray.filter((mode) => mode.isEnable).map((mode) => setMode(mode.name))

        setDay(data.damageCard.currentDay)

        setAssaultArray(data.damageCard.assaultArray)
        setSupportArray(data.damageCard.supportArray)
        setMedicArray(data.damageCard.medicArray)
        setSniperArray(data.damageCard.sniperArray)
        setState({ ...state, operators: data.damageCard.assaultArray })

        setFormula(data.damageCard.currentFormulas.assault)
        setCurrentFormulas({
          assault: data.damageCard.currentFormulas.assault,
          support: data.damageCard.currentFormulas.support,
          medic: data.damageCard.currentFormulas.medic,
          sniper: data.damageCard.currentFormulas.sniper,
        })
        setFormulaBtnArray(data.damageCard.formulaBtnArray)
        setFormulasList(data.damageCard.formulasArray)

        setActivityIsPaused({
          assault: data.damageCard.activityIsPaused.assault,
          support: data.damageCard.activityIsPaused.support,
          medic: data.damageCard.activityIsPaused.medic,
          sniper: data.damageCard.activityIsPaused.sniper,
        })
        setDisableBtn(data.damageCard.activityIsPaused.assault)
      })
  }, [])

  // ====== FOR VERCEL LOCAL DEMO ======
  useEffect(() => {
    fetch("https://god-assistant.vercel.app/test.json")
      .then(data => data.json())
      .then((data) => {
        setModeArray(data.damageCard.modeArray)
        data.damageCard.modeArray.filter((mode) => mode.isEnable).map((mode) => setMode(mode.name))

        setDay(data.damageCard.currentDay)

        setAssaultArray(data.damageCard.assaultArray)
        setSupportArray(data.damageCard.supportArray)
        setMedicArray(data.damageCard.medicArray)
        setSniperArray(data.damageCard.sniperArray)
        setState({ ...state, operators: data.damageCard.assaultArray })

        setFormula(data.damageCard.currentFormulas.assault)
        setCurrentFormulas({
          assault: data.damageCard.currentFormulas.assault,
          support: data.damageCard.currentFormulas.support,
          medic: data.damageCard.currentFormulas.medic,
          sniper: data.damageCard.currentFormulas.sniper,
        })
        setFormulaBtnArray(data.damageCard.formulaBtnArray)
        setFormulasList(data.damageCard.formulasArray)

        setActivityIsPaused({
          assault: data.damageCard.activityIsPaused.assault,
          support: data.damageCard.activityIsPaused.support,
          medic: data.damageCard.activityIsPaused.medic,
          sniper: data.damageCard.activityIsPaused.sniper,
        })
        setDisableBtn(data.damageCard.activityIsPaused.assault)
      })
  }, [])
  // ====== FOR VERCEL LOCAL DEMO ======

  useEffect(() => {
    switch (role) {
      case 'Assault':
        setState({ ...state, operators: assaultArray })
        setFormula(currentFormulas.assault)
        setDisableBtn(activityIsPaused.assault)
        break
      case 'Support':
        setState({ ...state, operators: supportArray })
        setFormula(currentFormulas.support)
        setDisableBtn(activityIsPaused.support)
        break
      case 'Medic':
        setState({ ...state, operators: medicArray })
        setFormula(currentFormulas.medic)
        setDisableBtn(activityIsPaused.medic)
        break
      case 'Sniper':
        setState({ ...state, operators: sniperArray })
        setFormula(currentFormulas.sniper)
        setDisableBtn(activityIsPaused.sniper)
        break
      default:
        setState({ ...state, operators: assaultArray })
        setFormula(currentFormulas.assault)
        setDisableBtn(activityIsPaused.assault)
    }
  }, [role])

  useEffect(() => {
    let tempArr = formulasList.map(elem => elem.value)
    if (!formula) {
      setSavePresetFlag(false)
      setDeletePresetFlag(false)
    } else if (formula && tempArr.every(elem => elem.toLowerCase().replaceAll(' ', '') !== formula.toLowerCase().replaceAll(' ', ''))) {
      setSavePresetFlag(true)
      setDeletePresetFlag(false)
    } else {
      setSavePresetFlag(false)
      setDeletePresetFlag(true)
    }
  }, [formula, formulasList])


  function handleRoleChange(e) {
    setRole(e.target.value)
  }
  function handleModeChange(e) {
    modeArray.forEach(mode => {
      if (mode.name === e.target.value) {
        mode.isEnable = true
      } else {
        mode.isEnable = false
      }
    })
    setMode(e.target.value)
  }
  function handleTimeChange(e) {
    setTime(e.target.value)
  }
  function handleDayChange(e) {
    setDay(e.target.value)
  }
  function handleSearchChange(e) {
    setState({ ...state, search: e.target.value })
  }
  function handleScrollLeft() {
    let carousel = document.getElementById("carousel")
    let repeats = carousel.offsetWidth / 2
    let timerId = setInterval(() => {carousel.scrollLeft -= repeats/10;}, 20);
    setTimeout(() => {clearInterval(timerId)}, 200);
  }
  function handleScrollRight() {
    let carousel = document.getElementById("carousel")
    let repeats = carousel.offsetWidth / 2
    let timerId = setInterval(() => {carousel.scrollLeft += repeats/10;}, 20);
    setTimeout(() => {clearInterval(timerId)}, 220);
  }
  function handleWheelCarousel(e) {
    let carousel = document.getElementById("carousel")
    if (e.deltaY < 0) {
      let repeats = carousel.offsetWidth / 5
      let timerId = setInterval(() => {carousel.scrollLeft -= repeats/10;}, 20);
      setTimeout(() => {clearInterval(timerId)}, 200);
    }
    else if (e.deltaY > 0) {
      let repeats = carousel.offsetWidth / 5
      let timerId = setInterval(() => {carousel.scrollLeft += repeats/10;}, 20);
      setTimeout(() => {clearInterval(timerId)}, 200);
    }
  }
  function handleFormulaTextChange(e) {
    setFormula(e.target.value)
  }
  function handleFormulaPresetChange(e) {
    setFormula(e.target.value)
  }
  function handleAccessAll() {
    let operators = state.operators
    operators.forEach((operator, i, arr) => {
      operator.isEnable = true
    })
    setState({ ...state, operators: operators })
    setSelectFlag(false)
  }
  function handleAccessNone() {
    let operators = state.operators
    operators.forEach((operator, i, arr) => {
      operator.isEnable = false
    })
    setState({ ...state, operators: operators })
    setSelectFlag(true)
  }
  function handleSave() {
    let newFormulasArray = [...formulasList, { value: formula }]
    // let uniqueValues = newFormulasArray.reduce((acc, elem) => {
    //   if(acc.map[elem.value]){
    //     return acc
    //   }
    //   acc.map[elem.value] = true
    //   acc.uniqueValues.push(elem)
    //   return acc
    // }, {
    //   map: {},
    //   uniqueValues: []
    // }).uniqueValues;
    // console.log(uniqueValues)
    setFormulasList(newFormulasArray)
  }
  function handleDelete() {
    let newFormulasArray = formulasList.filter(elem => elem.value.toLowerCase() !== formula.toLowerCase())
    setFormulasList(newFormulasArray)
  }
  function handleSendData() {
    switch (role) {
      case 'Assault':
        setActivityIsPaused({ ...activityIsPaused, assault: false })
        setDisableBtn(false)
        break
      case 'Support':
        setActivityIsPaused({ ...activityIsPaused, support: false })
        setDisableBtn(false)
        break
      case 'Medic':
        setActivityIsPaused({ ...activityIsPaused, medic: false })
        setDisableBtn(false)
        break
      case 'Sniper':
        setActivityIsPaused({ ...activityIsPaused, sniper: false })
        setDisableBtn(false)
        break
    }
    let data = {
      role: role,
      mode: mode,
      time: time,
      day: day,
      operators: state.operators.filter(oper => oper.isEnable),
      formula: formula,
      formulasList: formulasList,
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
    switch (role) {
      case 'Assault':
        setActivityIsPaused({ ...activityIsPaused, assault: true })
        setDisableBtn(true)
        break
      case 'Support':
        setActivityIsPaused({ ...activityIsPaused, support: true })
        setDisableBtn(true)
        break
      case 'Medic':
        setActivityIsPaused({ ...activityIsPaused, medic: true })
        setDisableBtn(true)
        break
      case 'Sniper':
        setActivityIsPaused({ ...activityIsPaused, sniper: true })
        setDisableBtn(true)
        break
    }
    let data = {
      role: role,
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

  const filteredOperators = state.operators.filter(operator => {
    return operator.name.toLowerCase().includes(state.search.toLowerCase())
  })

  return (
    <div className="contentWrapper">
      <div className="content">
        <div className="header">
          <h1>Damage dealer</h1>
          <select
            name="role_selector"
            className="role"
            title="Select role"
            value={role}
            onChange={e => handleRoleChange(e)}>
            <option value="?" selected disabled hidden>Choose role...</option>
            {
              roleArray.map((role, key) => <option className="roleOption" value={role} key={key}>{role}</option>)
            }
          </select>
        </div>
        <div className="modeUpdateContainer">
          <div className="mode contentContainer">
            <h2>Battle mode</h2>
            <select
              name="mode_selector"
              className="modeSelector"
              title="Select battle mode"
              value={mode}
              onChange={e => handleModeChange(e)}>
              <option value="" selected hidden>Choose battle mode...</option>
              {
                modeArray.map((mode, key) => <option className="modeOption" value={mode.name} key={key}>{mode.name}</option>)
              }
            </select>
          </div>
          <div className="update contentContainer">
            <h2>Update time/day</h2>
            <div className="updateContent">
              <input type="time" className="updateTime superstyle" title="Enter deadline time" onChange={handleTimeChange} value={time}></input>
              <select
                name="day_selector"
                className="updateDay"
                title="Select deadline day"
                value={day}
                onChange={e => handleDayChange(e)}>
                <option value="?" selected hidden>Choose day...</option>
                {
                  dayArray.map((day, key) => <option className="dayOption" value={day} key={key}>{day}</option>)
                }
              </select>
            </div>
          </div>
        </div>
        <div className="operators contentContainer">
          <h2>Avilable operators</h2>
          <div className="operatorsArea area">
            <input
              type="text"
              className="operatorsSearch"
              placeholder="Search..."
              title="Enter operator name"
              onChange={handleSearchChange}></input>
            <div className="operatorsList">
              {
                (!state.search) &&
                <div
                  className="operatorsElem operatorsAllNoneContainer"
                >
                  <div className={`operatorsAllNone ${!selectFlag ? 'hidden' : ''}`} onClick={handleAccessAll}>
                    <div title="Select all">ALL</div>
                  </div>
                  <div className={`operatorsAllNone ${selectFlag ? 'hidden' : ''}`} onClick={handleAccessNone}>
                    <div title="Select none">NONE</div>
                  </div>
                </div>
              }
              <button
                className="operatorsCarouselBtn operatorsCarouselBtnLeft"
                onClick={handleScrollLeft}>
                <img className="operatorsCarouselBtnImg" title="Scroll left" src={'./Resource/arrow-left.png'} />
              </button>
              <div id="carousel" className="operatorsCarousel smooth-scroll" onWheel={handleWheelCarousel}>
                {
                  filteredOperators.map((operator, key) =>
                    <div
                      className="operatorsElem"
                      onClick={() => {
                        const operators = state.operators
                        operator.isEnable = !operator.isEnable
                        if (!operator.isEnable) {
                          setSelectFlag(true)
                        }
                        setState({ ...state, operators: operators })
                      }}>
                      <img className="operatorsImg" title={operator.name} src={operator.avatar} />
                      <img className={`operatorsAccess ${!operator.isEnable ? 'hidden' : ''}`} src={'./Resource/access.png'} />
                    </div>)
                }
              </div>
              <button
                className="operatorsCarouselBtn operatorsCarouselBtnRight"
                onClick={handleScrollRight}>
                <img className="operatorsCarouselBtnImg" title="Scroll Right" src={'./Resource/arrow-right.png'} />
              </button>
            </div>
          </div>
        </div>
        <div className="formula contentContainer">
          <h2>Points calculator</h2>
          <div className="formulaArea area">
            <div className="formulaInputContainer">
              <input
                title="Enter formula"
                type="text"
                className="formulaText"
                placeholder="Formula..."
                value={formula}
                onChange={handleFormulaTextChange}
                ref={inputRef}
              ></input>
              <div className="formulaPresetBtnContainer">
                <button
                  className={`formulaPresetBtn formulaPresetBtnSave ${savePresetFlag ? '' : 'hidden'}`}
                  onClick={handleSave}>
                  <img className="formulaPresetBtnSaveImg" title="Save preset" src={'./Resource/save.png'} />
                </button>
                <button
                  className={`formulaPresetBtn formulaPresetBtnDelete ${deletePresetFlag ? '' : 'hidden'}`}
                  onClick={handleDelete}>
                  <img className="formulaPresetBtnDeleteImg" title="Delete preset" src={'./Resource/delete.png'} />
                </button>
              </div>
              <select
                name="formula_selector"
                className="formulaPreset"
                title="Select formula preset"
                onChange={e => handleFormulaPresetChange(e)}>
                <option value="?" selected hidden>Choose formula preset...</option>
                {
                  formulasList.map((formula, key) => <option className="formulaOption" value={formula.value} key={key}>{formula.value}</option>)
                }
              </select>
            </div>
            <div className="formulaBtnContainer">
              {
                formulaBtnArray.map((elem, key) =>
                  <div className="formulaBtnWrapper">
                    <button
                      className="formulaBtn"
                      onClick={() => {
                        setFormula(formula.concat('', elem.value))
                        inputRef.current.focus()
                      }}
                    >{elem.label}</button>
                  </div>)
              }
            </div>
          </div>
        </div>
      </div>
      <div className="btnContainer">
        <div className="btnWrapper">
          <button className="btn pauseBtn" onClick={handlePauseEvent} disabled={disableBtn}>{!disableBtn ? "Pause event" : "Event on pause"}</button>
        </div>
        <div className="btnWrapper">
          <button className="btn updateBtn" onClick={handleSendData}>{!disableBtn ? "Update rules" : "Resume event"}</button>
        </div>
      </div>
    </div>

  );
}

export default Damage;
