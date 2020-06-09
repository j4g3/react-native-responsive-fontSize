import { isIphoneX } from "react-native-iphone-x-helper";
import { Platform, StatusBar, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const standardLength = width > height ? width : height;
const offset =
  width > height ? 0 : Platform.OS === "ios" ? 78 : StatusBar.currentHeight;

const deviceHeight =
  isIphoneX() || Platform.OS === "android"
    ? standardLength - offset
    : standardLength;

export function RFPercentage(percent, type) {
  if (type === "pixel") {
    const heightPercent = (percent * deviceHeight) / 100;
    return `${Math.round(heightPercent)}px`;
  } else {
    const heightPercent = (percent * deviceHeight) / 100;
    return Math.round(heightPercent);
  }
}

export function RFValue(fontSize, standardScreenHeight = 680) {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}
