import React from 'react'
import {Button} from 'react-bootstrap'

class OptionButton extends React.Component {
    render() {
        const {isSelected, isAnswered, title, numVotes, votePercentage, handleClick} = this.props

        return (
            <div>
            <Button bsStyle={isSelected ? 'primary' : 'default'}
                    bsSize='large'
                    disabled={isAnswered}
                    onClick={handleClick}
            >
                {title} </Button>
                {isAnswered && < p > {numVotes} votes, {votePercentage}% </p>}
            </div>
        )
    }
}

export default OptionButton