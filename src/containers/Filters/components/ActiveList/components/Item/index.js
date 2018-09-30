import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import Item from './styled/Item';
import Icon from './styled/Icon';
import CloseIcon from './Close.svg';

export default class ItemComponent extends PureComponent {
  static propTypes = {
    item: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    onItemClick: PropTypes.func.isRequired,
  };

  onClick = () => this.props.onItemClick({
    key: this.props.filter,
    option: this.props.item,
  });

  render() {
    const { item } = this.props;

    const itemProps = {
      key: item,
      onClick: this.onClick,
    };

    return (
      <Item {...itemProps}>
        {item}
        <Icon glyph={CloseIcon} />
      </Item>
    );
  }
}
