// Write your code here
import {Component} from 'react'

import './index.css'

class CowinDashboard extends Component {
  render() {
    return (
      <div className="cowinDashboardContainer">
        <div className="logoContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="websiteLogo"
          />
          <h1 className="logoHeading">Co-WIN</h1>
        </div>
        <h1 className="websiteHeading">CoWIN Vaccination in India</h1>
      </div>
    )
  }
}

export default CowinDashboard
