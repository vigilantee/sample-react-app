import React from "react";
import { Images } from "./Components/Images";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      sum: 19
    };
  }
  componentDidMount() {
    console.log("componentDidMount is called now.....");
  }
  like = () => {
    const {
      state: { count }
    } = this;
    this.setState({
      count: count + 1
    });
  };
  render() {
    const { count } = this.state;
    const { index } = this.props;
    return (
      <div
        className="halfScreen"
        style={index & 1 ? {} : { borderColor: "#ff0000" }}
      >
        {count}
        <Images index={index} like={this.like} />
      </div>
    );
  }
}

export default Content;
