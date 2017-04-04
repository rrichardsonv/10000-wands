import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from './Landing'
import Effects from './Effects'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  digit (top) {
    const max = Math.floor(top)
    return Math.floor(Math.random() * (max))
  },
  roll () {
    return {number: `${this.digit(9)}${this.digit(9)}${this.digit(9)}${this.digit(9)}`}
  },
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={() => {
            return <Landing klass='landing' />
          }}
          />
          <Match
            pattern='/effects'
            component={() => {
              return <Effects effect={this.roll()} />
            }}
          />
        </div>
      </BrowserRouter>
      )
  }
})

render(<App />, document.getElementById('app'))

