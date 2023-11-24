import React, { useEffect, useState } from "react"

import "./damage.css"

function Damage() {
  const modeArray = ['Ranked', 'Showdown', 'Annihilation', 'Onslaught']
  const dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const roleArray = ['Assault', 'Support', 'Medic', 'Sniper']
  const assaultArray = [
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
      access: false
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
      access: false
    },
    {
      id: 5,
      name: 'grom2014a',
      title: 'Кошмар',
      avatar: './Resource/avatars/UI_PL_POL_GROM2014_A_Small.png',
      access: false
    },
  ]
  const supportArray = [
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
  const medicArray = [
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
  const sniperArray = [
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
  const formulaBtnArray = [
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

  const [mode, setMode] = useState('')
  const [time, setTime] = useState('')
  const [day, setDay] = useState('Choose day...')
  const [state, setState] = useState({
    search: '',
    role: 'Assault',
    operators: [],
  })
  const [formula, setFormula] = useState('')

  useEffect(() => {
    switch (state.role) {
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
  }, [state.role])

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
    setState({ ...state, role: e.target.value })
  }
  function handleAccessAll() {
    const operators = state.operators
    operators.forEach((operator, i, arr) => {
      operator.access = true
    })
    setState({ ...state, operators: operators })
  }

  const filteredOperators = state.operators.filter(operator => {
    return operator.title.toLowerCase().includes(state.search.toLowerCase())
  })


  console.log(mode)
  console.log(day)
  console.log(time)
  console.log(state)

  return (
    <div className="damage">
      <div className="header">
        <h1>Damage dealer</h1>
      </div>
      <div className="modeUpdateContainer">
        <div className="mode contentContainer">
          <h2>Battle mode</h2>
          <select
            name="mode_selector"
            className="modeSelector"
            value={mode}
            onChange={e => handleModeChange(e)}>
            <option value="" selected hidden>Choose battle mode...</option>
            {
              modeArray.map((mode, key) => <option className="modeOption" value={mode} key={key}>{mode}</option>)
            }
          </select>
        </div>
        <div className="update contentContainer">
          <h2>Update time/day</h2>
          <div className="updateContent">
            <input type="time" className="updateTime superstyle" onChange={handleTimeChange} value={time}></input>
            <select
              name="day_selector"
              className="updateDay"
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
            className="operatorsSearch operatorsTools"
            placeholder="Search..."
            onChange={handleSearchChange}></input>
          <select
            name="role_selector"
            className="operatorsRole operatorsTools"
            value={state.role}
            onChange={e => handleRoleChange(e)}>
            <option value="?" selected disabled hidden>Choose role...</option>
            {
              roleArray.map((role, key) => <option className="operatorsOption" value={role} key={key}>{role}</option>)
            }
          </select>
          <div className="operatorsList">
            {
              (!state.search) &&
              <div
                className="operatorsElem"
                title="Select all"
                onClick={handleAccessAll}
              >
                <p>ALL</p>
              </div>
            }
            {
              filteredOperators.map((operator, key) =>
                <div
                  className="operatorsElem"
                  onClick={() => {
                    const operators = state.operators
                    operator.access = !operator.access
                    setState({ ...state, operators: operators })
                  }}>
                  <img className="operatorsImg" title={operator.title} src={operator.avatar} />
                  <img className={`operatorsAccess ${!operator.access ? 'operatorsNoAccess' : ''}`} src={'./Resource/access.png'} />
                </div>)
            }
          </div>
        </div>
      </div>
      <div className="formula contentContainer">
        <h2>Points calculator</h2>
        <div className="formulaArea area">
          <input type="text" className="formulaText" placeholder="Formula..."></input>
          <div className="formulaBtnContainer">
            {
              formulaBtnArray.map((elem, key) => <div className="formulaBtnWrapper"><button className="formulaBtn">{elem.name}</button></div>)
            }
          </div>
        </div>
      </div>
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
  );
}

export default Damage;
