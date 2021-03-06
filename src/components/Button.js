import PropTypes from 'prop-types'
import React from 'react'

const Button = ({color, text, onClick}) => {

    return (
        <button onClick={onClick} style={{backgroundColor: color}} className="btn">{text}</button>
    )
}

Button.defaultProps = {
    color: 'green',
    text: 'Add Task'
}

Button.propTypes = {
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired, 
    onClick: PropTypes.func,
}

export default Button
