import { useInitialDeviceType } from './useInitialDeviceType';

const ResponsiveSwitch = ({ mobile, desktop, fallback = null }) => {
  const device = useInitialDeviceType();

  if (device === null) return fallback;

  return device === 'mobile' ? mobile : desktop;
};

export default ResponsiveSwitch;
