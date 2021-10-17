import * as React from 'react';
import {render} from '@testing-library/react-native';
import * as UI from '.';

describe('Common Unit Components', () => {
  it('"Block" component should match snapshot', () => {
    const Block = render(<UI.Block />);
    expect(Block).toMatchSnapshot();
  });

  it('"Button" component should match snapshot', () => {
    const Button = render(<UI.Button />);
    expect(Button).toMatchSnapshot();
  });

  it('"Clickable" component should match snapshot', () => {
    const Clickable = render(<UI.Clickable />);
    expect(Clickable).toMatchSnapshot();
  });

  it('"Column" component should match snapshot', () => {
    const Column = render(<UI.Column />);
    expect(Column).toMatchSnapshot();
  });

  it('"Icon" component should match snapshot', () => {
    const Icon = render(<UI.Icon name="md-menu" />);
    expect(Icon).toMatchSnapshot();
  });

  it('"Layout" component should match snapshot', () => {
    const Layout = render(<UI.Layout />);
    expect(Layout).toMatchSnapshot();
  });

  it('"Link" component should match snapshot', () => {
    const Link = render(<UI.Link />);
    expect(Link).toMatchSnapshot();
  });

  it('"Loading" component should match snapshot', () => {
    const Loading = render(<UI.Loading show={false} />);
    expect(Loading).toMatchSnapshot();
  });

  it('"Row" component should match snapshot', () => {
    const Row = render(<UI.Row />);
    expect(Row).toMatchSnapshot();
  });

  it('"PinInput" component should match snapshot', () => {
    const PinInput = render(<UI.PinInput />);
    expect(PinInput).toMatchSnapshot();
  });

  it('"Spacer" component should match snapshot', () => {
    const Spacer = render(<UI.Spacer />);
    expect(Spacer).toMatchSnapshot();
  });

  it('"Text" component should match snapshot', () => {
    const Text = render(<UI.Text />);
    expect(Text).toMatchSnapshot();
  });

  it('"TextInput" component should match snapshot', () => {
    const TextInput = render(<UI.TextInput />);
    expect(TextInput).toMatchSnapshot();
  });
});
