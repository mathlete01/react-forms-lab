import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 280,
      remainingChars: 0
    };

    handleChange = event => {
      this.setState({
        remainingChars:event.target.value
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.props.handeChange(event)} value={this.state.remainingChars}/>
      </div>
    );
  }
}

export default TwitterMessage;
