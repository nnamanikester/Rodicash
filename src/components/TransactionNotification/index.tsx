import {useTheme} from '@/contexts/ThemeContext';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import * as UI from '../common';

interface TransactionNotificationProps {
  status: 'declined' | 'accepted' | 'waiting';
  onDecline?: () => void;
  onAccept?: () => void;
  name: string;
  image?: string;
  reason?: string;
  time?: string;
}

const TransactionNotification: React.FC<TransactionNotificationProps> = ({
  image,
  name,
  reason,
  time,
  status,
  onDecline,
  onAccept,
}) => {
  const {colors} = useTheme();

  return (
    <>
      <UI.Block row>
        <UI.Block width="auto">
          {image ? (
            <Image style={styles.image} source={{uri: image}} />
          ) : (
            <UI.Block>
              <UI.Icon name="person" />
            </UI.Block>
          )}
        </UI.Block>
        <UI.Spacer />
        <UI.Block width="auto">
          <UI.Block row center>
            <UI.Text body>{name}</UI.Text>
            <UI.Spacer size={2} />
            <UI.Text>is requesting cash</UI.Text>
          </UI.Block>
          <UI.Block row width="auto" center>
            <UI.Text color={colors.gray1} bold>
              Reason:
            </UI.Text>
            <UI.Spacer size={2} />
            <UI.Text color={colors.gray1} note>
              "{reason}"
            </UI.Text>
          </UI.Block>
          <UI.Block row center>
            <UI.Icon name="time-outline" color={colors.secondary} size={20} />
            <UI.Spacer size={2} />
            <UI.Text note color={colors.secondary}>
              {time}
            </UI.Text>
          </UI.Block>
        </UI.Block>
      </UI.Block>
      <UI.Block right row>
        {status === 'accepted' ? (
          <UI.Button style={styles.badge} primary>
            <UI.Text note color={colors.white}>
              Accepted
            </UI.Text>
          </UI.Button>
        ) : status === 'declined' ? (
          <UI.Button style={styles.badge} type="disabled">
            <UI.Text note color={colors.white}>
              Declined
            </UI.Text>
          </UI.Button>
        ) : (
          <>
            <UI.Button
              onClick={onDecline}
              style={styles.badge}
              colors={[colors.warning, colors.warning]}>
              <UI.Text note color={colors.white}>
                Decline
              </UI.Text>
            </UI.Button>
            <UI.Spacer />
            <UI.Button onClick={onAccept} style={styles.badge} primary>
              <UI.Text note color={colors.white}>
                Accept
              </UI.Text>
            </UI.Button>
          </>
        )}
      </UI.Block>

      <UI.Spacer medium />
      <UI.Block style={[styles.divider, {borderColor: colors.gray3}]} />
      <UI.Spacer />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginTop: 5,
  },
  divider: {
    borderBottomWidth: 1,
  },
  badge: {
    height: 30,
    width: 80,
  },
});

export default TransactionNotification;
