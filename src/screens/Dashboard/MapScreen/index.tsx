import React from 'react';
import * as UI from '@/components/common';

interface MapScreenProps {}

const MapScreen: React.FC<MapScreenProps> = () => {
  return (
    <>
      <UI.Layout>
        <UI.Block>
          <UI.Text h1>Map Screen</UI.Text>
        </UI.Block>
      </UI.Layout>
    </>
  );
};

export default MapScreen;
