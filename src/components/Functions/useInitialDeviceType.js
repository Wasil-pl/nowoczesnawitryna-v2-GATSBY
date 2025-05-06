import { useState, useEffect } from 'react';

const getInitialDeviceType = () => {
  if (typeof window === 'undefined') return null;
  return window.innerWidth <= 999 ? 'mobile' : 'desktop';
};

export const useInitialDeviceType = () => {
  const [device, setDevice] = useState(null);

  useEffect(() => {
    setDevice(getInitialDeviceType());
  }, []);

  return device;
};
