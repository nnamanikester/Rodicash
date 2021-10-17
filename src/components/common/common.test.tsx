import * as React from 'react';
import {render} from '@testing-library/react-native';
import * as UI from '.';

describe('Common Unit Components', () => {
  it('Should export "Block" component', () => {
    const Block = render(<UI.Block />);
    expect(Block).toMatchSnapshot();
  });

  it('Should export "Button" component', () => {
    const Button = render(<UI.Button />);
    expect(Button).toMatchSnapshot();
  });

  it('Should export "Clickable" component', () => {
    const Clickable = render(<UI.Clickable />);
    expect(Clickable).toMatchSnapshot();
  });

  it('Should export "Column" component', () => {
    const Column = render(<UI.Column />);
    expect(Column).toMatchSnapshot();
  });

  it('Should export "Icon" component', () => {
    const Icon = render(<UI.Icon name="md-menu" />);
    expect(Icon).toMatchSnapshot();
  });

  it('Should export "Layout" component', () => {
    const Layout = render(<UI.Layout />);
    expect(Layout).toMatchSnapshot();
  });

  it('Should export "Link" component', () => {
    const Link = render(<UI.Link />);
    expect(Link).toMatchSnapshot();
  });

  it('Should export "Loading" component', () => {
    const Loading = render(<UI.Loading show={false} />);
    expect(Loading).toMatchSnapshot();
  });

  it('Should export "Row" component', () => {
    const Row = render(<UI.Row />);
    expect(Row).toMatchSnapshot();
  });

  it('Should export "PinInput" component', () => {
    const PinInput = render(<UI.PinInput />);
    expect(PinInput).toMatchSnapshot();
  });

  it('Should export "Spacer" component', () => {
    const Spacer = render(<UI.Spacer />);
    expect(Spacer).toMatchSnapshot();
  });

  it('Should export "Text" component', () => {
    const Text = render(<UI.Text />);
    expect(Text).toMatchSnapshot();
  });

  it('Should export "TextInput" component', () => {
    const TextInput = render(<UI.TextInput />);
    expect(TextInput).toMatchSnapshot();
  });
});
