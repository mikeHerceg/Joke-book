
import React from 'react';
import styles from './media-object.module.scss';


type ImageType = {
    src:string;
    alt?:string;
}

interface MediaObjectProps {
    image: ImageType,
    content:JSX.Element | JSX.Element[],
    alignment: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left',
}

export function MediaObject({
  image,
  content,
  alignment,
  ...props
}:MediaObjectProps) {
  return (
    <section
      {...props}
      data-testid="media-object"
      className={styles['media-object']}
      role="group"
      data-alignment={alignment}
    >
      <div className={styles['image-container']}>
        <img src={image.src} alt={image.alt} aria-hidden={image.alt ? 'false' : 'true'} />

      </div>
      <div >
        {content}
      </div>
    </section>
  );
}

