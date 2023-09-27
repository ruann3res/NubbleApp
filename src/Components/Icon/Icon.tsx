import {ThemeColors} from '../../theme/Theme';
import {EyeOffIcon} from '../../assets/icons/EyeOffIcon';
import {EyeOnIcon} from '../../assets/icons/EyeOnIcon';

import {useAppTheme} from '../../hooks/useAppTheme';

interface Props {
  name: IconName;
  color?: ThemeColors;
  size?: number;
}

export function Icon({name, color = 'backgroundContrast', size}: Props) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
};

type IconName = keyof typeof iconRegistry;
