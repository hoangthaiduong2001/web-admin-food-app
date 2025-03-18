import { Close, Dialog as DialogCore, Trigger } from '@radix-ui/react-dialog';

import { cn } from '@/config/utils';
import { Button } from '../Button';
import DialogContent from './components/dialogContent';
import DialogDescription from './components/dialogDescription';
import DialogFooter from './components/dialogFooter';
import DialogHeader from './components/dialogHeader';
import DialogTitle from './components/dialogTitle';
import { IDialog } from './type';

const Dialog = ({ titleDialog, titleButton, description, onClick, open, setOpen, children }: IDialog) => {
  return (
    <DialogCore
      onOpenChange={setOpen}
      open={open}
    >
      <Trigger asChild>
        <Button variant="outline">{titleButton}</Button>
      </Trigger>
      <DialogContent className={cn('sm:max-w-[425px] z-50 bg-white')}>
        <DialogHeader>
          <DialogTitle>{titleDialog}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter className="sm:justify-end">
          <Close asChild>
            <Button variant="outline">Close</Button>
          </Close>
          <Button
            type="submit"
            variant="contained"
            onClick={onClick}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogCore>
  );
};

export default Dialog;
