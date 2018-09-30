import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import Color from './styled/Color';

export default class ColorComponent extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => this.props.onClick(this.props.color);

  render() {
    const { color, active } = this.props;

    const colorProps = {
      color,
      active,
      onClick: this.onClick,
    };

    return <Color {...colorProps} />;
  }
}
