import React from 'react';
import * as UI from '@/components/common';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import RNLocation from 'react-native-location';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Alert, Image, StatusBar} from 'react-native';
import SVG from '@/components/SVG';
import getDirections from 'react-native-google-maps-directions';

RNLocation.configure({
  distanceFilter: 5.0,
  desiredAccuracy: {
    android: 'balancedPowerAccuracy',
    ios: 'best',
  },
  androidProvider: 'auto',
  interval: 3000,
});

interface MapScreenProps {}

type NearbyMerchatType = {
  name: string;
  address: string;
  coordinate: {
    latitude: number;
    longitude: number;
  };
};

const MapScreen: React.FC<MapScreenProps> = () => {
  const {colors, isDark} = useTheme();
  const mapViewRef = React.useRef<MapView>(null);
  const [coords, setCoords] = React.useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 6.401957,
    longitude: 7.4842913,
  });

  const nearbyMerchants = React.useMemo<NearbyMerchatType[]>(
    () => [
      {
        name: 'Kester POS',
        address: '112 Agbani road, Enugu',
        coordinate: {
          latitude: 7.513585276901722,
          longitude: 6.472076409245541,
        },
      },
      {
        name: 'Kester POS',
        address: '100 Agbani road, Enugu',
        coordinate: {
          latitude: 6.628580498314184,
          longitude: 7.543932460248469,
        },
      },
      {
        name: 'Kester POS',
        address: '117 Agbani road, Enugu',
        coordinate: {
          latitude: 6.741078771169337,
          longitude: 7.478566691279411,
        },
      },
      {
        name: 'Kester POS',
        address: '132 Agbani road, Enugu',
        coordinate: {
          latitude: 6.903688405523018,
          longitude: 7.487969174981117,
        },
      },
    ],
    [],
  );

  React.useEffect(() => {
    RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'fine', // or 'fine'
      },
    })
      .then((hasPermission: boolean) => {
        if (hasPermission) {
          getLocation();
        } else {
          Alert.alert(
            'Location Permission',
            'We need to know your current location. We require access to your location to help you find merchants around you easily.',
            [
              {
                text: 'CONTINUE',
                onPress: requestPermission,
              },
              {
                text: 'CANCEL',
                style: 'cancel',
              },
            ],
          );
        }
      })
      .catch(e => {
        console.log('Rodi DEBUG: ', 'checkPermission(e) ', e);
      });
  }, []);

  const requestPermission = async (): Promise<void> => {
    try {
      await RNLocation.requestPermission({
        ios: 'whenInUse', // or 'always'
        android: {
          detail: 'fine', // or 'fine'
          rationale: {
            title: 'We need to access your location',
            message: 'We use your location to help you find Merchants easily',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        },
      });
    } catch (e) {
      console.log('RODI DEBUG: ', 'requestPermision(err) ', e);
    }
  };

  const getLocation = async (): Promise<void> => {
    try {
      const res: any = await RNLocation.getLatestLocation({
        timeout: 60000,
      });
      setCoords({latitude: res.latitude, longitude: res.longitude});
    } catch (e) {
      console.log('RODI DEBUG: ', 'getLocation(err) ', e);
    }
  };

  const onLocationChange = (event: any) => {
    setCoords(event.nativeEvent.coordinate);
  };

  const handleGetDirections = () => {
    const data = {
      source: {
        latitude: -33.8356372,
        longitude: 18.6947617,
      },
      destination: {
        latitude: -33.8600024,
        longitude: 18.697459,
      },
      params: [
        {
          key: 'travelmode',
          value: 'driving', // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: 'dir_action',
          value: 'navigate', // this instantly initializes navigation using the given travel mode
        },
      ],
    };

    getDirections(data);
  };

  return (
    <>
      <StatusBar backgroundColor={colors.background} barStyle="dark-content" />

      <UI.Block flex backgroundColor={colors.background}>
        <MapView
          ref={mapViewRef}
          provider={PROVIDER_GOOGLE}
          style={styles.mapView}
          showsUserLocation
          userLocationCalloutEnabled
          showsTraffic
          loadingEnabled
          loadingIndicatorColor={colors.secondary}
          loadingBackgroundColor={colors.background}
          onUserLocationChange={onLocationChange}
          userInterfaceStyle={isDark ? 'dark' : 'light'}
          initialRegion={{
            ...coords,
            latitudeDelta: 0.009,
            longitudeDelta: 0.007,
          }}>
          {nearbyMerchants.length &&
            nearbyMerchants.map((merchant, i) => (
              <Marker
                key={merchant.name + i}
                // onDragEnd={({nativeEvent}) => {
                //   setCoords(nativeEvent.coordinate);
                // }}
                onPress={handleGetDirections}
                title={merchant.name}
                description={merchant.address}
                coordinate={merchant.coordinate}
                anchor={{x: 0.5, y: 0.5}}>
                {isDark ? (
                  <Image
                    style={styles.mapMarker}
                    source={require('../../../../assets/images/icon-white.png')}
                  />
                ) : (
                  <Image
                    style={styles.mapMarker}
                    source={require('../../../../assets/images/icon.png')}
                  />
                )}
              </Marker>
            ))}
        </MapView>
        <LinearGradient
          colors={[colors.background, colors.transparent]}
          style={styles.header}>
          <UI.Text h1>Map</UI.Text>

          <UI.Spacer size={15} />

          <UI.Clickable>
            <UI.Block
              style={[styles.search, {borderColor: colors.gray3}]}
              backgroundColor={colors.background}
              row
              center>
              <SVG size={20} name="search" />
              <UI.Spacer />
              <UI.Text color={colors.gray2}>
                Search Merchants, locations...
              </UI.Text>
            </UI.Block>
          </UI.Clickable>
        </LinearGradient>
      </UI.Block>
    </>
  );
};

export default MapScreen;
