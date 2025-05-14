import React from 'react';

import {Screen} from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Icon } from '../../../components/Icon/Icon';
import { Button } from '../../../components/Button/Button';
import { RootStackParamList } from '../../../routes/Routes';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type SuccessScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route, navigation}: SuccessScreenProps) {
  function goBackToStart() {
    navigation.goBack();
  }
  return (
    <Screen scrollable>
      <Icon {...route.params.icon} />
      <Text preset='headingLarge' mt='s24'>{route.params.title}</Text>
      <Text preset='paragraphLarge' mt='s16'>{route.params.description}</Text>
      <Button mt='s40'title='Voltar ao início' onPress={goBackToStart} />
    </Screen>
  );
}
