import { scale } from './Theme';

export const padding = props => {
  const style = {};
  if (props.p) {
    style.padding = scale[props.p] + 'px';
  }
  if (props.pt) {
    style.paddingTop = scale[props.pt] + 'px';
  }
  if (props.pr) {
    style.paddingRight = scale[props.pr] + 'px';
  }
  if (props.pb) {
    style.paddingBottom = scale[props.pb] + 'px';
  }
  if (props.pl) {
    style.paddingLeft = scale[props.pl] + 'px';
  }
  if (props.px) {
    style.paddingLeft = scale[props.px] + 'px';
    style.paddingRight = scale[props.px] + 'px';
  }
  if (props.py) {
    style.paddingTop = scale[props.py] + 'px';
    style.paddingBottom = scale[props.py] + 'px';
  }

  return style;
}
