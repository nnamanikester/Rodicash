import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

function Map({width, height, color, fill}: SvgProps) {
  return (
    <Svg width={width} height={height} fill="none">
      <Path
        d="M10.675 8.738c-.653 0-1.166.525-1.166 1.167a1.17 1.17 0 001.166 1.167 1.17 1.17 0 001.167-1.167 1.17 1.17 0 00-1.167-1.167z"
        fill={color}
      />
      <Path
        d="M25.036 5.88c-.98-2.275-3.138-3.547-6.148-3.547H9.111a6.777 6.777 0 00-6.778 6.779v9.776c0 3.01 1.272 5.169 3.547 6.149a.592.592 0 00.641-.129L24.908 6.522c.175-.175.233-.432.128-.642zm-12.751 8.4a2.339 2.339 0 01-1.645.653 2.39 2.39 0 01-1.645-.653C7.805 13.16 6.498 11.375 7 9.252c.443-1.925 2.146-2.789 3.64-2.789 1.493 0 3.196.864 3.64 2.8.49 2.112-.817 3.897-1.995 5.017zM22.715 23.952c.256.256.221.676-.094.851-1.026.572-2.275.864-3.733.864H9.111c-.338 0-.478-.397-.245-.63l7.047-7.047a.578.578 0 01.828 0l5.974 5.962zM25.667 9.112v9.776c0 1.459-.292 2.719-.863 3.734-.175.315-.595.338-.852.093l-5.973-5.973a.578.578 0 010-.829l7.046-7.046c.245-.234.642-.094.642.245z"
        fill={fill}
      />
    </Svg>
  );
}

export default Map;
