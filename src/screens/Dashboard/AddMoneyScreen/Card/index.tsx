import React from 'react';
import * as UI from '@/components/common';
import {Zoom} from '@/animations';
import {useTheme} from '@/contexts/ThemeContext';
import {Switch} from 'react-native';
import SVG from '@/components/SVG';
import styles from './styles';

interface CardProps {}

const Card: React.FC<CardProps> = () => {
  const {colors} = useTheme();
  const [amount, setAmount] = React.useState<string>('');
  const [name, setName] = React.useState<string>('');
  const [cardNumber, setCardNumber] = React.useState<string>('');
  const [expDate, setExpDate] = React.useState<string>('');
  const [CVV, setCVV] = React.useState<string>('');
  const [saveCard, setSaveCard] = React.useState<boolean>(true);

  return (
    <Zoom from={0} to={1} duration={200} style={{flex: 1}}>
      <UI.Block flex center>
        <UI.Spacer medium />

        <UI.Text note color={colors.gray2}>
          Using debit card:
        </UI.Text>

        <UI.Block>
          <UI.Text body>Amount</UI.Text>
          <UI.TextInput
            value={amount}
            onChangeText={setAmount}
            keyboardType="number-pad"
            iconRight={
              <UI.Block>
                <UI.Text color={colors.secondary}>&#8358;</UI.Text>
              </UI.Block>
            }
          />
        </UI.Block>

        <UI.Spacer />

        <UI.Block>
          <UI.Text body>Name on Card</UI.Text>
          <UI.TextInput
            placeholder="e.g: Frankpeter Ani"
            value={name}
            onChangeText={(val: string) => setName(val.toUpperCase())}
          />
        </UI.Block>

        <UI.Spacer />

        <UI.Block>
          <UI.Text body>Card Number</UI.Text>
          <UI.TextInput
            placeholder="e.g: 1234 1234 1234 1234"
            keyboardType="number-pad"
            value={cardNumber}
            onChangeText={setCardNumber}
          />
        </UI.Block>

        <UI.Spacer />

        <UI.Block row justify="space-between">
          <UI.Column size="6" style={{paddingRight: 5}}>
            <UI.Text body>Expiry Date</UI.Text>
            <UI.TextInput
              placeholder="e.g: 01/23"
              keyboardType="number-pad"
              value={expDate}
              onChangeText={setExpDate}
            />
          </UI.Column>
          <UI.Column size="6" style={{paddingLeft: 5}}>
            <UI.Text body>CVV</UI.Text>
            <UI.TextInput
              placeholder="e.g: 123"
              keyboardType="number-pad"
              value={CVV}
              onChangeText={setCVV}
            />
          </UI.Column>
        </UI.Block>

        <UI.Spacer />

        <UI.Block right row center>
          <UI.Text color={colors.gray1} note>
            Save card details
          </UI.Text>
          <UI.Spacer size={3} />
          <Switch
            value={saveCard}
            onValueChange={setSaveCard}
            trackColor={{false: colors.gray3, true: colors.secondary}}
            thumbColor={colors.white}
          />
        </UI.Block>

        <UI.Spacer large />

        <UI.Block row style={[styles.info, {borderColor: colors.gray4}]}>
          <UI.Block width="auto">
            <UI.Spacer />
            <SVG name="shaded-error" color={colors.gray2} />
          </UI.Block>
          <UI.Text color={colors.gray2} size={12}>
            The issuer of your debit card may request that you type in your card
            PIN to validate this transaction. Rodi cash does not have access to
            your card PIN and we do not store this personal information.
          </UI.Text>
        </UI.Block>

        <UI.Spacer large />

        <UI.Block>
          <UI.Button primary>
            <UI.Text color={colors.white} bold>
              CONTINUE
            </UI.Text>
          </UI.Button>
        </UI.Block>

        <UI.Spacer large />
      </UI.Block>
    </Zoom>
  );
};

export default Card;
