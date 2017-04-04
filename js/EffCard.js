import React from 'react'
import preload from '../public/effects.json'
const { string } = React.PropTypes

const EffCard = React.createClass({
  propTypes: {
    number: string
  },
  render () {
    const effect = preload[this.props.number]
    const dice = effect.match(/\d{1}d(\d*)\s/)
    let innerCard = ''
    if (dice) {
      innerCard = `roll ${dice[0]}`
    }
    return (
      <div className='show-card'>
        <div className='player-card'>
          <h1>{effect}</h1>
          <h3>{innerCard}</h3>
        </div>
      </div>
    )
  }
})

export default EffCard
