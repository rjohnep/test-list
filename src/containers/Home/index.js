import React, { PureComponent } from 'react';

import Wrapper from './styled/Wrapper';
import Item from './styled/Item';

export default class HomeContainer extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Item>
          I didn't use 'create-react-app' boilerplate, because I wanted to demonstrate <b>my boilerplate</b>. It based
          on at least 3 years of hard working and experience of high-load projects.
        </Item>
        <Item>
          I've made the <b>routing system(Webpack code-splitting)</b> based on hash-history( because GitHub pages don't
          work with browser history, it is easy to switch it). You can open the site on the home page, open browser
          console on the network tab and move to the listing page. You can see new network requests of a code. The
          routing system <b>decreasing the time of page loading</b>.
        </Item>
        <Item>
          Tech stack is almost similar to your the list of bonus points. <b>React, Redux, Immutable, Saga, Reselect,
          React-loadable, styled-components</b> (themes, decreasing the time of slicing and so on, BEM no longer needed,
          easy RWD),<b> Webpack, Jest</b> and so on.
        </Item>
        <Item>
          Developing flow is based on classic Redux with additional <b>Data layer (Models)</b>. Models help to make
          reducers clean and readable. Also Model contains all operations with data, Reselect(memoization) helps to
          improve the performance of data operations. View layer uses data only through Reselect selectors.
        </Item>
        <Item>
          Implementation. Off course it is the test case and I've spent no more than 16 hours for this task. I know that
          styling is not the best side of my skills, I wanted to demonstrate the foundation which can be easily
          customized for any styles and visions. Also, <b>the products fetching is a fake request with synthetic
          delaying (~1s).</b>
        </Item>
      </Wrapper>
    );
  }
}
