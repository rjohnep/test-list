import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import ProductModel from 'containers/Listing/models/Product';

import Wrapper from './styled/Wrapper';
import Title from './styled/Title';
import Image from './styled/Image';

export default class ProductComponent extends PureComponent {
  static propTypes = {
    product: PropTypes.instanceOf(ProductModel).isRequired,
  };

  get image() {
    const imageProps = {
      image: this.props.product.variants.first().image,
    };

    return <Image {...imageProps} />;
  }

  render() {
    const { product } = this.props;

    return (
      <Wrapper>
        {product.title}
        {this.image}
      </Wrapper>
    );
  }
}
