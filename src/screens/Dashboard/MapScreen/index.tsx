import React from 'react';
import * as UI from '@/components/common';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';
import SVG from '@/components/SVG';
import getDirections from 'react-native-google-maps-directions';
import AppStatusBar from '@/components/AppStatusBar';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyDsHlsWbHfFyRhRG0kjOwXCaO7OmKVU0wU';

interface MapScreenProps {}

type NearbyMerchatType = {
  name: string;
  address: string;
  image: string;
  phone: string;
  rating: number;
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
    latitude: 7.513585276901722,
    longitude: 6.472076409245541,
  });
  const [selectedMerchant, setSelectedMerchant] =
    React.useState<NearbyMerchatType | null>(null);

  const nearbyMerchants = React.useMemo<NearbyMerchatType[]>(
    () => [
      {
        name: 'Kester POS',
        image: 'https://placekitten.com/200',
        phone: '09083848393',
        rating: 4.3,
        address: '7 Enyeribe Crescent, Upper Meniru, Agbani road, Enugu',
        coordinate: {
          latitude: 7.513585276901722,
          longitude: 6.472076409245541,
        },
      },
      {
        name: 'Frankpeter Ani POS',
        address: '23 Citypark Avenue, Maryland, Indp. Layout, Enugu',
        image: 'https://placekitten.com/100',
        phone: '08037348473',
        rating: 4.0,
        coordinate: {
          latitude: 6.628580498314184,
          longitude: 7.543932460248469,
        },
      },
      {
        name: 'Faraday POS',
        address: '117 Agbani road, Enugu',
        image: 'https://placekitten.com/130',
        phone: '07036273637',
        rating: 3.5,
        coordinate: {
          latitude: 6.741078771169337,
          longitude: 7.478566691279411,
        },
      },
      {
        name: 'Nwagu Fizzy POS',
        address: 'Ugwuaji Nike Ogui, Newlayout, Enugu',
        image: 'https://placekitten.com/150',
        phone: '09123748374',
        rating: 4.8,
        coordinate: {
          latitude: 6.903688405523018,
          longitude: 7.487969174981117,
        },
      },
    ],
    [],
  );

  const onLocationChange = (event: any) => {
    setCoords(event.nativeEvent.coordinate);
  };

  const handleGetDirections = (merch: NearbyMerchatType) => {
    const data = {
      source: coords,
      destination: merch.coordinate,
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
      <AppStatusBar
        backgroundColor={colors.background}
        barStyle="dark-content"
      />

      <UI.Block flex backgroundColor={colors.background}>
        <MapView
          ref={mapViewRef}
          provider={PROVIDER_GOOGLE}
          style={styles.mapView}
          showsUserLocation
          followsUserLocation
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
                onPress={() => setSelectedMerchant(merchant)}
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
          {selectedMerchant && (
            <MapViewDirections
              origin={coords}
              destination={selectedMerchant.coordinate}
              apikey={GOOGLE_MAPS_APIKEY}
              precision="high"
              timePrecision="high"
              mode="DRIVING"
              optimizeWaypoints
              strokeWidth={3}
              strokeColor={colors.primary}
              onError={e => console.log(e)}
            />
          )}
        </MapView>
        <>
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

          {selectedMerchant && (
            <UI.Block
              backgroundColor={colors.background}
              style={styles.merchantBox}>
              <UI.Block row justify="space-between">
                <UI.Block width="auto">
                  <UI.Block row width="auto">
                    <UI.Block width="auto">
                      <Image
                        style={styles.merchantImage}
                        source={{uri: selectedMerchant.image}}
                      />
                    </UI.Block>
                    <UI.Spacer />
                    <UI.Block width="auto">
                      <UI.Text body>{selectedMerchant.name}</UI.Text>
                      <UI.Text color={colors.gray2} note>
                        32km away
                      </UI.Text>
                      <UI.Block row center>
                        <UI.Icon
                          color={colors.secondary}
                          size={18}
                          name="star"
                        />
                        <UI.Spacer size={2} />
                        <UI.Text bold>{selectedMerchant.rating}</UI.Text>
                      </UI.Block>
                    </UI.Block>
                  </UI.Block>
                  <UI.Spacer />
                  <UI.Block row center justify="space-between" width="auto">
                    <UI.Block row width="auto">
                      <SVG
                        name="phone"
                        color={colors.gray2}
                        fill={colors.gray2}
                      />
                      <UI.Text color={colors.gray2}>Call</UI.Text>
                    </UI.Block>
                    <UI.Spacer large />
                    <UI.Block row center width="auto">
                      <SVG name="share" color={colors.gray2} />
                      <UI.Text color={colors.gray2}>Share</UI.Text>
                    </UI.Block>
                  </UI.Block>
                </UI.Block>

                <UI.Block
                  style={[styles.divider, {borderRightColor: colors.gray3}]}
                />
                <UI.Block width="auto" center>
                  <UI.Button
                    onClick={() => handleGetDirections(selectedMerchant)}
                    style={styles.badgeBtn}
                    primary>
                    <UI.Text color={colors.white}>Direction</UI.Text>
                  </UI.Button>
                  <UI.Spacer />
                  <UI.Button
                    onClick={() => setSelectedMerchant(null)}
                    style={styles.badgeBtn}
                    colors={[colors.gray2, colors.gray2]}>
                    <UI.Text color={colors.white}>Cancel</UI.Text>
                  </UI.Button>
                </UI.Block>
              </UI.Block>
            </UI.Block>
          )}
        </>
      </UI.Block>
    </>
  );
};

export default MapScreen;
