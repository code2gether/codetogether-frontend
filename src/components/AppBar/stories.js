import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import Burger from '../icons/Burger'
import CrossOne from '../icons/Cross'
import CrossTwo from '../icons/Cross'
import Toolbar from '../Toolbar'
import AppBar from '.'

const stories = storiesOf('Components/AppBar', module)

export const Default = () => (
  <div style={{ height: '100vh', background: '#eee' }}>
    <AppBar
      color={select(
        'color',
        {
          inherit: 'inherit',
          default: 'default',
        },
        'default',
      )}
      position={select(
        'position',
        {
          fixed: 'fixed',
          absolute: 'absolute',
          static: 'static',
        },
        'fixed',
      )}
    >
      <Toolbar>
        <Burger />

        <div style={{ flexGrow: 1, textAlign: 'center' }}>
          <CrossOne />
        </div>

        <CrossTwo />
      </Toolbar>
    </AppBar>
  </div>
)

stories.add('Default', Default)

export default Default
