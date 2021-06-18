export const opacity = props => {
  const style = {};

  if (props.o) {
    style.opacity = props.o;
  }
  return style;
}
