import React from 'react';
import { Button } from '@/components/ui/button';

interface SocialButtonProps {
  imageSrc: string;
  altText: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ imageSrc, altText }) => {
  return (
    <Button
      type="button"
      variant="ghost"
      className="hover:bg-transparent hover:text-inherit w-16 h-16 rounded-full p-0"
    >
      <img src={imageSrc} alt={altText} className="rounded-full border-2" />
    </Button>
  );
};

export default SocialButton;
