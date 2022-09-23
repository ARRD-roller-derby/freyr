
import Factory from "../../layouts/Factory/Factory";
import useTrack from "./track.hook";
import { TrackUseProps } from "./track.type";
import TrackView from "./track.view";

const Track =  Factory<unknown,TrackUseProps>(useTrack, TrackView);
export default Track