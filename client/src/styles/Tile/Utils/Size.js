const scale = [0, 300, 500, 800, 1200]
export const size = props => {
  const style = {};
  if (props.w) {
    style.width = scale[props.w] ? scale[props.w] : props.w + "px";
  }
  if (props.h) {
    style.height = scale[props.h] ? scale[props.h] : props.h + "px";
  }
  return style;
}
