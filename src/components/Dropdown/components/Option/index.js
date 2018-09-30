import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import { OptionRecord } from 'containers/Filters/models/Filter';

import Checked from './Checked.svg';
import Option from './styled/Option';
import Icon from './styled/Icon';

export default class OptionComponent extends PureComponent {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    option: PropTypes.instanceOf(OptionRecord).isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => this.props.onClick({
    key: this.props.filter,
    option: this.props.option.value,
    active: this.props.option.active,
  });

  render() {
    const { option } = this.props;

    const optionProps = {
      onClick: this.onClick,
      active: option.active,
    };

    return (
      <Option {...optionProps}>
        {option.value}
        {option.active && <Icon glyph={Checked} />}
      </Option>
    );
  }
}
