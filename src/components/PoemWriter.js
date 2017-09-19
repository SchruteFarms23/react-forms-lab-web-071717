import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      poemtext: []

    };
  }

  handleChange= (event) =>{
    this.setState({
      value: event.target.value,
      poemtext: event.target.value
    })

  }

  valid(){
    var lines = this.state.value.split('\n')

    if(lines[0]){
    var line1 = lines[0].trim()
    var wordsLine1 = line1.split(' ').length
    }

    if(lines[1]){
      var line2 = lines[1].trim()
      var wordsLine2 = line2.split(' ').length
    }

    if(lines[2]){
      var line3 = lines[2].trim()
      var wordsLine3 = line3.split(' ').length
    }

    if(lines.length === 3 && wordsLine1 === 5 && wordsLine2 === 3 && wordsLine3 === 5){
      return true
    }else if(this.state.value === ''){
      return false

    }else{
      return false
    }
  }

  render() {
    if(this.valid()){
      return(
      <div>
        <textarea
          name = "textarea"
          value = {this.state.value}
          rows="3"
          cols="60"
          onChange={this.handleChange}
        />
        </div>
    );
  }else{
    return (
      <div>
      <textarea
      name = "textarea"
      value = {this.state.value}
      rows="3"
      cols="60"
      onChange={this.handleChange}
      />
      <div
      id="poem-validation-error"
      style={{color: 'red'}}
      >
      This poem is not written in the right structure!
      </div>
      </div>

    );
  }
 }
}
