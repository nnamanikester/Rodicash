import * as React from 'react';
import {render} from '@testing-library/react-native';
import {Text} from '../../src/components/common/Text';

describe('Text', () => {
  test('Texts passed as children should be vissible', () => {
    const {getByText} = render(<Text>Hello Example</Text>);

    expect(getByText('Hello Example')).toBeDefined();
  });
});
