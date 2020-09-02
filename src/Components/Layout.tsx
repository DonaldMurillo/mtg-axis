import React from 'react';
import { LayoutModel } from '../Models/layout.model';
import MyNavBar from './MyNavbar';
import Page from './Page';
import MyFotter from './MyFooter';


const Layout = (props: LayoutModel) => {
  return (
    <div>
        <MyNavBar/>
        <Page/>
        <MyFotter/>
    </div>
  );
}

export default Layout;