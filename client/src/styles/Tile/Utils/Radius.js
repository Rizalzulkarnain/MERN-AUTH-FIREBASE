const scale = [0,4,8,12];

export const radius = props => {
  const style = {};
  if (props.r) {
    style.borderRadius = scale[props.r];
  }
  return style;
}
