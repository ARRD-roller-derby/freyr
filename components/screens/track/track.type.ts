export type TrackUseProps = {
  launch: () => void;
  stop: () => void;
  currentTurn: Turn;
  turns: Turn[];
};

export type Turn = {
  number: number;
  timer: number;
};
