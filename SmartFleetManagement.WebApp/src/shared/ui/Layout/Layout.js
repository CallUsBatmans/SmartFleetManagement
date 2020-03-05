import React from 'react';
import styles from './layout.module.scss';
import MenuSidebar from '../MenuSidebar/MenuSidebar';

const Layout = props => {

  return (
    <MenuSidebar visible={true}>
      <div className={styles.layout}>
        {props.children}
      </div>
    </MenuSidebar>
  )
};

export default Layout;
