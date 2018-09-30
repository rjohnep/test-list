import PropTypes from 'prop-types';
import React from 'react';

import StyledIcon from './styled/Icon';

const Icon = (props) => {
  const { glyph, ...rest } = props;

  return (
    <StyledIcon {...rest}>
      <use xlinkHref={`#${glyph.id}`} />
    </StyledIcon>
  );
};

Icon.propTypes = {
  glyph: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Icon;
