import { cn } from '@/config/utils';
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
  classNameButton,
}: IAlter) => {
  return (
    <Root
      open={open}
      onOpenChange={setOpen}
    >
      <Trigger asChild>
        <Button
          className={cn('', classNameButton)}
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
