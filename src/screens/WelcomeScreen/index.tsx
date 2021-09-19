import * as React from 'react';
import {Image, StatusBar} from 'react-native';
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

interface WelcomeScreenProps {}

interface WelcomeScreenState {
  bgColors: [string, string];
  screenType: 'odd' | 'even';
  index: number;
}

class WelcomeScreen extends React.Component<
  WelcomeScreenProps,
  WelcomeScreenState
> {
  static contextType = ThemeContext;
  public swiper: React.Ref<Swiper>;

  constructor(props: WelcomeScreenProps) {
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

  render() {
    const {bgColors, screenType, index} = this.state;
    const {colors} = this.context;

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
        <StatusBar
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
              loop={false}
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
              {/* Slide One */}
              <UI.Block flex center>
                <UI.Block center style={styles.illustrationContainer}>
                  <Image
                    style={{width: wd('80%'), top: 30, left: 10}}
                    source={require('../../../assets/images/card-bundle-illustration.png')}
                  />
                </UI.Block>
              </UI.Block>

              {/* Slide Two */}
              <UI.Block flex>
                <UI.Block center style={styles.illustrationContainer}>
                  <Image
                    style={{width: wd('65%'), height: wd('65%')}}
                    source={require('../../../assets/images/pointing-phone-illustration.png')}
                  />
                </UI.Block>
              </UI.Block>

              {/* Slide Three */}
              <UI.Block flex>
                <UI.Block center style={styles.illustrationContainer}>
                  <Image
                    style={{width: wd('60%'), height: wd('70%')}}
                    source={require('../../../assets/images/atm-machine-illustration.png')}
                  />
                </UI.Block>
              </UI.Block>

              {/* Slide FOUR */}
              <UI.Block flex>
                <UI.Block center style={styles.illustrationContainer}>
                  <Image
                    style={{width: wd('65%'), height: wd('65%')}}
                    source={require('../../../assets/images/pressing-one-illustration.png')}
                  />
                </UI.Block>
              </UI.Block>
            </Swiper>

            <UI.Spacer />

            {index === 0 ? (
              <UI.Block center style={{paddingHorizontal: 20}}>
                <UI.Text color={colors.white} h1 style={{textAlign: 'center'}}>
                  The easiest way to withdraw cash
                </UI.Text>

                <UI.Spacer medium />

                <UI.Text color={colors.white} style={{textAlign: 'center'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Facilisis pharetra ultrices amet.
                </UI.Text>
              </UI.Block>
            ) : index === 1 ? (
              <UI.Block center style={{paddingHorizontal: 20}}>
                <UI.Text color={colors.white} h1 style={{textAlign: 'center'}}>
                  Collect cash from the ease of your mobile phone
                </UI.Text>

                <UI.Spacer medium />

                <UI.Text color={colors.white} style={{textAlign: 'center'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Facilisis pharetra ultrices amet.
                </UI.Text>
              </UI.Block>
            ) : index === 2 ? (
              <UI.Block center style={{paddingHorizontal: 20}}>
                <UI.Text color={colors.white} h1 style={{textAlign: 'center'}}>
                  Say goodbye to withdraw frustrations
                </UI.Text>

                <UI.Spacer medium />

                <UI.Text color={colors.white} style={{textAlign: 'center'}}>
                  Make cardless withdrawals from the ease of your mobile phone,
                  it’s quick, it’s easy.
                </UI.Text>
              </UI.Block>
            ) : index === 3 ? (
              <UI.Block center style={{paddingHorizontal: 20}}>
                <UI.Text color={colors.white} h1 style={{textAlign: 'center'}}>
                  Gift and recieve money from your friends
                </UI.Text>

                <UI.Spacer medium />

                <UI.Text color={colors.white} style={{textAlign: 'center'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Facilisis pharetra ultrices amet.
                </UI.Text>
              </UI.Block>
            ) : null}

            <UI.Spacer large />

            <UI.Block style={{paddingHorizontal: 20}}>
              <UI.Button white>
                <UI.Text bold>CREATE ACCOUNT</UI.Text>
              </UI.Button>

              <UI.Spacer />

              <UI.Button transparent>
                <UI.Text color={colors.white} bold>
                  LOGIN
                </UI.Text>
              </UI.Button>
            </UI.Block>

            <UI.Spacer large />
          </UI.Block>
        </AnimatedGradient>
      </>
    );
  }
}

export default WelcomeScreen;
