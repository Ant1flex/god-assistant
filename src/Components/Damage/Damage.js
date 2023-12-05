import { concat } from "lodash"
import React, { useEffect, useState, useRef } from "react"

import "./damage.css"

function Damage() {
  // let modeArray = [
  //   {
  //     name: 'Ranked',
  //     isEnable: true
  //   },
  //   {
  //     name: 'Showdown',
  //     isEnable: false
  //   },
  //   {
  //     name: 'Annihilation',
  //     isEnable: false
  //   },
  //   {
  //     name: 'Onslaught',
  //     isEnable: false
  //   },
  // ]
  // let dayArray = [
  //   {
  //     name: 'Monday',
  //     isEnable: false
  //   },
  //   {
  //     name: 'Tuesday',
  //     isEnable: false
  //   },
  //   {
  //     name: 'Wednesday',
  //     isEnable: true
  //   },
  //   {
  //     name: 'Thursday',
  //     isEnable: false
  //   },
  //   {
  //     name: 'Friday',
  //     isEnable: false
  //   },
  //   {
  //     name: 'Saturday',
  //     isEnable: false
  //   },
  //   {
  //     name: 'Sunday',
  //     isEnable: false
  //   },
  // ]
  // let roleArray = ['Assault', 'Support', 'Medic', 'Sniper']
  // let assaultArray = [
  //   {
  //     id: 1,
  //     name: 'fsb2004a',
  //     title: 'Волк',
  //     avatar: './Resource/avatars/UI_PL_RUS_FSB2004_A_Small.png',
  //     access: false
  //   },
  //   {
  //     id: 2,
  //     name: 'fsb2016a',
  //     title: 'Перун',
  //     avatar: './Resource/avatars/UI_PL_RUS_FSB2016_A_Small.png',
  //     access: true
  //   },
  //   {
  //     id: 3,
  //     name: 'sso2013a',
  //     title: 'Ворон',
  //     avatar: './Resource/avatars/UI_PL_RUS_SSO2013_A_ES_Small.png',
  //     access: false
  //   },
  //   {
  //     id: 4,
  //     name: '22spn2016a',
  //     title: 'Плут',
  //     avatar: './Resource/avatars/UI_PL_RUS_22SPN2016_A_Small.png',
  //     access: true
  //   },
  //   {
  //     id: 5,
  //     name: 'grom2014a',
  //     title: 'Кошмар',
  //     avatar: './Resource/avatars/UI_PL_POL_GROM2014_A_Small.png',
  //     access: true
  //   },
  // ]
  // let supportArray = [
  //   {
  //     id: 1,
  //     name: 'fsb2004g',
  //     title: 'Алмаз',
  //     avatar: './Resource/avatars/UI_PL_RUS_FSB2004_G_Small.png',
  //     access: false
  //   },
  //   {
  //     id: 2,
  //     name: 'fsb2016g',
  //     title: 'Сварог',
  //     avatar: './Resource/avatars/UI_PL_RUS_FSB2016_G_Small.png',
  //     access: false
  //   },
  // ]
  // let medicArray = [
  //   {
  //     id: 1,
  //     name: 'fsb2004m',
  //     title: 'Дед',
  //     avatar: './Resource/avatars/UI_PL_RUS_FSB2004_M_Small.png',
  //     access: false
  //   },
  //   {
  //     id: 2,
  //     name: 'fsb2016m',
  //     title: 'Травник',
  //     avatar: './Resource/avatars/UI_PL_RUS_FSB2016_M_Small.png',
  //     access: false
  //   },
  // ]
  // let sniperArray = [
  //   {
  //     id: 1,
  //     name: 'fsb2004s',
  //     title: 'Стрелок',
  //     avatar: './Resource/avatars/UI_PL_RUS_FSB2004_S_Small.png',
  //     access: false
  //   },
  //   {
  //     id: 2,
  //     name: 'fsb2016s',
  //     title: 'Сокол',
  //     avatar: './Resource/avatars/UI_PL_RUS_FSB2016_S_Small.png',
  //     access: false
  //   },
  // ]
  // let formulaBtnArray = [
  //   {
  //     name: 'Rounds',
  //     value: 'rounds'
  //   },
  //   {
  //     name: 'Kills',
  //     value: 'kills'
  //   },
  //   {
  //     name: 'Deaths',
  //     value: 'deaths'
  //   },
  //   {
  //     name: 'Assists',
  //     value: 'assists'
  //   },
  //   {
  //     name: 'Damage',
  //     value: 'damage'
  //   },
  //   {
  //     name: 'Heal',
  //     value: 'heal'
  //   },
  //   {
  //     name: 'Revives',
  //     value: 'revives'
  //   },
  // ]
  // let formulasArray = [
  //   {
  //     value: "(damage - deaths*50) / rounds"
  //   },
  //   {
  //     value: "(damage + heal - deaths*50) / rounds"
  //   },
  //   {
  //     value: "damage - deaths*200"
  //   },
  // ]
  let roleArray = ['Assault', 'Support', 'Medic', 'Sniper']
  let assaultArray = [
    {
      id: 1,
      name: 'fsb2004a',
      title: 'Волк',
      avatar: './Resource/avatars/UI_PL_RUS_FSB2004_A_Small.png',
      access: false
    },
    {
      id: 2,
      name: 'fsb2016a',
      title: 'Перун',
      avatar: './Resource/avatars/UI_PL_RUS_FSB2016_A_Small.png',
      access: true
    },
    {
      id: 3,
      name: 'sso2013a',
      title: 'Ворон',
      avatar: './Resource/avatars/UI_PL_RUS_SSO2013_A_ES_Small.png',
      access: false
    },
    {
      id: 4,
      name: '22spn2016a',
      title: 'Плут',
      avatar: './Resource/avatars/UI_PL_RUS_22SPN2016_A_Small.png',
      access: true
    },
    {
      id: 5,
      name: 'grom2014a',
      title: 'Кошмар',
      avatar: './Resource/avatars/UI_PL_POL_GROM2014_A_Small.png',
      access: true
    },
  ]
  let supportArray = [
    {
      id: 1,
      name: 'fsb2004g',
      title: 'Алмаз',
      avatar: './Resource/avatars/UI_PL_RUS_FSB2004_G_Small.png',
      access: false
    },
    {
      id: 2,
      name: 'fsb2016g',
      title: 'Сварог',
      avatar: './Resource/avatars/UI_PL_RUS_FSB2016_G_Small.png',
      access: false
    },
  ]
  let medicArray = [
    {
      id: 1,
      name: 'fsb2004m',
      title: 'Дед',
      avatar: './Resource/avatars/UI_PL_RUS_FSB2004_M_Small.png',
      access: false
    },
    {
      id: 2,
      name: 'fsb2016m',
      title: 'Травник',
      avatar: './Resource/avatars/UI_PL_RUS_FSB2016_M_Small.png',
      access: false
    },
  ]
  let sniperArray = [
    {
      id: 1,
      name: 'fsb2004s',
      title: 'Стрелок',
      avatar: './Resource/avatars/UI_PL_RUS_FSB2004_S_Small.png',
      access: false
    },
    {
      id: 2,
      name: 'fsb2016s',
      title: 'Сокол',
      avatar: './Resource/avatars/UI_PL_RUS_FSB2016_S_Small.png',
      access: false
    },
  ]
  let formulaBtnArray = [
    {
      name: 'Rounds',
      value: 'rounds'
    },
    {
      name: 'Kills',
      value: 'kills'
    },
    {
      name: 'Deaths',
      value: 'deaths'
    },
    {
      name: 'Assists',
      value: 'assists'
    },
    {
      name: 'Damage',
      value: 'damage'
    },
    {
      name: 'Heal',
      value: 'heal'
    },
    {
      name: 'Revives',
      value: 'revives'
    },
  ]
  let formulasArray = [
    {
      value: "(damage - deaths*50) / rounds"
    },
    {
      value: "(damage + heal - deaths*50) / rounds"
    },
    {
      value: "damage - deaths*200"
    },
  ]



  const inputRef = useRef();

  
  const [role, setRole] = useState('Assault')
  const [mode, setMode] = useState('')
  const [modeArray, setModeArray] = useState([])
  const [time, setTime] = useState('00:00')
  const [day, setDay] = useState('')
  const [dayArray, setDayArray] = useState([])
  const [state, setState] = useState({
    search: '',
    role: '',
    operators: [],
  })
  const [formula, setFormula] = useState('')
  const [formulasList, setFormulasList] = useState(formulasArray)

  const [selectFlag, setSelectFlag] = useState(true)
  const [savePresetFlag, setSavePresetFlag] = useState(false)
  const [deletePresetFlag, setDeletePresetFlag] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/test.json")
      .then(data => data.json())
      .then((data) => {
        // modeArray = [...data.damageCard.modeArray]
        setModeArray(data.damageCard.modeArray)
        data.damageCard.modeArray.filter((mode) => mode.isEnable).map((mode) => setMode(mode.name))

        setDayArray(data.damageCard.dayArray)
        data.damageCard.dayArray.filter((day) => day.isEnable).map((day) => setDay(day.name))
      })
  }, [])

  useEffect(() => {
    fetch("https://god-assistant.vercel.app/test.json")
      .then(data => data.json())
      .then((data) => {
        // modeArray = [...data.damageCard.modeArray]
        setModeArray(data.damageCard.modeArray)
        data.damageCard.modeArray.filter((mode) => mode.isEnable).map((mode) => setMode(mode.name))

        setDayArray(data.damageCard.dayArray)
        data.damageCard.dayArray.filter((day) => day.isEnable).map((day) => setDay(day.name))
      })
  }, [])

  useEffect(() => {
    switch (role) {
      case 'Assault':
        setState({ ...state, operators: assaultArray })
        break
      case 'Support':
        setState({ ...state, operators: supportArray })
        break
      case 'Medic':
        setState({ ...state, operators: medicArray })
        break
      case 'Sniper':
        setState({ ...state, operators: sniperArray })
        break
      default:
        setState({ ...state, operators: assaultArray })
    }
  }, [role])

  useEffect(() => {
    let tempArr = formulasList.map(elem => elem.value)
    if(!formula){
      setSavePresetFlag(false)
      setDeletePresetFlag(false)
    } else if(formula && tempArr.every(elem => elem.toLowerCase().replaceAll(' ', '') !== formula.toLowerCase().replaceAll(' ', ''))){
      setSavePresetFlag(true)
      setDeletePresetFlag(false)
    } else {
      setSavePresetFlag(false)
      setDeletePresetFlag(true)
    }
  }, [formula, formulasList])

  function handleModeChange(e) {
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
  function handleRoleChange(e) {
    //setState({ ...state, role: e.target.value })
    setRole(e.target.value)
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
      operator.access = true
    })
    setState({ ...state, operators: operators })
    setSelectFlag(false)
  }
  function handleAccessNone() {
    let operators = state.operators
    operators.forEach((operator, i, arr) => {
      operator.access = false
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

  const filteredOperators = state.operators.filter(operator => {
    return operator.title.toLowerCase().includes(state.search.toLowerCase())
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
                  dayArray.map((day, key) => <option className="dayOption" value={day.name} key={key}>{day.name}</option>)
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
              {
                filteredOperators.map((operator, key) =>
                  <div
                    className="operatorsElem"
                    onClick={() => {
                      const operators = state.operators
                      operator.access = !operator.access
                      if (!operator.access) {
                        setSelectFlag(true)
                      }
                      setState({ ...state, operators: operators })
                    }}>
                    <img className="operatorsImg" title={operator.title} src={operator.avatar} />
                    <img className={`operatorsAccess ${!operator.access ? 'hidden' : ''}`} src={'./Resource/access.png'} />
                  </div>)
              }
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
                    >{elem.name}</button>
                  </div>)
              }
            </div>
          </div>
        </div>
      </div>
      <div className="btnContainer">
        <div className="btnWrapper">
          <button className="btn pauseBtn">Pause event</button>
        </div>
        <div className="btnWrapper">
          <button className="btn currentBtn">Current rules</button>
        </div>
        <div className="btnWrapper">
          <button className="btn updateBtn">Update rules</button>
        </div>
      </div>
    </div>

  );
}

export default Damage;
