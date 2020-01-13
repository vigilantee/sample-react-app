function votes(state = { poll: [] }, action) {
  switch (action.type) {
    case "VOTE":
      let { index, vote } = action;
      let { poll } = state;
      poll[index] = vote;
      return { ...state, poll };
    case "RESET":
      return { poll: [] };
    default:
      return state;
  }
}

export default votes;
