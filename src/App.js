import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as triangleActions from './Actions/triangle'
import './App.css';
import Triangle from './Components/Triangle'
import TextBoard from './Components/TextBoard'

const mapStateToProps = (state) => {
  const { firstSide, secondSide, thirdSide, isValidTriangle, triangleType } = state.triangle

  return {
    firstSide, secondSide, thirdSide, isValidTriangle, triangleType
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    ...triangleActions
  }, dispatch)

class App extends Component {

  render(){

    const { firstSide, secondSide, thirdSide, isValidTriangle, triangleType, changeSideValue } = this.props

    return (
      <div className="App">
        <header className="App-header">
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
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
