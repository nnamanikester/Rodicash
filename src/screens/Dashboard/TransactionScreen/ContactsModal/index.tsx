import React from 'react';
import {FlatList, Image, Modal} from 'react-native';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from '../styles';
import SVG from '@/components/SVG';
import {widthPercentageToDP as wd} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import AppStatusBar from '@/components/AppStatusBar';

interface ContactsModalProps {
  show: boolean;
  onSelectContact: (email: string) => void;
  onClose: () => void;
}

const ContactsModal: React.FC<ContactsModalProps> = ({
  onSelectContact,
  onClose,
  show,
}) => {
  const {colors} = useTheme();

  const DATA = React.useMemo<
    {key: string; image: string; name: string; email: string}[]
  >(
    () => [
      {
        key: '1',
        image: 'https://placekitten.com/200',
        name: 'John Kester',
        email: 'nnamanikester@gmail.com',
      },
      {
        key: '2',
        image: 'https://placekitten.com/200',
        name: 'Ronald Richards',
        email: 'Ronaldrichards@mail.com',
      },
      {
        key: '3',
        image: 'https://placekitten.com/200',
        name: 'Devon Lane',
        email: 'Devonlane@mail.com',
      },
      {
        key: '4',
        image: 'https://placekitten.com/200',
        name: 'Ralph Edwards',
        email: 'Ralphedwards@mail.com',
      },
      {
        key: '5',
        image: 'https://placekitten.com/200',
        name: 'Wade Warren',
        email: 'Wadewarren@mail.com',
      },
      {
        key: '6',
        image: 'https://placekitten.com/200',
        name: 'Annette Black',
        email: 'Annetteblack@mail.com',
      },
      {
        key: '7',
        image: 'https://placekitten.com/200',
        name: 'Jane Cooper',
        email: 'Janecooper@mail.com',
      },
      {
        key: '8',
        image: 'https://placekitten.com/200',
        name: 'Dianne Russell',
        email: 'Diannerussell@mail.com',
      },
      {
        key: '9',
        image: 'https://placekitten.com/200',
        name: 'Brooklyn Simmons',
        email: 'Brooklynsimmons@mail.com',
      },
      {
        key: '10',
        image: 'https://placekitten.com/200',
        name: 'Marvin McKinney',
        email: 'MarvinmcKinney@mail.com',
      },
    ],
    [],
  );

  const onSelect = (email: string): void => {
    onSelectContact(email);
    return onClose();
  };

  return (
    <>
      <AppStatusBar
        backgroundColor={colors.background}
        barStyle="dark-content"
      />

      <Modal animationType="slide" visible={show}>
        <UI.Block
          testID="back_button"
          center
          style={styles.modalHeader}
          backgroundColor={colors.background}
          row>
          <UI.Clickable onClick={onClose}>
            <UI.Block row center width="auto">
              <UI.Icon name="chevron-back-circle-outline" />
              <UI.Spacer size={2} />
              <UI.Text color={colors.gray2}>Back</UI.Text>
            </UI.Block>
          </UI.Clickable>
        </UI.Block>

        <UI.Spacer medium />

        <UI.Block style={{paddingHorizontal: wd('4')}}>
          <UI.Text h2>Select Contact</UI.Text>
          <UI.Spacer />

          <UI.Block>
            <UI.TextInput
              iconLeft={
                <SVG
                  name="search"
                  containerStyle={{
                    width: 20,
                    height: 20,
                  }}
                />
              }
              type="outline"
              placeholder="Search your contacts"
              inputStyle={{...styles.searchForm, borderColor: colors.gray3}}
            />
          </UI.Block>

          <UI.Spacer medium />

          <UI.Clickable>
            <UI.Block row justify="space-between">
              <UI.Block row width="auto">
                <LinearGradient
                  style={styles.inviteAvatar}
                  colors={[colors.orange1, colors.orange2]}>
                  <SVG name="share-invite" color={colors.white} />
                </LinearGradient>
                <UI.Spacer />
                <UI.Block width="auto">
                  <UI.Text bold>Send invite to friends</UI.Text>
                  <UI.Text note color={colors.gray2}>
                    Invite your friends to enjoy Rodi cash too.
                  </UI.Text>
                </UI.Block>
              </UI.Block>
              <UI.Block center width="auto">
                <SVG name="chevron-right" />
              </UI.Block>
            </UI.Block>
          </UI.Clickable>
        </UI.Block>

        <UI.Spacer medium />

        <UI.Block style={[styles.divider, {borderColor: colors.gray4}]} />

        <UI.Spacer medium />

        <UI.Layout noScroll>
          <UI.Text color={colors.gray2} note>
            Your contacts
          </UI.Text>

          <UI.Spacer />

          <FlatList
            showsVerticalScrollIndicator={false}
            data={DATA}
            keyExtractor={(item, i) => item.key + i}
            renderItem={({item: {email, name, image}}) => (
              <>
                <UI.Clickable onClick={onSelect.bind(null, email)}>
                  <UI.Block row width="auto">
                    <UI.Block width="auto">
                      <Image
                        source={{uri: image}}
                        style={styles.contactImage}
                      />
                    </UI.Block>
                    <UI.Spacer />
                    <UI.Block width="auto">
                      <UI.Text bold>{name}</UI.Text>
                      <UI.Text note color={colors.gray2}>
                        {email}
                      </UI.Text>
                    </UI.Block>
                  </UI.Block>
                </UI.Clickable>
                <UI.Spacer />
              </>
            )}
          />
        </UI.Layout>
      </Modal>
    </>
  );
};

export default ContactsModal;
