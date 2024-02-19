import { Link } from 'react-router-dom'

import "./homepage.css"

function Homepage() {
    return (
        <div className="homeContentWrapper">
            <div className="homeContent">
                <div className="homeHeader">
                    <h1>Welcome to the<b>&nbsp;GOD-Assistant&nbsp;</b>settings panel</h1>
                </div>
                <div className="homeDescription">
                    Select the event type for customize, it can be&nbsp;
                    <Link className="homeDescriptionNavBtn" to="/damage">Damage dealer</Link>
                    &nbsp;or&nbsp;
                    <Link className="homeDescriptionNavBtn" to="/social">Social events</Link>
                </div>
            </div>
        </div>
    );
}

export default Homepage;