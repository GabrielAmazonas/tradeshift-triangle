import React, { Component } from 'react';

class TextBoard extends Component {
    
    render(){
        const { displayText } = this.props
        return (
            <div data-ts="Board">
	            <div data-ts="Panel">
		            <p className="Text">{displayText}</p>
	            </div>
            </div>
        )
    }
}

export default TextBoard