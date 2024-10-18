// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

class CowinDashboard extends Component {
  state = {vaccinationList: [], isLoading: true, hasError: false}

  componentDidMount() {
    this.getCoWINData()
  }

  getCoWINData = async () => {
    try {
      const response = await fetch(
        'https://apis.ccbp.in/covid-vaccination-data',
      )
      if (response.ok) {
        const data = await response.json()
        const formattedData = {
          last7DaysVaccination: data.last_7_days_vaccination,
          vaccinationByAge: data.vaccination_by_age,
          vaccinationByGender: data.vaccination_by_gender,
        }

        this.setState({isLoading: false, vaccinationList: formattedData})
      } else {
        this.setState({isLoading: false, hasError: true})
      }
    } catch (error) {
      this.setState({isLoading: false, hasError: true})
    }
  }

  renderGraphsContent = () => {
    const {vaccinationList} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = vaccinationList
    return (
      <div>
        <VaccinationCoverage data={last7DaysVaccination} />
        <VaccinationByGender data={vaccinationByGender} />
        <VaccinationByAge data={vaccinationByAge} />
      </div>
    )
  }

  renderFailureViewOrGraphsContent = () => {
    const {hasError} = this.state
    return hasError ? (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="failure view"
        />
        <h1>Something went wrong</h1>
      </div>
    ) : (
      this.renderGraphsContent()
    )
  }

  renderLoadingSpinner = () => {
    const {isLoading} = this.state
    if (isLoading) {
      return (
        <div data-testid="loader">
          <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
        </div>
      )
    }
    return this.renderFailureViewOrGraphsContent()
  }

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
        {this.renderLoadingSpinner()}
      </div>
    )
  }
}

export default CowinDashboard
