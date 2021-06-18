export const position = props => {
  const style = {};
  if (props.position) {
    style.position = props.position;
  }
  if (props.top) {
    style.top = props.top + "px"
  }
  if (props.right) {
    style.right = props.right + "px"
  }
  if (props.bottom) {
    style.bottom = props.bottom + "px"
  }
  if (props.left) {
    style.left = props.left + "px"
  }

  if (props.center) {
    style.marginLeft = 'auto';
    style.marginRight = 'auto';
  }

  return style;
}
