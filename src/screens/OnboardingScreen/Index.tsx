import * as React from 'react';
import {Image, Platform} from 'react-native';
import Swiper from 'react-native-swiper';
import AnimatedGradient from '@/components/AnimatedGradient';
import {ThemeContext} from '@/contexts/ThemeContext';
import styles from './styles';
import {LIGHT_COLORS} from '@/constants';
import * as UI from '@/components/common';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';
import SVG from '@/components/SVG';
import {Reveal} from '@/animations';
import AppStatusBar from '@/components/AppStatusBar';
import {connect} from 'react-redux';
import {IRootState} from '@/store/reducers';
import {UserType} from '@/store/types';

const isIOS = Platform.OS === 'ios';

interface OnboardingScreenProps {
  navigation: any;
  user: UserType;
}

interface OnboardingScreenState {
  bgColors: [string, string];
  screenType: 'odd' | 'even';
  index: number;
}

class OnboardingScreen extends React.Component<
  OnboardingScreenProps,
  OnboardingScreenState
> {
  static contextType = ThemeContext;
  public swiper: React.Ref<Swiper>;

  constructor(props: OnboardingScreenProps) {
    super(props);
    this.state = {
      bgColors: [LIGHT_COLORS.orange1, LIGHT_COLORS.orange2],
      screenType: 'even',
      index: 0,
    };
    this.swiper = React.createRef();
  }

  changeToOdd = (): void => {
    const {colors} = this.context;
    this.setState({
      bgColors: [colors.green1, colors.green2],
      screenType: 'odd',
    });
  };

  changeToEven = (): void => {
    const {colors} = this.context;
    this.setState({
      bgColors: [colors.orange1, colors.orange2],
      screenType: 'even',
    });
  };

  componentDidMount() {
    const {navigation, user} = this.props;
    const {email, username, isVerified} = user;
    if (email) {
      if (!isVerified) {
        navigation.navigate('EmailVerification');
      } else if (!username) {
        navigation.navigate('Login');
      } else if (username) {
        navigation.replace('Welcome');
      }
    }
  }

  render() {
    const {bgColors, screenType, index} = this.state;
    const {colors} = this.context;
    const {navigation} = this.props;

    const Dot: React.FC = () => {
      return <UI.Block style={[styles.dot, {backgroundColor: colors.gray3}]} />;
    };
    const ActiveDot: React.FC = () => {
      return (
        <UI.Block style={[styles.activeDot, {backgroundColor: colors.white}]} />
      );
    };

    return (
      <>
        <AppStatusBar
          backgroundColor={
            screenType === 'even' ? colors.orange1 : colors.green1
          }
          barStyle={screenType === 'even' ? 'light-content' : 'dark-content'}
        />
        <AnimatedGradient
          style={styles.container}
          colors={bgColors}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <UI.Block flex>
            <SVG
              size={wd('100%')}
              containerStyle={styles.bgLines}
              name="background-lines"
            />
            {index % 2 === 0 && (
              <SVG
                size={wd('100%')}
                containerStyle={styles.illustratinoBg}
                name="illustration-background"
              />
            )}
            <Swiper
              testID="onboarding_swiper"
              loop={false}
              loadMinimal
              loadMinimalSize={0}
              autoplay
              autoplayTimeout={5}
              paginationStyle={styles.dotContainer}
              activeDot={<ActiveDot />}
              dot={<Dot />}
              onIndexChanged={i => {
                this.setState({index: i});
                if (i % 2 === 0) {
                  this.changeToEven();
                } else {
                  this.changeToOdd();
                }
              }}
              ref={this.swiper}
              height={hd('100%')}>
              <UI.Block style={styles.swipe}>
                <Reveal duration={1000} from={0} to={1}>
                  <UI.Block center style={styles.illustrationContainer}>
                    <Image
                      style={{width: wd('80%'), top: 10, left: 10}}
                      source={require('../../../assets/images/card-bundle-illustration.png')}
                    />
                  </UI.Block>
                </Reveal>
                <UI.Spacer large />
                <Reveal duration={1500} from={0} to={1}>
                  <UI.Block style={styles.content}>
                    <UI.Text
                      color={colors.white}
                      h1
                      style={{textAlign: 'center'}}>
                      The easiest way to withdraw cash
                    </UI.Text>

                    <UI.Spacer medium />

                    <UI.Text color={colors.white} style={{textAlign: 'center'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Facilisis pharetra ultrices amet.
                    </UI.Text>
                  </UI.Block>
                </Reveal>
              </UI.Block>

              <UI.Block style={styles.swipe}>
                <Reveal duration={2000} from={0} to={1}>
                  <UI.Block center style={styles.illustrationContainer}>
                    <Image
                      style={{
                        width: isIOS ? hd('32%') : hd('35%'),
                        height: isIOS ? hd('32%') : hd('35%'),
                      }}
                      source={require('../../../assets/images/pointing-phone-illustration.png')}
                    />
                  </UI.Block>
                </Reveal>
                <Reveal duration={1500} from={0} to={1}>
                  <UI.Block style={styles.content}>
                    <UI.Text
                      color={colors.white}
                      h1
                      style={{textAlign: 'center'}}>
                      Collect cash from the ease of your mobile phone
                    </UI.Text>

                    <UI.Spacer medium />

                    <UI.Text color={colors.white} style={{textAlign: 'center'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Facilisis pharetra ultrices amet.
                    </UI.Text>
                  </UI.Block>
                </Reveal>
              </UI.Block>

              <UI.Block style={styles.swipe}>
                <Reveal duration={2000} from={0} to={1}>
                  <UI.Block center style={styles.illustrationContainer}>
                    <Image
                      style={{width: wd('60%'), height: wd('70%')}}
                      source={require('../../../assets/images/atm-machine-illustration.png')}
                    />
                  </UI.Block>
                </Reveal>
                <Reveal duration={1500} from={0} to={1}>
                  <UI.Block style={styles.content}>
                    <UI.Text
                      testID="onboarding_title"
                      color={colors.white}
                      h1
                      style={{textAlign: 'center'}}>
                      Say goodbye to withdraw frustrations
                    </UI.Text>

                    <UI.Spacer medium />

                    <UI.Text color={colors.white} style={{textAlign: 'center'}}>
                      Make cardless withdrawals from the ease of your mobile
                      phone, it’s quick, it’s easy.
                    </UI.Text>
                  </UI.Block>
                </Reveal>
              </UI.Block>

              <UI.Block style={styles.swipe}>
                <Reveal duration={2000} from={0} to={1}>
                  <UI.Block center style={styles.illustrationContainer}>
                    <Image
                      style={{
                        width: isIOS ? hd('32%') : hd('35%'),
                        height: isIOS ? hd('32%') : hd('35%'),
                      }}
                      source={require('../../../assets/images/pressing-one-illustration.png')}
                    />
                  </UI.Block>
                </Reveal>
                <Reveal duration={1500} from={0} to={1}>
                  <UI.Block style={styles.content}>
                    <UI.Text
                      color={colors.white}
                      h1
                      style={{textAlign: 'center'}}>
                      Gift and receive money from your friends
                    </UI.Text>

                    <UI.Spacer medium />

                    <UI.Text color={colors.white} style={{textAlign: 'center'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Facilisis pharetra ultrices amet.
                    </UI.Text>
                  </UI.Block>
                </Reveal>
              </UI.Block>
            </Swiper>

            <UI.Spacer large />

            <UI.Block
              style={{
                paddingHorizontal: wd('4%'),
                position: 'absolute',
                bottom: 0,
              }}>
              <UI.Button
                testID="create_account_button"
                white
                onClick={() => navigation.navigate('Register')}>
                <UI.Text bold>CREATE ACCOUNT</UI.Text>
              </UI.Button>

              <UI.Spacer />

              <UI.Button
                testID="login_button"
                transparent
                onClick={() => navigation.navigate('Login')}>
                <UI.Text color={colors.white} bold>
                  LOGIN
                </UI.Text>
              </UI.Button>

              <UI.Spacer large />
              {isIOS && <UI.Spacer />}
            </UI.Block>
          </UI.Block>
        </AnimatedGradient>
      </>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(OnboardingScreen);
