import React from "react";
import { connect } from "react-redux";
import { Images } from "./Components/Images";

class Content extends React.Component {
  componentDidMount() {
    console.log("componentDidMount is called now.....");
  }
  render() {
    const { index, votes } = this.props;
    let count=votes.poll?votes.poll.reduce((a, b) => a + b, 0):0;
    console.log("redux is ....", count, votes);
    return (
      <div
        className="halfScreen"
        style={index & 1 ? {} : { borderColor: "#ff0000" }}
      >
        {count}
        <Images
          index={index}
          like={() => this.props.setVote(index,votes[index]?votes[index]+1:1)}
          totalVote={votes[index]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ votes: state.votes });

const mapDispatchToProps = dispatch => {
  return {
    setVote: (index, vote) => dispatch({ type: "VOTE", index, vote })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
