import { Root, Trigger } from '@radix-ui/react-alert-dialog';
import { Button } from '../Button';
import AlertDialogCancel from './components/alertDialogCancel';
import AlertDialogContent from './components/alertDialogContent';
import AlertDialogDescription from './components/alertDialogDescription';
import AlertDialogFooter from './components/alertDialogFooter';
import AlertDialogHeader from './components/alertDialogHeader';
import AlertDialogTitle from './components/alertDialogTitle';
import { IAlter } from './type';

const Alert = ({
  titleAlter,
  description,
  onClick,
  open,
  setOpen,
  titleButton,
  variantTile = 'outline',
  variantSubmit = 'contained',
}: IAlter) => {
  return (
    <Root
      open={open}
      onOpenChange={setOpen}
    >
      <Trigger asChild>
        <Button
          className="p-0 hover:bg-white mt-2 active:bg-white"
          variant={variantTile}
        >
          {titleButton}
        </Button>
      </Trigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>{titleAlter}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            type="submit"
            variant={variantSubmit}
            onClick={onClick}
          >
            Save
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </Root>
  );
};

export default Alert;
