import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";

const usedefaultLayout = () => {
  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT
    );
  }

  useEffect(() => {
    changeScreenOrientation();
  }, []);

  return {};
};

export default usedefaultLayout;
