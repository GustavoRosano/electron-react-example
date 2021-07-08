import './App.css'
import React from 'react'
import Menu from '../components/Menu'
import Content from '../components/Content'
import { BrowserRouter as Router } from 'react-router-dom'

export default props => {
    return (
        <div className="App">
            <Router>
                <Menu />
                <Content />
            </Router>
        </div>
    )
}