import { Tags } from '../../../generic.types';
import { TypeTag } from '../../atoms';
import { LinkedButton } from '../../buttons/linked-button';
import styles from './call-to-action.module.scss';

interface CallToActionProps {
    heading:string,
    content:string,
    ctaText:string,
    ctaLink:string
}

export function CallToAction({
  heading,
  content,
  ctaText,
  ctaLink,
}:CallToActionProps) {

  return (
    <div className={styles['call-to-action']} >
      <TypeTag tag={Tags.h2} content={heading}/>
      <TypeTag tag={Tags.p} content={content}/>
      <LinkedButton href={ctaLink} text={ctaText}/>
    </div>
  );
}
