import React from 'react';

import Icon from 'components/Icon';

import Progress from './styled/Progress';
import RollingIcon from './RollingIcon.svg';

const ProgressBarComponent = () => <Progress><Icon glyph={RollingIcon} /></Progress>;

export default ProgressBarComponent;
