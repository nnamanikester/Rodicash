import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import AppStatusBar from '@/components/AppStatusBar';

interface ArticleScreenProps {
  navigation: any;
  route: any;
}

const ArticleScreen: React.FC<ArticleScreenProps> = ({navigation, route}) => {
  const {colors} = useTheme();
  const {title} = route.params;

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
        <UI.Clickable testID="back_button" onClick={() => navigation.goBack()}>
          <UI.Block row center width="auto">
            <UI.Icon name="chevron-back-circle-outline" />
            <UI.Spacer size={2} />
            <UI.Text color={colors.gray2}>Back</UI.Text>
          </UI.Block>
        </UI.Clickable>
      </UI.Block>

      <UI.Layout>
        <UI.Text h1>{title}</UI.Text>
        <UI.Spacer large />
      </UI.Layout>
    </>
  );
};

export default ArticleScreen;
