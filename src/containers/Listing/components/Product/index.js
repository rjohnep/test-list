import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import ProductModel from 'containers/Listing/models/Product';

import ColorComponent from './components/Color';
import Wrapper from './styled/Wrapper';
import Title from './styled/Title';
import Description from './styled/Description';
import Image from './styled/Image';
import PriceWrapper from './styled/PriceWrapper';
import Price from './styled/Price';
import Colors from './styled/Colors';
import CurrentColor from './styled/CurrentColor';

export default class ProductComponent extends PureComponent {
  static propTypes = {
    product: PropTypes.instanceOf(ProductModel).isRequired,
  };

  state = { currentVariant: this.props.product.variants.first() };

  onColorClick = (color) => this.setState({
    currentVariant: this.props.product.variants.get(color),
  });

  get image() {
    const { currentVariant } = this.state;

    const imageProps = {
      image: currentVariant.image,
    };

    return <Image {...imageProps} />;
  }

  get price() {
    const { currentVariant } = this.state;

    return (
      <PriceWrapper>
        <CurrentColor color={currentVariant.color} />
        <Price>{currentVariant.price}</Price>
      </PriceWrapper>
    );
  }

  get colors() {
    const { currentVariant } = this.state;
    const { product } = this.props;

    return (
      <Colors>
        {
          product.colors.map(
            (color) => {
              const colorProps = {
                key: color,
                color,
                active: color === currentVariant.color,
                onClick: this.onColorClick,
              };

              return <ColorComponent {...colorProps} />;
            }
          )
        }
      </Colors>
    );
  }

  render() {
    const { product } = this.props;

    return (
      <Wrapper>
        {this.image}
        {this.price}
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        {this.colors}
      </Wrapper>
    );
  }
}
