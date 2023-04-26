import React from 'react';
import { HomeBox } from '../../components';

const Home = ({children}) => {
  return (
      <>
          <HomeBox>{children}</HomeBox>
      </>
  );
}

export default Home;
