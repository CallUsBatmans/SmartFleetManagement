import React from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const MenuSidebar = props => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={props.onHide}
        vertical
        visible={props.visible}
        width='thin'
      >
        <Menu.Item as='a'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='gamepad' />
          Games
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='camera' />
          Channels
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher dimmed={props.visible}>
        <Segment basic>
          {props.children}
        </Segment>
      </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default MenuSidebar;
