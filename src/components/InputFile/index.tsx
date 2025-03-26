import { useRef, useState } from 'react';
import { MdClear } from 'react-icons/md';
import Avatar from '../Avatar';
import Input from '../Input';
import { showToast } from '../Toast';

const InputFile = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      if (!file.type.match('image/png|image/jpeg|image/jpg|image/gif|image/svg+xml')) {
        showToast({ message: 'Invalid file type', type: 'error' });
        return;
      }
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleClear = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setPreview(null);
  };

  return (
    <div className="flex items-center space-x-2">
      {preview ? (
        <div className="relative">
          <Avatar url={preview} />
          <MdClear
            size={16}
            className="absolute top-0 right-0 bg-black text-white rounded-full p-0.5 m-2 text-2xl cursor-pointer"
            onClick={handleClear}
          />
        </div>
      ) : (
        <Input
          ref={fileInputRef}
          type="file"
          className="cursor-pointer text-md md:text-md"
          onChange={handleFileChange}
        />
      )}
    </div>
  );
};

export default InputFile;
