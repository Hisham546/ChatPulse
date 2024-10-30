import React from 'react';
import renderer from 'react-test-renderer';
import OtpInputBox from '../src/components/otpInput';

test('renders correctly', () => {
  const tree = renderer.create(<OtpInputBox />).toJSON();
  expect(tree).toMatchSnapshot();
});