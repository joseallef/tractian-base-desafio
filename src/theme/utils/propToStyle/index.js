// import { breakpointsMedia } from "../breakpointsMedia";

export default function propToStyle(propName) {
  return function (props) {
    const propValue = props[propName];

    if (typeof propValue === 'string' || propValue === 'number') {
      return {
        [propName]: propValue,
      };
    }
    if (typeof propValue === 'object') {
      // const breakpoints = {};

    }
  }
}