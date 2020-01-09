import React from "react";
import { Images } from "./Components/Images";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    console.log("componentDidMount is called now.....");
  }
  like = (callBack, value) => {
    const {
      state: { count }
    } = this;
    this.setState({
      count: count + 1
    },()=>{
      callBack(value+1);
    });
  };
  render() {
    const { count } = this.state;
    const { index, totalVoteFn, totalVote } = this.props;
    return (
      <div
        className="halfScreen"
        style={index & 1 ? {} : { borderColor: "#ff0000" }}
      >
        {count}
        <Images index={index} like={()=>this.like(totalVoteFn, totalVote)} totalVoteFn={totalVoteFn} totalVote={totalVote} />
      </div>
    );
  }
}

export default Content;
