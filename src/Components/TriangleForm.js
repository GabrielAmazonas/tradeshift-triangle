import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom';
import * as triangleActions from '../Actions/triangle'
import '../App.css';
import Triangle from './Triangle'
import TextBoard from './TextBoard'

const mapStateToProps = (state) => {
    const { firstSide, secondSide, thirdSide, isValidTriangle, triangleType } = state.triangle
    const { username } = state.login

    return {
        firstSide, secondSide, thirdSide, isValidTriangle, triangleType, username
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({
        ...triangleActions
    }, dispatch)

class TriangleForm extends Component {

    render(){

        const { firstSide, secondSide, thirdSide, isValidTriangle, triangleType, changeSideValue, username } = this.props

        return (
            <div className="App">
                <div className="App-area">
                    {username && <TextBoard displayText={`Hello, ${username}!`} />}
                    {!isValidTriangle && <TextBoard displayText={"Not a valid triangle. Change the side sizes below (min 0, max 10)"} />}
                    {isValidTriangle && <p className="Text">The triangle type is {triangleType}</p>}
                    {isValidTriangle && <Triangle firstSide={firstSide} secondSide={secondSide}  thirdSide={thirdSide} className="Triangle" />}
                    <form data-ts="Form">
                        <fieldset>
                            <label class="ts-left">
                                <span> First Side Size (px)</span>
                                <input onChange={(e) => {changeSideValue("firstSide", Number(e.target.value))}} type="number" value={firstSide || ""}  />
                            </label>
                            <label class="ts-left">
                                <span> Second Side Size (px)</span>
                                <input onChange={(e) => {changeSideValue("secondSide", Number(e.target.value))}} type="number" value={secondSide || ""}/>
                            </label>
                            <label class="ts-left">
                                <span> Third Side Size (px)</span>
                                <input onChange={(e) => {changeSideValue("thirdSide",Number(e.target.value))}} type="number" value={thirdSide || ""} />
                            </label>
                        </fieldset>
                    </form>
                    <button onClick={() => this.props.history.push("/")} data-ts="Button" className="ts-primary">
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(TriangleForm));
