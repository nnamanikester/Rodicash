import React from 'react';
import * as UI from '@/components/common';
import {Image, StatusBar, Switch} from 'react-native';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import SVG from '@/components/SVG';
import LinearGradient from 'react-native-linear-gradient';
import PercentageCircle from '@/components/PercentageCircle';

interface MoreScreenProps {
  navigation: any;
}

const MoreScreen: React.FC<MoreScreenProps> = () => {
  const {colors, isDark, setScheme} = useTheme();
  const [biometrics, setBiometrics] = React.useState<boolean>(true);
  const [isProfileComplete, setIsProfileComplete] =
    React.useState<boolean>(true);

  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />
      <UI.Layout>
        <UI.Block>
          <UI.Text h1>More</UI.Text>
        </UI.Block>

        <UI.Block center>
          <UI.Block middle>
            <Image
              style={styles.profileImage}
              source={{uri: 'https://placekitten.com/200'}}
            />
            <SVG name="camera" containerStyle={styles.cameraIcon} />
          </UI.Block>
          <UI.Text body>Frankpeter Ani</UI.Text>
          <UI.Text color={colors.gray2}>@Kester123</UI.Text>
        </UI.Block>

        <UI.Spacer />

        <UI.Block>
          <UI.Text color={colors.gray2}>Profile</UI.Text>
          <UI.Spacer />
        </UI.Block>

        <UI.Block>
          {isProfileComplete ? (
            <UI.Clickable>
              <LinearGradient
                style={styles.profileCard}
                colors={[colors.orange1, colors.orange2]}>
                <UI.Block row>
                  <UI.Block width="auto">
                    <PercentageCircle
                      radius={35}
                      percent={70}
                      color={colors.white}
                      borderWidth={10}
                      innerColor={'#E9B84C'}
                      bgcolor={`${colors.white}50`}>
                      <UI.Text body color={colors.white}>
                        77%
                      </UI.Text>
                    </PercentageCircle>
                  </UI.Block>

                  <UI.Spacer />

                  <UI.Block width="auto" style={{paddingRight: 40}}>
                    <UI.Text body color={colors.white}>
                      Personal Info
                    </UI.Text>
                    <UI.Text note color={colors.white}>
                      Complete your profile to enjoy all experiences
                    </UI.Text>
                  </UI.Block>
                </UI.Block>

                <UI.Spacer />

                <UI.Button
                  white
                  onClick={setIsProfileComplete.bind(null, true)}>
                  <UI.Text bold>Complete your profile</UI.Text>
                </UI.Button>
              </LinearGradient>
            </UI.Clickable>
          ) : (
            <UI.Clickable>
              <UI.Block row justify="space-between" center>
                <UI.Block width="auto" row center>
                  <UI.Block
                    width="auto"
                    style={styles.leftIcon}
                    backgroundColor={`${colors.primary}44`}>
                    <SVG
                      size={24}
                      name="profile"
                      color={colors.green1}
                      fill={colors.green2}
                    />
                  </UI.Block>
                  <UI.Spacer />
                  <UI.Text body>Personal Info</UI.Text>
                </UI.Block>
                <SVG size={20} name="chevron-right" />
              </UI.Block>
            </UI.Clickable>
          )}
        </UI.Block>

        <UI.Spacer />

        <UI.Block>
          <UI.Text color={colors.gray2}>Security</UI.Text>
          <UI.Spacer />
        </UI.Block>

        <UI.Block>
          <UI.Clickable>
            <UI.Block row justify="space-between" center>
              <UI.Block width="auto" row center>
                <UI.Block
                  width="auto"
                  style={styles.leftIcon}
                  backgroundColor={`${colors.primary}44`}>
                  <SVG
                    size={24}
                    name="shield"
                    color={colors.green1}
                    fill={colors.green2}
                  />
                </UI.Block>
                <UI.Spacer />
                <UI.Text body>Transaction PIN</UI.Text>
              </UI.Block>
              <SVG size={20} name="chevron-right" />
            </UI.Block>
          </UI.Clickable>

          <UI.Spacer />

          <UI.Block row justify="space-between" center>
            <UI.Block width="auto" row center>
              <UI.Block
                width="auto"
                style={styles.leftIcon}
                backgroundColor={`${colors.primary}44`}>
                <SVG
                  size={24}
                  name="biometrics"
                  color={colors.green1}
                  fill={colors.green2}
                />
              </UI.Block>
              <UI.Spacer />
              <UI.Text body>Enable Biometrics</UI.Text>
            </UI.Block>
            <Switch
              value={biometrics}
              onValueChange={setBiometrics}
              thumbColor={colors.white}
              trackColor={{false: colors.gray3, true: colors.secondary}}
            />
          </UI.Block>

          <UI.Spacer />

          <UI.Clickable>
            <UI.Block row justify="space-between" center>
              <UI.Block width="auto" row center>
                <UI.Block
                  width="auto"
                  style={styles.leftIcon}
                  backgroundColor={`${colors.primary}44`}>
                  <SVG
                    size={24}
                    name="card"
                    color={colors.green1}
                    fill={colors.green2}
                  />
                </UI.Block>
                <UI.Spacer />
                <UI.Text body>Saved Cards</UI.Text>
              </UI.Block>
              <SVG size={20} name="chevron-right" />
            </UI.Block>
          </UI.Clickable>

          <UI.Spacer />

          <UI.Clickable>
            <UI.Block row justify="space-between" center>
              <UI.Block width="auto" row center>
                <UI.Block
                  width="auto"
                  style={styles.leftIcon}
                  backgroundColor={`${colors.primary}44`}>
                  <SVG
                    size={24}
                    name="shaded-lock"
                    color={colors.green1}
                    fill={colors.green2}
                  />
                </UI.Block>
                <UI.Spacer />
                <UI.Text body>Reset Password</UI.Text>
              </UI.Block>
              <SVG size={20} name="chevron-right" />
            </UI.Block>
          </UI.Clickable>
        </UI.Block>

        <UI.Spacer />

        <UI.Block>
          <UI.Text color={colors.gray2}>Appearance</UI.Text>
          <UI.Spacer />
        </UI.Block>

        <UI.Block>
          <UI.Block row justify="space-between" center>
            <UI.Block width="auto" row center>
              <UI.Block
                width="auto"
                style={styles.leftIcon}
                backgroundColor={`${colors.primary}44`}>
                <SVG
                  size={24}
                  name="half-moon"
                  color={colors.green1}
                  fill={colors.green2}
                />
              </UI.Block>
              <UI.Spacer />
              <UI.Text body>Dark Theme</UI.Text>
            </UI.Block>
            <Switch
              value={isDark}
              onValueChange={val => setScheme(val ? 'dark' : 'light')}
              thumbColor={colors.white}
              trackColor={{false: colors.gray3, true: colors.secondary}}
            />
          </UI.Block>
        </UI.Block>

        <UI.Spacer />

        <UI.Block>
          <UI.Text color={colors.gray2}>Report</UI.Text>
          <UI.Spacer />
        </UI.Block>

        <UI.Block>
          <UI.Clickable>
            <UI.Block row justify="space-between" center>
              <UI.Block width="auto" row center>
                <UI.Block
                  width="auto"
                  style={styles.leftIcon}
                  backgroundColor={`${colors.primary}44`}>
                  <SVG
                    size={24}
                    name="report"
                    color={colors.green1}
                    fill={colors.green2}
                  />
                </UI.Block>
                <UI.Spacer />
                <UI.Text body>Download Transaction Reports</UI.Text>
              </UI.Block>
              <SVG size={20} name="chevron-right" />
            </UI.Block>
          </UI.Clickable>
        </UI.Block>

        <UI.Spacer />

        <UI.Block>
          <UI.Text color={colors.gray2}>Report</UI.Text>
          <UI.Spacer />
        </UI.Block>

        <UI.Block>
          <UI.Clickable>
            <UI.Block row justify="space-between" center>
              <UI.Block width="auto" row center>
                <UI.Block
                  width="auto"
                  style={styles.leftIcon}
                  backgroundColor={`${colors.primary}44`}>
                  <SVG
                    size={24}
                    name="double-heart"
                    color={colors.green1}
                    fill={colors.green2}
                  />
                </UI.Block>
                <UI.Spacer />
                <UI.Text body>Refer and Earn</UI.Text>
              </UI.Block>
              <SVG size={20} name="chevron-right" />
            </UI.Block>
          </UI.Clickable>

          <UI.Spacer />

          <UI.Clickable>
            <UI.Block row justify="space-between" center>
              <UI.Block width="auto" row center>
                <UI.Block
                  width="auto"
                  style={styles.leftIcon}
                  backgroundColor={`${colors.primary}44`}>
                  <SVG
                    size={24}
                    name="info"
                    color={colors.green1}
                    fill={colors.green2}
                  />
                </UI.Block>
                <UI.Spacer />
                <UI.Text body>Help</UI.Text>
              </UI.Block>
              <SVG size={20} name="chevron-right" />
            </UI.Block>
          </UI.Clickable>

          <UI.Spacer />

          <UI.Clickable>
            <UI.Block row justify="space-between" center>
              <UI.Block width="auto" row center>
                <UI.Block
                  width="auto"
                  style={styles.leftIcon}
                  backgroundColor={`${colors.primary}44`}>
                  <SVG
                    size={24}
                    name="doc"
                    color={colors.green1}
                    fill={colors.green2}
                  />
                </UI.Block>
                <UI.Spacer />
                <UI.Text body>{'Terms & Conditions'}</UI.Text>
              </UI.Block>
              <SVG size={20} name="chevron-right" />
            </UI.Block>
          </UI.Clickable>

          <UI.Spacer />

          <UI.Clickable>
            <UI.Block row justify="space-between" center>
              <UI.Block width="auto" row center>
                <UI.Block
                  width="auto"
                  style={styles.leftIcon}
                  backgroundColor={`${colors.primary}44`}>
                  <SVG
                    size={24}
                    name="doc"
                    color={colors.green1}
                    fill={colors.green2}
                  />
                </UI.Block>
                <UI.Spacer />
                <UI.Text body>Privacy Policy</UI.Text>
              </UI.Block>
              <SVG size={20} name="chevron-right" />
            </UI.Block>
          </UI.Clickable>
        </UI.Block>

        <UI.Spacer large />

        <UI.Clickable>
          <UI.Block
            backgroundColor={`${colors.primary}44`}
            row
            style={[styles.chatBox, {borderColor: colors.primary}]}>
            <UI.Block width="auto">
              <SVG size={36} name="chat-with-us" />
            </UI.Block>
            <UI.Spacer />
            <UI.Block>
              <UI.Text>Chat With us</UI.Text>
              <UI.Text color={colors.gray1} note>
                Have any difficulties? we respond asap.
              </UI.Text>
            </UI.Block>
          </UI.Block>
        </UI.Clickable>

        <UI.Spacer medium />

        <UI.Block>
          <UI.Button colors={[colors.warning, colors.warning]}>
            <UI.Text bold color={colors.white}>
              LOGOUT
            </UI.Text>
          </UI.Button>
        </UI.Block>

        <UI.Spacer large />
      </UI.Layout>
    </>
  );
};

export default MoreScreen;