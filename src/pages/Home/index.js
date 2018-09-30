import React from 'react';
import Loadable from 'react-loadable';

import ProgressBarComponent from 'components/ProgressBar';
import Link from 'components/Link';

import Wrapper from './styled/Wrapper';
import Title from './styled/Title';

const LoadableHome = Loadable({
  loader: () => import('containers/Home'),
  loading: ProgressBarComponent,
});

export default function () {
  return (
    <Wrapper>
      <Title>Home page</Title>
      <Link to="listing">go Listing Page</Link>
      <LoadableHome />
    </Wrapper>
  );
}
