import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { PureComponent } from 'react';

import OptionComponent from './components/Option';
import Wrapper from './styled/Wrapper';
import Title from './styled/Title';
import Content from './styled/Content';

export default class DropdownComponent extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    options: ImmutablePropTypes.map.isRequired,
    isOpened: PropTypes.bool.isRequired,
    onTitleClick: PropTypes.func.isRequired,
    onOptionClick: PropTypes.func.isRequired,
  };

  onToggleContent = () => this.props.onTitleClick(this.props.name);

  get title() {
    const { name, isOpened } = this.props;

    const titleProps = {
      onClick: this.onToggleContent,
      isOpened,
    };

    return <Title {...titleProps}>{name}</Title>;
  }

  get content() {
    const {
      isOpened,
      name,
      options,
      onOptionClick,
    } = this.props;

    return isOpened && (
      <Content>
        {options.valueSeq().map((option, i) => {
          const optionProps = {
            key: i,
            option,
            filter: name,
            onClick: onOptionClick,
          };

          return <OptionComponent {...optionProps} />;
        })}
      </Content>
    );
  }

  render() {
    return (
      <Wrapper>
        {this.title}
        {this.content}
      </Wrapper>
    );
  }
}
