import * as React from 'react';
import {render} from '@testing-library/react-native';
import {Block} from '.';
import {Text} from 'react-native';

describe('Block', () => {
  const component = (
    <Block right>
      <Text>Testing Block Component 1</Text>
      <Text>Testing Block Component 2</Text>
    </Block>
  );

  it('Should render the children passed to it', async () => {
    const {findByText} = render(component);
    const firstText = await findByText('Testing Block Component 1');
    const secondText = await findByText('Testing Block Component 2');

    expect(firstText).toBeTruthy();
    expect(secondText).toBeTruthy();
  });
});
