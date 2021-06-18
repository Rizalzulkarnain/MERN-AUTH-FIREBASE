import { scale } from './Theme';

export const margin = props => {
  const style = {};
  if (props.m) {
    style.margin = scale[props.m] + 'px';
  }
  if (props.mt) {
    style.marginTop = scale[props.mt] + 'px';
  }
  if (props.mr) {
    style.marginRight = scale[props.mr] + 'px';
  }
  if (props.mb) {
    style.marginBottom = scale[props.mb] + 'px';
  }
  if (props.ml) {
    style.marginLeft = scale[props.ml] + 'px';
  }
  if (props.mx) {
    style.marginLeft = scale[props.mx] + 'px';
    style.marginRight = scale[props.mx] + 'px';
  }
  if (props.my) {
    style.marginTop = scale[props.my] + 'px';
    style.marginBottom = scale[props.my] + 'px';
  }

  return style;
}
