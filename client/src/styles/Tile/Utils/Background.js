import { color } from './Theme';

export const background = props => {
  const style = {};
  if (props.background) {
    style.background = color[props.background] ? color[props.background] : props.background;
  }

  if (props.backgroundColor) {
    style.backgroundColor = color[props.backgroundColor] ? color[props.backgroundColor] : props.backgroundColor;
  }
  return style;
}
