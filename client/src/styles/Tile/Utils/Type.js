import { fontSize } from "./Theme"

const weightScale = [100, 500, 900];

export const type = props => {
  const style = {};

  if (props.textAlign) {
    style.textAlign = props.textAlign;
  }

  if (props.fontSize) {
    style.fontSize = fontSize[props.fontSize];
  }

  if (props.fontWeight) {
    style.fontWeight = weightScale[props.fontWeight];
  }
  return style;
}
