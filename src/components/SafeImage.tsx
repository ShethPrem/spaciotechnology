import { useState } from 'react';
import { FALLBACK_IMAGE } from '@/data/listings';

interface SafeImageProps {
  src?: string;
  alt?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

const SafeImage = ({ src, alt = 'Image', className = '', loading = 'lazy' }: SafeImageProps) => {
  const [imgSrc, setImgSrc] = useState<string>(
    typeof src === 'string' && src.length > 0 ? src : FALLBACK_IMAGE
  );

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => setImgSrc(FALLBACK_IMAGE)}
    />
  );
};

export default SafeImage;