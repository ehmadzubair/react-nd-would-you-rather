import React from 'react'
import {ControlLabel, FormControl} from 'react-bootstrap'

class OptionLabel extends React.Component {

    state = {
        inputValue: ''
    }

    handleChange = (e) => {
        this.setState({inputValue: e.target.value}, () => {
            this.props.handleValueChange(this.state.inputValue)
        })
    }
    render() {
        const {title, placeholder} = this.props
        return (
            <div>
            <ControlLabel>{title}</ControlLabel>
            <FormControl
                type='text'
                placeholder={placeholder}
                value={this.state.inputValue}
                onChange={this.handleChange}
            />
            </div>
        )
    }
}

export default OptionLabel