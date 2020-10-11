import React, { useContext, useEffect } from 'react';
import { setURL, themeContext } from 'instinct-frontend';

setURL('play', <PlayPage />);

export function PlayPage() {
  const { setStore } = useContext(themeContext);

  useEffect(() => {
    setStore({ showClient: true })
  }, [setStore]);

  return null;
}
