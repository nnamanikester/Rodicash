import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {TextInput} from '.';
import {Text} from 'react-native';

const Component: React.FC = () => {
  const [value, setValue] = React.useState<string>('');

  return (
    <TextInput
      iconLeft={<Text>LeftComponent</Text>}
      iconRight={<Text>RightComponent</Text>}
      placeholder="example placeholder"
      floatLabel
      value={value}
      onChangeText={setValue}
    />
  );
};

describe('TextInput', () => {
  test('Left Icon should be visible', async () => {
    const {findByText} = render(<Component />);
    expect(await findByText('LeftComponent')).toBeTruthy();
  });

  test('Right Icon should be visible', async () => {
    const {findByText} = render(<Component />);
    expect(await findByText('RightComponent')).toBeTruthy();
  });

  it('Should be able to type into the "TextInput" component', async () => {
    const {getByPlaceholderText, getByDisplayValue} = render(<Component />);
    const textInput = getByPlaceholderText('example placeholder');
    fireEvent.changeText(textInput, 'new value');
    const newValue = await getByDisplayValue('new value');

    expect(newValue).toBeTruthy();
  });

  it('Should show floating label if "TextInpupt" has a value', async () => {
    const {getByPlaceholderText, getByDisplayValue, findByText} = render(
      <Component />,
    );
    const textInput = getByPlaceholderText('example placeholder');

    expect(await getByDisplayValue('')).toBeTruthy();

    fireEvent.changeText(textInput, 'new value');

    expect(await findByText('example placeholder')).toBeDefined();
  });

  it('Should show placeholder as label', async () => {
    const {getByPlaceholderText, findByText} = render(<Component />);
    const textInput = getByPlaceholderText('example placeholder');
    fireEvent.changeText(textInput, 'new value');
    const label = await findByText('example placeholder');

    expect(label.props.children).toBe(textInput.props.placeholder);
  });
});
