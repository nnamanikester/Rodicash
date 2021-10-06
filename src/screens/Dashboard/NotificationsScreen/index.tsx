import React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import {SectionList, StatusBar} from 'react-native';
import styles from './styles';
import SVG from '@/components/SVG';
import LinearGradient from 'react-native-linear-gradient';
import TransactionNotification from '@/components/TransactionNotification';

interface NotificationsScreenProps {
  navigation: any;
}

interface NotificationList {
  title: string;
  data: {
    id: string;
    name: string;
    image: string;
    reason: string;
    status: 'waiting' | 'accepted' | 'declined';
    time: string;
  }[];
}

const NotificationsScreen: React.FC<NotificationsScreenProps> = ({
  navigation,
}) => {
  const {colors} = useTheme();
  const [isRefreshing] = React.useState<boolean>(false);

  const DATA: NotificationList[] = [
    {
      title: 'Today',
      data: [
        {
          id: '1',
          name: 'John Kester',
          image: 'https://placekitten.com/100',
          reason: 'Reason your boy something',
          status: 'waiting',
          time: 'Just Now',
        },
        {
          id: '2',
          name: 'Kelvin Umechukwu',
          image: 'https://placekitten.com/120',
          reason: 'Reason your boy something na',
          status: 'declined',
          time: '12:30PM',
        },
      ],
    },
    {
      title: '02/12/2021',
      data: [
        {
          id: '1',
          name: 'John Kester',
          image: 'https://placekitten.com/100',
          reason: 'Reason your boy something',
          status: 'accepted',
          time: '09:43AM',
        },
        {
          id: '2',
          name: 'Kelvin Umechukwu',
          image: 'https://placekitten.com/120',
          reason: 'Reason your boy something na',
          status: 'declined',
          time: '11:43AM',
        },
      ],
    },
  ];

  const renderPromo = () => (
    <UI.Block
      row
      center
      style={[styles.promo]}
      backgroundColor={colors.orange1 + '44'}>
      <LinearGradient
        colors={[colors.orange1, colors.orange2]}
        style={[styles.promoIcon]}>
        <UI.Block
          backgroundColor={colors.warning}
          style={[styles.promoStatus, {borderColor: colors.white}]}
        />
        <SVG name="divider" size={24} color={colors.white} />
      </LinearGradient>

      <UI.Spacer />

      <UI.Block>
        <UI.Text body>Recieve instant cashback </UI.Text>
        <UI.Text note color={colors.gray2}>
          Invite friends and we reward you with cash.
        </UI.Text>
        <UI.Link color={colors.green2}>{'Get Promo >'}</UI.Link>
      </UI.Block>
    </UI.Block>
  );

  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />

      <UI.Block
        center
        style={styles.header}
        backgroundColor={colors.background}
        row>
        <UI.Clickable onClick={() => navigation.goBack()}>
          <UI.Block row center width="auto">
            <UI.Icon name="chevron-back-circle-outline" />
            <UI.Spacer size={2} />
            <UI.Text color={colors.gray2}>Back</UI.Text>
          </UI.Block>
        </UI.Clickable>
      </UI.Block>

      <UI.Layout noScroll>
        <UI.Spacer />

        <UI.Block>
          <UI.Text h1>Notifications</UI.Text>
        </UI.Block>

        <UI.Spacer large />

        <SectionList
          showsVerticalScrollIndicator={false}
          sections={DATA}
          ListHeaderComponent={renderPromo}
          onRefresh={() => {}}
          refreshing={isRefreshing}
          keyExtractor={({id}, index) => id + index}
          renderItem={({item: {name, reason, image, status, time}}) => (
            <TransactionNotification
              status={status}
              name={name}
              reason={reason}
              image={image}
              time={time}
            />
          )}
          renderSectionHeader={({section: {title}}) => (
            <UI.Text style={{marginVertical: 15}} color={colors.gray1}>
              {title}
            </UI.Text>
          )}
        />
      </UI.Layout>
    </>
  );
};

export default NotificationsScreen;
