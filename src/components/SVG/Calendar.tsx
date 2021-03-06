import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function Calendar({width, height, color}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M6 1.5v2.25M12 1.5v2.25M2.625 6.817h12.75M15.75 6.375v6.375c0 2.25-1.125 3.75-3.75 3.75H6c-2.625 0-3.75-1.5-3.75-3.75V6.375c0-2.25 1.125-3.75 3.75-3.75h6c2.625 0 3.75 1.5 3.75 3.75z"
        stroke={color}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.996 10.275h.007M6.222 10.275h.007M6.222 12.525h.007"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Calendar;
