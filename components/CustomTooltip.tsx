import React, {ReactElement, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';

type CustomTooltipProps = {
  popover: ReactElement;
  content: ReactElement;
  placement?: 'top' | 'right' | 'bottom' | 'left';
};

const CustomTooltip: React.FC<CustomTooltipProps> = props => {
  const {popover, content, placement} = props;
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <Tooltip
      isVisible={tooltipVisible}
      content={popover}
      placement={placement || 'top'}
      onClose={() => setTooltipVisible(false)}
      contentStyle={{borderRadius: 50}}>
      <TouchableOpacity onPress={() => setTooltipVisible(true)}>
        {content}
      </TouchableOpacity>
    </Tooltip>
  );
};

export default CustomTooltip;
