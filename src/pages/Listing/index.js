import React from 'react';
import Loadable from 'react-loadable';

import ProgressBarComponent from 'components/ProgressBar';
import Link from 'components/Link';

import Wrapper from '../styled/Wrapper';
import Header from '../styled/Header';
import Title from '../styled/Title';

const LoadableFilters = Loadable({
  loader: () => import('containers/Filters'),
  loading: ProgressBarComponent,
});

const LoadableListing = Loadable({
  loader: () => import('containers/Listing'),
  loading: ProgressBarComponent,
});

export default function () {
  return (
    <Wrapper>
      <Header>
        <Title>Listing page</Title>
        <Link to="/">Home</Link>
      </Header>

      <LoadableFilters />
      <LoadableListing />
    </Wrapper>
  );
}
