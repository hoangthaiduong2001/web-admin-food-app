import { Provider, Root, Trigger } from '@radix-ui/react-tooltip';
import TooltipContent from './components/tooltipContent';

const Tooltip = () => {
  return (
    <Provider>
      <Root>
        <Trigger>Hover</Trigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Root>
    </Provider>
  );
};

export default Tooltip;
