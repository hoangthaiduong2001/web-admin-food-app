import { Root, Trigger } from '@radix-ui/react-dialog';
import SheetContent from './components/sheetContent';
import SheetDescription from './components/sheetDescription';
import SheetHeader from './components/sheetHeader';
import SheetTitle from './components/sheetTitle';
import { ISheet } from './type';

const Sheet = ({ title, titleButton, description }: ISheet) => {
  return (
    <Root>
      <Trigger>{titleButton}</Trigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Root>
  );
};

export default Sheet;
