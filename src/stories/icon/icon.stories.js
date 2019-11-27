import React from 'react';
import { Icon } from '../../components';

export default { title: 'Icon' };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
);