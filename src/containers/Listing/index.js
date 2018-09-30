import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { PureComponent, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ProgressBarComponent from 'components/ProgressBar';
import injectReducer from 'utils/store/injectReducer';
import injectSaga from 'utils/store/injectSaga';

import { makeSelectProducts, makeSelectIsLoading } from './selectors';
import { addProductsRequest } from './actions';
import ProductModel from './models/Product';
import reducer from './reducer';
import saga from './saga';

import ProductComponent from './components/Product';

import Wrapper from './styled/Wrapper';

@compose(
  injectReducer({ key: 'listing', reducer }),
  injectSaga({ key: 'listing', saga }),
  connect(
    createStructuredSelector({
      products: makeSelectProducts,
      isLoading: makeSelectIsLoading,
    }),
    {
      fetchProducts: addProductsRequest,
    },
  ),
)
export default class ListingContainer extends PureComponent {
  static propTypes = {
    products: ImmutablePropTypes.listOf(PropTypes.instanceOf(ProductModel)).isRequired,
    fetchProducts: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.fetchProducts();
  }

  get progressBar() {
    const { isLoading } = this.props;

    return isLoading && (<ProgressBarComponent />);
  }

  get products() {
    const { products } = this.props;

    return products.map((product) => {
      const productProps = {
        key: product.id,
        product,
      };

      return <ProductComponent {...productProps} />;
    });
  }

  render() {
    return (
      <Fragment>
        {this.progressBar}
        <Wrapper>
          {this.products}
        </Wrapper>
      </Fragment>
    );
  }
}
