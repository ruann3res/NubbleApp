import {ThemeColors} from '../../theme/Theme';
import {TouchableOpacityBoxProps} from '../Box/Box';
import {ButtonPresetType} from './Button';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPresetType,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: 'gray2',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary',
      },
      content: 'primary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: 'gray2',
    },
  },
};
