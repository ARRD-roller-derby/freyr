
import Factory from "../layouts/Factory/Factory";
import usetrackTimer from "./trackTimer.hook";
import { UseProps,Props } from "./trackTimer.type";
import TrackTimerView from './trackTimer.view';

const TrackTimer =  Factory<Props,UseProps>(usetrackTimer, TrackTimerView);
export default TrackTimer