import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {time: 0, isRunning: false}

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  onStart = () => {
    const {isRunning} = this.state
    if (!isRunning) {
      this.intervalId = setInterval(this.increment, 1000)
      this.setState({isRunning: true})
    }
  }

  onStop = () => {
    clearInterval(this.intervalId)
    this.setState({isRunning: false})
  }

  onReset = () => {
    clearInterval(this.intervalId)
    this.setState({time: 0, isRunning: false})
  }

  increment = () => {
    this.setState(prevState => ({
      time: prevState.time + 1,
    }))
  }

  renderTime = () => {
    const {time} = this.state
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    const stringfiedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const stringfiedSeconds = seconds < 10 ? `0${seconds}` : seconds

    return `${stringfiedMinutes}:${stringfiedSeconds}`
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Stop Watch</h1>
        <div className="stop-watch-container">
          <div className="timer-container">
            <img
              src="https://i.pinimg.com/1200x/fa/bd/7f/fabd7ff2768ce813c5298a459fcd32e7.jpg"
              alt="stop-watch-logo"
              className="stop-watch-logo"
            />
            <p className="heading">Timer</p>
          </div>
          <p className="timer">{this.renderTime()}</p>
          <div className="buttons-container">
            <button
              className="start-button"
              type="button"
              onClick={this.onStart}
            >
              Start
            </button>
            <button className="stop-button" type="button" onClick={this.onStop}>
              Stop
            </button>
            <button
              className="reset-button"
              type="button"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
