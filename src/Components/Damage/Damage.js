import "./damage.css"

function Damage() {
  return (
    <div className="damage">
      <div className="header">
        <h1>Damage dealer</h1>
      </div>
      <div className="modeUpdateContainer">
        <div className="mode contentContainer">
          <h2>Battle mode</h2>
          <select name="mode_selector" className="modeSelector">
            <option value="" selected disabled hidden>Choose battle mode...</option>
            <option className="modeOption" value="1">Ranked</option>
            <option className="modeOption" value="2">Showdown</option>
            <option className="modeOption" value="3">Annihilation</option>
            <option className="modeOption" value="4">Point sweep</option>
            <option className="modeOption" value="5">Special operation</option>
            <option className="modeOption" value="6">Onslaught</option>
          </select>
        </div>
        <div className="update contentContainer">
          <h2>Update time/day</h2>
          <div className="updateContent">
            <input type="time" className="updateTime superstyle"></input>
            <select name="day_selector" className="updateDay">
              <option value="" selected disabled hidden>Choose day...</option>
              <option className="dayOption" value="1">Monday</option>
              <option className="dayOption" value="2">Tuesday</option>
              <option className="dayOption" value="3">Wednesday</option>
              <option className="dayOption" value="4">Thursday</option>
              <option className="dayOption" value="5">Friday</option>
              <option className="dayOption" value="6">Saturday</option>
              <option className="dayOption" value="7">Sunday</option>
            </select>
          </div>
        </div>
      </div>
      <div className="operators contentContainer">
        <h2>Avilable operators</h2>
        <div className="operatorsArea area">
          <input type="text" className="operatorsSearch operatorsTools" placeholder="Search..."></input>
          <select name="role_selector" className="operatorsRole operatorsTools">
            <option value="" selected disabled hidden>Choose role...</option>
            <option className="operatorsOption" value="1">Assault</option>
            <option className="operatorsOption" value="2">Support</option>
            <option className="operatorsOption" value="3">Medic</option>
            <option className="operatorsOption" value="4">Sniper</option>
          </select>
          <div className="operatorsList">
            <div className="operatorsElem">
              <p>ALL</p>
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/avatars/UI_PL_RUS_FSB2004_A_Small.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/avatars/UI_PL_RUS_FSB2016_A_Small.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/avatars/UI_PL_RUS_SSO2013_A_Small.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/avatars/UI_PL_RUS_22SPN2016_A_Small.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/GODlogo.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/GODlogo.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/GODlogo.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/GODlogo.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/GODlogo.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/GODlogo.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/GODlogo.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/GODlogo.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/GODlogo.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/GODlogo.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/GODlogo.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/GODlogo.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/GODlogo.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/GODlogo.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/GODlogo.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/GODlogo.png'} />
            </div>
            <div className="operatorsElem">
              <img className="operatorsImg" src={'./Resource/GODlogo.png'} />
            </div>
          </div>
        </div>
      </div>
      <div className="formula contentContainer">
        <h2>Points calculator</h2>
        <div className="formulaArea area">
          <input type="text" className="formulaText" placeholder="Formula..."></input>
          <div className="formulaBtnContainer">
            <div className="formulaBtnWrapper">
              <button className="formulaBtn">Rounds</button>
            </div>
            <div className="formulaBtnWrapper">
              <button className="formulaBtn">Kills</button>
            </div>
            <div className="formulaBtnWrapper">
              <button className="formulaBtn">Deaths</button>
            </div>
            <div className="formulaBtnWrapper">
              <button className="formulaBtn">Assists</button>
            </div>
            <div className="formulaBtnWrapper">
              <button className="formulaBtn">Damage</button>
            </div>
            <div className="formulaBtnWrapper">
              <button className="formulaBtn">Heal</button>
            </div>
            <div className="formulaBtnWrapper">
              <button className="formulaBtn">Revives</button>
            </div>
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
