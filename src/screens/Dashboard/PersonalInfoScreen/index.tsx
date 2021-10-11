import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {Platform} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {getFilteredCountries, getStates} from 'country-state-picker';
import SVG from '@/components/SVG';
import ErrorMessage from '@/components/ErrorMessage';
import DateTimePicker from '@react-native-community/datetimepicker';
import AppStatusBar from '@/components/AppStatusBar';

const isIOS = Platform.OS === 'ios';

interface PersonalInfoScreenProps {
  navigation: any;
}

const PersonalInfoScreen: React.FC<PersonalInfoScreenProps> = ({
  navigation,
}) => {
  const {colors} = useTheme();

  const [name, setName] = React.useState<string>('');
  const [address, setAddress] = React.useState<string>('');
  const [phone, setPhone] = React.useState<string>('');
  const [country, setCountry] = React.useState<{
    name: string;
    code: string;
    dial_code: string;
  }>({
    name: '',
    code: '',
    dial_code: '',
  });
  const [state, setState] = React.useState<string>('');
  const [dob, setDob] = React.useState<Date>(
    new Date(`01/01/${new Date().getFullYear() - 16}`),
  );
  const [showDatePicker, setShowDatePicker] = React.useState<boolean>(false);

  const [addressError, setAddressError] = React.useState<boolean>(false);
  const [phoneError, setPhoneError] = React.useState<boolean>(false);
  const [nameError, setNameError] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');

  const countries = React.useMemo(() => getFilteredCountries(['ng']), []);
  const states = React.useMemo(() => getStates(country.code), [country]);

  const onChangeDate = (event: Event, selectedDate?: Date) => {
    console.log(selectedDate);
    const currentDate = selectedDate || dob;
    setShowDatePicker(false);
    setDob(currentDate);
  };

  // Validate user entry before sending to backend
  const validateEntry = (): void => {
    setNameError(false);
    setAddressError(false);
    setPhoneError(false);

    if (!name) {
      setNameError(true);
      setError('Name cannot be blank');
      return;
    }
    if (!address) {
      setAddressError(true);
      setError('Please enter a valid address');
      return;
    }
    if (!phone) {
      setPhoneError(true);
      setError('Please enter a valid phone number');
      return;
    }
    submitData();
  };

  const submitData = (): void => {
    navigation.goBack();
  };

  const clearError = (): void => {
    setError('');
    setAddressError(false);
    setPhoneError(false);
    setNameError(false);
  };

  return (
    <>
      <AppStatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      />

      {error.length > 0 && (
        <ErrorMessage onDismiss={clearError} message={error} />
      )}

      <UI.Block
        center
        style={styles.header}
        backgroundColor={colors.background}
        row>
        <UI.Clickable onClick={() => navigation.pop()}>
          <UI.Block row center width="auto">
            <UI.Icon name="chevron-back-circle-outline" />
            <UI.Spacer size={2} />
            <UI.Text color={colors.gray2}>Back</UI.Text>
          </UI.Block>
        </UI.Clickable>
      </UI.Block>

      <UI.Layout>
        <UI.Text h1>Personal Info.</UI.Text>
        <UI.Spacer medium />

        <UI.Block>
          <UI.Block>
            <UI.Text body>Full Name</UI.Text>
            <UI.TextInput
              value={name}
              onChangeText={setName}
              error={nameError}
            />
          </UI.Block>

          <UI.Spacer />

          <UI.Block>
            <UI.Text body>Phone Number</UI.Text>
            <UI.TextInput
              value={phone}
              onChangeText={setPhone}
              error={phoneError}
              keyboardType="phone-pad"
              iconLeft={
                <UI.Block
                  row
                  center
                  backgroundColor={colors.background}
                  style={[styles.countrySelect, {borderColor: colors.gray3}]}>
                  <SVG
                    color={colors.secondary}
                    name="nigerian-flag"
                    containerStyle={{top: 2}}
                  />
                  <UI.Icon size={20} name="chevron-down" />
                </UI.Block>
              }
              inputStyle={{paddingLeft: 80}}
            />
          </UI.Block>

          <UI.Spacer />

          <UI.Block>
            <UI.Text body>Address</UI.Text>
            <UI.TextInput
              value={name}
              onChangeText={setAddress}
              error={addressError}
            />
          </UI.Block>

          <UI.Spacer />

          <UI.Block>
            <UI.Text body>Country</UI.Text>
            <Picker
              mode="dropdown"
              itemStyle={styles.picker}
              style={[styles.picker, {backgroundColor: colors.gray4}]}
              selectedValue={country}
              onValueChange={setCountry}>
              <Picker.Item label="Select Country" value="" />
              {countries.map((c: any) => (
                <Picker.Item key={c.code} label={c.name} value={c} />
              ))}
            </Picker>
          </UI.Block>

          <UI.Spacer />

          <UI.Block>
            <UI.Text body>State</UI.Text>
            <Picker
              mode="dropdown"
              itemStyle={styles.picker}
              style={[styles.picker, {backgroundColor: colors.gray4}]}
              selectedValue={state}
              onValueChange={setState}>
              {states &&
                states.map((s: any) => (
                  <Picker.Item key={s} label={s} value={s} />
                ))}
            </Picker>
          </UI.Block>

          <UI.Spacer />

          <UI.Block>
            <UI.Text body>Date of Birth</UI.Text>
            {showDatePicker && (
              <DateTimePicker
                value={dob}
                maximumDate={new Date(`${new Date().getFullYear() - 16}`)}
                mode="date"
                display={isIOS ? 'inline' : 'calendar'}
                onChange={onChangeDate}
              />
            )}
            <UI.TextInput
              value={dob.toLocaleDateString()}
              onFocus={() => setShowDatePicker(true)}
              placeholder="dd/mm/yyyy"
              iconRight={
                <UI.Clickable onClick={() => setShowDatePicker(true)}>
                  <UI.Block
                    backgroundColor={colors.white}
                    style={[styles.calendarBox, {borderColor: colors.gray3}]}>
                    <SVG size={18} name="calendar" />
                  </UI.Block>
                </UI.Clickable>
              }
            />
          </UI.Block>

          <UI.Spacer large />
        </UI.Block>

        <UI.Spacer large />
      </UI.Layout>

      <UI.Block backgroundColor={colors.background} style={styles.footer}>
        <UI.Button primary onClick={validateEntry}>
          <UI.Text color={colors.white} bold>
            UPDATE
          </UI.Text>
        </UI.Button>

        <UI.Spacer medium />
      </UI.Block>
    </>
  );
};

export default PersonalInfoScreen;
