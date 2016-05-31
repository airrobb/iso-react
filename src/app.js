import React from 'react'
import ReactDOM from 'react-dom'

import styles from './styles.module.css'

import './app.css'

const App = () => {
  return (
    <div className={styles.wrapper}> Text Text Text </div>
  )
}

const mountNode = document.querySelector('#root')
ReactDOM.render(<App />, mountNode)
