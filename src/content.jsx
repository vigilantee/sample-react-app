import React from "react";
import { connect } from "react-redux";
import { Images } from "./Components/Images";

class Content extends React.Component {
  render() {
    const {
      index,
      votes: { poll: votes },
      totalVoteFn
    } = this.props;
    let count = votes ? votes.reduce((a, b) => a + b, 0) : 0;
    let currentVote = votes[index] ? votes[index] : 0;
    // totalVoteFn(count);
    return (
      <div
        className="halfScreen"
        style={index & 1 ? {} : { borderColor: "#ff0000" }}
      >
        {currentVote}
        <Images
          index={index}
          like={() => this.props.setVote(index, currentVote + 1)}
        />
        <button onClick={() => totalVoteFn(count)}>Add To Cart</button>
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
