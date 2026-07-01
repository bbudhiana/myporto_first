import React, { useState } from 'react';

const PLACEHOLDER = '/images/placeholder-project.jpg';

export default function ImageWithFallback({ src, alt, fallbackSrc = PLACEHOLDER, ...props }) {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    return (
        <img
            src={imgSrc}
            alt={alt}
            onError={() => {
                if (!hasError) {
                    setImgSrc(fallbackSrc);
                    setHasError(true);
                }
            }}
            {...props}
        />
    );
}