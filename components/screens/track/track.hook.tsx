import { Orientations } from "../../../types/orientations.enum";
import useOrientation from "../../hook/useOrientation";
import { TrackUseProps } from "./track.type";

const useTrack = (): TrackUseProps => {
  useOrientation(Orientations.portrait);

  return {
    launch: () => console.log("launch"),
    stop: () => console.log("stop"),
    currentTurn: {
      number: 1,
      timer: 120000,
    },
    turns: [],
  };
};

export default useTrack;
