import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chars: ""
    };
  }

  addCharsToState = (event) => {
    // console.log(event.target.value)
    this.setState({
      chars: event.target.value

    })
  }




  render() {

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value = {this.state.chars} onChange={this.addCharsToState} />
        <p>{this.props.maxChars - this.state.chars.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
