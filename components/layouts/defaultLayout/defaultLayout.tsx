import Factory from "../Factory/Factory";
import defaultLayoutView from "./defaultLayoutView";
import usedefaultLayout from "./usedefaultLayout";

interface Props {
    children: JSX.Element | JSX.Element[]
}

export default Factory<Props,unknown>(usedefaultLayout, defaultLayoutView);