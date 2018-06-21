import React from 'react'
import {Button} from 'react-bootstrap'

class OptionButton extends React.Component {
    render() {
        const {isSelected, isDisabled, title, numVotes, votePercentage, handleClick} = this.props

        return (
            <div>
            <Button bsStyle={isSelected ? 'primary' : 'default'}
                    bsSize='large'
                    disabled={isDisabled}
                    onClick={handleClick}
            >
                {title} </Button>
                < p > {numVotes} votes, {votePercentage}% </p>
            </div>
        )
    }
}

export default OptionButton