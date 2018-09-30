import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { PureComponent, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import DropdownComponent from 'components/Dropdown';
import injectReducer from 'utils/store/injectReducer';

import FilterModel from './models/Filter';
import { makeSelectFilters, makeSelectHasActiveFilters, makeSelectActiveFilters } from './selectors';
import { setFilter, removeFilter } from './actions';
import reducer from './reducer';

import ActiveListComponent from './components/ActiveList';
import Wrapper from './styled/Wrapper';
import Title from './styled/Title';

@compose(
  injectReducer({ key: 'filters', reducer }),
  connect(
    createStructuredSelector({
      filters: makeSelectFilters,
      hasActiveFilters: makeSelectHasActiveFilters,
      activeFilters: makeSelectActiveFilters,
    }),
    {
      setFilter,
      removeFilter,
    },
  ),
)
export default class FiltersContainer extends PureComponent {
  static propTypes = {
    filters: ImmutablePropTypes.mapOf(PropTypes.instanceOf(FilterModel)).isRequired,
    activeFilters: ImmutablePropTypes.mapOf(ImmutablePropTypes.set).isRequired,
    hasActiveFilters: PropTypes.bool.isRequired,
    setFilter: PropTypes.func.isRequired,
    removeFilter: PropTypes.func.isRequired,
  };

  state = { activeFilter: null };

  onTitleClick = (filterName) => this.setState(
    ({ activeFilter }) => ({
      activeFilter: (filterName !== activeFilter) && filterName || null,
    })
  );

  onOptionClick = (data) => {
    const { active } = data;

    if (active) {
      return this.props.removeFilter(data);
    }

    return this.props.setFilter(data);
  };

  get filters() {
    const { activeFilter } = this.state;
    const { filters } = this.props;

    return filters.valueSeq().map((filter) => {
      const filterProps = {
        key: filter.key,
        name: filter.key,
        options: filter.options,
        onTitleClick: this.onTitleClick,
        onOptionClick: this.onOptionClick,
        isOpened: activeFilter === filter.key,
      };

      return <DropdownComponent {...filterProps} />;
    });
  }

  get activeFilters() {
    const { hasActiveFilters, activeFilters } = this.props;

    const activeProps = {
      filters: activeFilters,
      onItemClick: this.props.removeFilter,
    };

    return hasActiveFilters && (<ActiveListComponent {...activeProps} />);
  }

  render() {
    return (
      <Fragment>
        <Wrapper>
          <Title>Filters:</Title>

          {this.filters}
        </Wrapper>

        {this.activeFilters}
      </Fragment>
    );
  }
}
