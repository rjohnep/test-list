import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { PureComponent } from 'react';

import ItemComponent from './components/Item';
import Wrapper from './styled/Wrapper';
import Line from './styled/Line';
import Title from './styled/Title';

export default class ActiveListComponent extends PureComponent {
  static propTypes = {
    filters: ImmutablePropTypes.mapOf(ImmutablePropTypes.set).isRequired,
    onItemClick: PropTypes.func.isRequired,
  };

  get items() {
    const { filters, onItemClick } = this.props;

    return filters.entrySeq().map(
      ([k, set]) => set.size > 0 && (
        <Line key={k}>
          <Title>{k}:</Title>
          {
            set.map(
              (item) => {
                const itemProps = {
                  key: item,
                  onItemClick,
                  item,
                  filter: k,
                };

                return <ItemComponent {...itemProps} />;
              }
            )}
        </Line>
      )
    );
  }

  render() {
    return (
      <Wrapper>
        {this.items}
      </Wrapper>
    );
  }
}
