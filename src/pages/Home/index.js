import React from 'react';
import Loadable from 'react-loadable';

import ProgressBarComponent from 'components/ProgressBar';
import Link from 'components/Link';

import Wrapper from '../styled/Wrapper';
import Header from '../styled/Header';
import Title from '../styled/Title';

const LoadableHome = Loadable({
  loader: () => import('containers/Home'),
  loading: ProgressBarComponent,
});

export default function () {
  return (
    <Wrapper>
      <Header>
        <Title>Home page</Title>
        <Link to="/listing">Listing</Link>
      </Header>

      <LoadableHome />
    </Wrapper>
  );
}
