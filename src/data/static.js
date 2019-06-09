
export const orientation = {
  NORTH: { x: 0, y: 1 },
  SOUTH: { x: 0, y: -1 },
  WEST: { x: -1, y: 0 },
  EAST: { x: 1, y: 0 }
};

// Used to get direction for output
export const direction = {
  x: {
    "0": {
      y: {
        "1": "NORTH",
        "-1": "SOUTH"
      }
    },
    "1": {
      y: {
        "0": "EAST"
      }
    },
    "-1": {
      y: {
        "0": "WEST"
      }
    }
  }
};
