// Write your code here
import {Component} from 'react'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

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
        <div>
          <VaccinationCoverage />
          <VaccinationByGender />
          <VaccinationByAge />
        </div>
      </div>
    )
  }
}

export default CowinDashboard
