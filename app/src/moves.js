const singlesMoves = [
  {
    move: "Drive Shot",
    ties: ["Drive Shot"],
    loses: ["Smash", "Net Shot"],
  },
  {
    move: "Drop Shot",
    ties: ["Drop Shot"],
    loses: ["Drive Shot"],
  },
  {
    move: "Clear Shot",
    ties: ["Clear Shot"],
    loses: ["Drop Shot"],
  },
  {
    move: "Net Lift",
    ties: ["Net Lift"],
    loses: ["Clear Shot"],
  },
  {
    move: "Net Shot",
    ties: ["Net Shot"],
    loses: ["Smash"],
  },
  {
    move: "Smash",
    ties: ["Smash"],
    loses: ["Net Lift"],
  }
];

const doublesMoves = [
  {
    move: "Left Drive Shot",
    ties: ["Left Drive Shot"],
    loses: ["Left Smash", "Left Net Shot"],
  },
  {
    move: "Left Drop Shot",
    ties: ["Left Drop Shot"],
    loses: ["Left Drive Shot"],
  },
  {
    move: "Left Clear Shot",
    ties: ["Left Clear Shot"],
    loses: ["Left Drop Shot"],
  },
  {
    move: "Left Net Lift",
    ties: ["Left Net Lift"],
    loses: ["Left Clear Shot"],
  },
  {
    move: "Left Net Shot",
    ties: ["Left Net Shot"],
    loses: ["Left Smash"],
  },
  {
    move: "Left Smash",
    ties: ["Left Smash"],
    loses: ["Left Net Lift"],
  },
  {
    move: "Right Drive Shot",
    ties: ["Right Drive Shot"],
    loses: ["Right Smash", "Right Net Shot"],
  },
  {
    move: "Right Drop Shot",
    ties: ["Right Drop Shot"],
    loses: ["Right Drive Shot"],
  },
  {
    move: "Right Clear Shot",
    ties: ["Right Clear Shot"],
    loses: ["Right Drop Shot"],
  },
  {
    move: "Right Net Lift",
    ties: ["Right Net Lift"],
    loses: ["Right Clear Shot"],
  },
  {
    move: "Right Net Shot",
    ties: ["Right Net Shot"],
    loses: ["Right Smash"],
  },
  {
    move: "Right Smash",
    ties: ["Right Smash"],
    loses: ["Right Net Lift"],
  }
];

export { singlesMoves, doublesMoves };