import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import SVG from '@/components/SVG';
import AppStatusBar from '@/components/AppStatusBar';

const isIOS = Platform.OS === 'ios';

interface TransactionReportScreenProps {
  navigation: any;
}

const TransactionReportScreen: React.FC<TransactionReportScreenProps> = ({
  navigation,
}) => {
  const {colors} = useTheme();

  const [startDate, setStartDate] = React.useState<Date>(new Date());
  const [endDate, setEndDate] = React.useState<Date>(new Date());
  const [showStartDatePicker, setShowStartDatePicker] =
    React.useState<boolean>(false);
  const [showEndDatePicker, setShowEndDatePicker] =
    React.useState<boolean>(false);

  const onChangeStartDate = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
  };

  const onChangeEndDate = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(Platform.OS === 'ios');
    setEndDate(currentDate);
  };

  const submitData = (): void => {
    navigation.goBack();
  };

  return (
    <>
      <AppStatusBar
        barStyle="dark-content"
        backgroundColor={colors.background}
      />

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
        <UI.Text h1>Download Statement</UI.Text>
        <UI.Spacer medium />

        <UI.Block>
          <UI.Block>
            <UI.Text body>Start Date</UI.Text>

            {showStartDatePicker && (
              <DateTimePicker
                value={startDate}
                mode="date"
                display={isIOS ? 'inline' : 'calendar'}
                onChange={onChangeStartDate}
              />
            )}
            <UI.TextInput
              value={startDate.toLocaleDateString()}
              onFocus={() => setShowStartDatePicker(true)}
              placeholder="dd/mm/yyyy"
              iconRight={
                <UI.Clickable onClick={() => setShowStartDatePicker(true)}>
                  <UI.Block
                    backgroundColor={colors.white}
                    style={[styles.calendarBox, {borderColor: colors.gray3}]}>
                    <SVG size={18} name="calendar" />
                  </UI.Block>
                </UI.Clickable>
              }
            />
          </UI.Block>

          <UI.Spacer />

          <UI.Block>
            <UI.Text body>End Date</UI.Text>
            {showEndDatePicker && (
              <DateTimePicker
                value={endDate}
                mode="date"
                display={isIOS ? 'inline' : 'calendar'}
                onChange={onChangeEndDate}
              />
            )}
            <UI.TextInput
              value={endDate.toLocaleDateString()}
              onFocus={() => setShowEndDatePicker(true)}
              placeholder="dd/mm/yyyy"
              iconRight={
                <UI.Clickable onClick={() => setShowEndDatePicker(true)}>
                  <UI.Block
                    backgroundColor={colors.white}
                    style={[styles.calendarBox, {borderColor: colors.gray3}]}>
                    <SVG size={18} name="calendar" />
                  </UI.Block>
                </UI.Clickable>
              }
            />
          </UI.Block>

          <UI.Spacer />
        </UI.Block>
      </UI.Layout>

      <UI.Block backgroundColor={colors.background} style={styles.footer}>
        <UI.Button primary onClick={submitData}>
          <UI.Text color={colors.white} bold>
            DOWNLOAD
          </UI.Text>
        </UI.Button>

        <UI.Spacer medium />
      </UI.Block>
    </>
  );
};

export default TransactionReportScreen;
