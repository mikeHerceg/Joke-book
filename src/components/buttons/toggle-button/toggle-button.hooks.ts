import { useMemo, useState } from 'react';

export const useToggleButton = (defaultValue:boolean, text:string, onClick:()=>void) => {

  const [isChecked, setIsChecked] = useState<boolean>(defaultValue);
  const handleClick = () => {
    onClick();
    setIsChecked(!isChecked);
  };
  const id = useMemo(() => text.replaceAll(' ', ''), [text]);

  return {
    isChecked, handleClick, id,
  };
};
