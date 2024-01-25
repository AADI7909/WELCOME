// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribe: false,
  }

  SubscribeBtn = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getBtnText = () => {
    const {isSubscribe} = this.state

    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button className="btn-card" onClick={this.SubscribeBtn}>
          {this.getBtnText()}
          Subscribe
        </button>
      </div>
    )
  }
}

export default Welcome
