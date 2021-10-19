import * as React from 'react';
import {render} from '@testing-library/react-native';
import {Button} from '../../src/components/common/Button';
import {Text} from 'react-native';

const Component: React.FC = () => {
  return (
    <Button
      testID="test_button"
      iconLeft={<Text>LeftComponent</Text>}
      iconRight={<Text>RightComponent</Text>}>
      <Text>Button Text</Text>
    </Button>
  );
};

describe('Button', () => {
  test('Left Icon should be visible', async () => {
    const {findByText} = render(<Component />);
    expect(await findByText('LeftComponent')).toBeTruthy();
  });

  test('Right Icon should be visible', async () => {
    const {findByText} = render(<Component />);
    expect(await findByText('RightComponent')).toBeTruthy();
  });

  it('Should render componets passed to it as children', () => {
    const {getByText} = render(<Component />);

    expect(getByText('Button Text')).toBeTruthy();
  });
});
