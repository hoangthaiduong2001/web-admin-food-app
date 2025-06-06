import { useRef, useState } from 'react';
import Avatar from '../Avatar';
import Input from '../Input';
import { showToast } from '../Toast';

const InputFile = ({ img, onChange }: { img: string; onChange: (file: File | null) => void }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(img);
  const handleFileChange = (file: File) => {
    if (!file) return;
    if (!file.type.match('image/png|image/jpeg|image/jpg|image/gif|image/svg+xml')) {
      showToast({ message: 'Invalid file type', type: 'error' });
      return;
    }
    onChange(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleClear = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onChange(null);
    setPreview(null);
  };

  return (
    <div className="flex items-center space-x-2">
      {preview ? (
        <div className="relative">
          <Avatar
            url={preview}
            onClick={() => fileInputRef.current?.click()}
          />
        </div>
      ) : (
        <Input
          ref={fileInputRef}
          type="file"
          className="cursor-pointer text-md md:text-md"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              handleFileChange(file);
            }
          }}
        />
      )}
      <Input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            handleFileChange(file);
          }
        }}
      />
    </div>
  );
};

export default InputFile;
