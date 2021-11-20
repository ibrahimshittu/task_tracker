import PropTypes from 'prop-types'
import Button from './Button'	

const Header = ({title}) => {

    const onClick = () => {
        console.log('Clicked')
    }

    return (
        <header className="header">
            <h1 style = {{}}>{title}</h1>
            <Button color = "green" text="Add" onclick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// const headingStyle = {
//     color: 'red',
//     backgroundColor: '#000',
//     padding: '10px'
// }

export default Header
