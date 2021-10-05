import React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import Collapsible from 'react-native-collapsible';
import Timeline from 'react-native-timeline-flatlist';
import styles from './styles';

interface HelpProps {}

const Help: React.FC<HelpProps> = () => {
  const {colors} = useTheme();
  const [accordion, setAccordion] = React.useState<
    'bank' | 'card' | 'crypto' | null
  >(null);

  const bankSteps = React.useMemo(
    () => [
      {
        title: 'Proceed to the bank ',
        icon: (
          <UI.Text color={colors.white} bold>
            1
          </UI.Text>
        ),
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: (
          <UI.Text color={colors.white} bold>
            2
          </UI.Text>
        ),
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetur',
        icon: (
          <UI.Text color={colors.white} bold>
            3
          </UI.Text>
        ),
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetur',
        icon: (
          <UI.Text color={colors.white} bold>
            4
          </UI.Text>
        ),
      },
    ],
    [],
  );
  const cardSteps = React.useMemo(
    () => [
      {
        title: 'Proceed to the bank ',
        icon: (
          <UI.Text color={colors.white} bold>
            1
          </UI.Text>
        ),
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        icon: (
          <UI.Text color={colors.white} bold>
            2
          </UI.Text>
        ),
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetur',
        icon: (
          <UI.Text color={colors.white} bold>
            3
          </UI.Text>
        ),
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetur',
        icon: (
          <UI.Text color={colors.white} bold>
            4
          </UI.Text>
        ),
      },
    ],
    [],
  );

  const onSetAccordion = (value: 'bank' | 'card' | 'crypto'): void => {
    if (accordion === value) {
      return setAccordion(null);
    }
    setAccordion(value);
  };

  return (
    <UI.Block>
      <UI.Text h1>Read Instruction</UI.Text>
      <UI.Text color={colors.gray2}>
        A step by step guide on how to add money to your wallet.
      </UI.Text>

      <UI.Spacer />

      <UI.Block>
        <UI.Clickable onClick={onSetAccordion.bind(null, 'bank')}>
          <UI.Block row center justify="space-between">
            <UI.Text body size={15} style={{fontFamily: 'Gordita-Medium'}}>
              Using your Bank Mobile App
            </UI.Text>

            <UI.Icon size={20} name="chevron-down" color={colors.primary} />
          </UI.Block>

          <UI.Spacer medium />
        </UI.Clickable>

        <Collapsible collapsed={accordion !== 'bank'}>
          <Timeline
            options={{
              listKey: 'bank',
            }}
            data={bankSteps}
            lineColor={colors.primary}
            showTime={false}
            innerCircle="icon"
            circleColor={colors.secondary}
            circleSize={25}
            titleStyle={[styles.timelineTitle, {color: colors.gray1}]}
          />
        </Collapsible>
      </UI.Block>

      <UI.Spacer medium />
      <UI.Block style={[styles.divider, {borderColor: colors.gray3}]} />
      <UI.Spacer medium />

      <UI.Block>
        <UI.Clickable onClick={onSetAccordion.bind(null, 'card')}>
          <UI.Block row center justify="space-between">
            <UI.Text body size={15} style={{fontFamily: 'Gordita-Medium'}}>
              Using a Debit Card
            </UI.Text>

            <UI.Icon size={20} name="chevron-down" color={colors.primary} />
          </UI.Block>

          <UI.Spacer medium />
        </UI.Clickable>

        <Collapsible collapsed={accordion !== 'card'}>
          <Timeline
            options={{
              listKey: 'card',
            }}
            data={cardSteps}
            lineColor={colors.primary}
            showTime={false}
            innerCircle="icon"
            circleColor={colors.secondary}
            circleSize={25}
            titleStyle={[styles.timelineTitle, {color: colors.gray1}]}
          />
        </Collapsible>
      </UI.Block>
    </UI.Block>
  );
};

export default Help;
