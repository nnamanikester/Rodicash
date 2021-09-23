import * as React from 'react';
import Svg, {Path, Ellipse, SvgProps} from 'react-native-svg';

function Ribons({width, height}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M.035 1c-.522 15.6 4.59 50.28 29.204 64.2 11.474 6.488 33.127 7.866 50.587 21 13.56 10.2 19.122 26.2 19.296 30 0 4.6 1.46 15.24 7.301 21"
        stroke="#F78E1E"
        strokeWidth={3}
      />
      <Path
        d="M113.202 1c4.867 9 15.124 28.68 17.21 35.4 2.607 8.4 1.81 21.953 1.043 24.6-.835 2.88-1.043 6-5.216 12-7.886 11.342-15.123 23.76-15.123 25.2"
        stroke="#4CD080"
        strokeWidth={3}
      />
      <Path
        d="M257.139 1c-1.565 4.8-6.78 15-16.689 21.6-7.926 5.28-26.597 1.8-35.984 3s-15.123 13.2-16.688 16.8c-2.565 5.902-3.489 9.649-4.172 16.2-1.565 15-1.88 41.7.521 52.2 2.608 11.4 2.608 31.2 2.608 31.2"
        stroke="#54B948"
        strokeWidth={3}
      />
      <Path
        d="M211.767 1c0 3.2 2.816 11.16 11.994 15 10.431 1.8 20.339 3 21.904 3 1.564 0 6.779 1.2 6.779 1.2"
        stroke="#F78E1F"
        strokeWidth={3}
      />
      <Path
        d="M375 1.6c-9.561 15.6-16.688 28.2-32.855 50.4-2.829 3.886-6.258 5.4-9.387 7.2-6.029 3.468-18.774 3-25.032 4.2-6.259 1.2-8.469 4.734-9.388 7.2-1.564 4.2-1.564 7.8-1.043 11.4.258 1.775 1.113 4.68 2.086 6.6 3.651 7.2 10.952 16.8 10.952 16.8M306.682 109s.584 5.088-1.043 5.4c-3.129.6-8.344 1.8-8.344 5.4"
        stroke="#26BCD7"
        strokeWidth={2}
      />
      <Path
        d="M313.145 69.4l9.387 6.235-9.387 6.236V69.4zM82.637 69.4l9.387 6.235-9.387 6.236V69.4z"
        fill="#F78E1E"
      />
      <Path
        d="M262.456 61.6l4.694 3.118-4.694 3.117V61.6zM310.854 40.6l7.302-1.2v6l-7.302 1.2v-6z"
        fill="#FF3F3F"
      />
      <Path d="M240.973 35.6l6.258-1v5l-6.258 1v-5z" fill="#26BCD6" />
      <Path d="M167.96 15.2l5.216-1v5l-5.216 1v-5z" fill="#C4C4C4" />
      <Path d="M24.024 81.2l6.258-1v5l-6.258 1v-5z" fill="#FF3F3F" />
      <Ellipse cx={296.774} cy={26.8} rx={1.565} ry={1.8} fill="#26BCD7" />
      <Ellipse cx={289.473} cy={89.2} rx={2.608} ry={3} fill="#54B948" />
      <Path fill="#26BCD6" d="M147.1 5.8h4.172v4.8H147.1z" />
      <Ellipse cx={101.207} cy={15.4} rx={2.086} ry={2.4} fill="#26BCD7" />
      <Path
        d="M78.261 46.6c-.347 1.8-.521 6.2 2.087 7.2 1.564.6 8.344 1.2 9.387 6.6M210.204 36.4s0 4.8-2.086 5.4c-2.086.6-3.915.128-5.737 1.2-1.539.905-2.608 2.4-2.608 3.6"
        stroke="#FFD2A6"
      />
    </Svg>
  );
}

export default Ribons;
