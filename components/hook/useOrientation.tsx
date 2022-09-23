import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";
import { Orientations } from "../../types/orientations.enum";

type useProps = {
  changeScreenOrientation: () => void;
};

const useOrientation = (orientation: Orientations): useProps => {
  async function changeScreenOrientation(position?: Orientations) {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock[position || orientation]
    );
  }

  useEffect(() => {
    changeScreenOrientation();
  }, []);

  return {
    changeScreenOrientation,
  };
};

export default useOrientation
