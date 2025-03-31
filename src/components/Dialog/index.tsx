import { Close, Dialog as DialogCore, Trigger } from '@radix-ui/react-dialog';

import { cn } from '@/config/utils';
import { sizeComponent } from '@/types/common';
import { Button } from '../Button';
import DialogContent from './components/dialogContent';
import DialogDescription from './components/dialogDescription';
import DialogFooter from './components/dialogFooter';
import DialogHeader from './components/dialogHeader';
import DialogTitle from './components/dialogTitle';
import { IDialog } from './type';

const Dialog = ({
  titleDialog,
  titleButton,
  description,
  onClick,
  open,
  setOpen,
  children,
  size = 'md',
  variantButton = 'outline',
  showButtonSubmit = true,
}: IDialog) => {
  return (
    <DialogCore
      onOpenChange={setOpen}
      open={open}
    >
      <Trigger asChild>
        <Button variant={variantButton}>{titleButton}</Button>
      </Trigger>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className={cn(sizeComponent[size], 'z-50 bg-white')}
      >
        <DialogHeader>
          <DialogTitle>{titleDialog}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter className="justify-end">
          <Close asChild>
            <Button variant="outline">Close</Button>
          </Close>
          {showButtonSubmit && (
            <Button
              type="submit"
              variant="contained"
              onClick={onClick}
            >
              Submit
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </DialogCore>
  );
};

export default Dialog;
