import React from 'react'
import Header from './Header'
import EffCard from './EffCard'

const { string, shape } = React.PropTypes

const Effects = React.createClass({
  propTypes: {
    effect: shape({
      number: string
    })
  },
  render () {
    const { number } = this.props.effect
    return (
      <div className='search'>
        <Header />
        <div>
          <EffCard number={number} />
        </div>
      </div>
    )
  }
})

export default Effects
