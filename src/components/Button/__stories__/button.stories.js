import { storiesOf } from '@storybook/react'
import React from 'react'

import Button from '../src/components/Avatar'

storiesOf('Button', module)
  .addDecorator(story => <div style={{ padding: '1rem' }}>{story()}</div>)
  .add(
    'Default/Fallback',
    () => (
      <div></div>
    )
  )
