import React from 'react'
import { Link } from 'react-router'
const { string } = React.PropTypes

const Landing = React.createClass({
  propTypes: {
    klass: string
  },
  render () {
    return (
      <div className={this.props.klass}>
        <h1>Random Effects!!1!</h1>
        <Link to='/effects'>What's gonna happen??</Link>
      </div>
    )
  }
})

export default Landing
