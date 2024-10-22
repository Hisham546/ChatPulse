/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import TextInputOutlined from '../src/components/textBox/inputText';
import PrivateChatScreen from '../src/screens/privateChats';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<PrivateChatScreen />);
});
