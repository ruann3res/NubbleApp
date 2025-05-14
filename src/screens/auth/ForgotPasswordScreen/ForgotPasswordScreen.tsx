import React from 'react';

import {Screen} from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Icon } from '../../../components/Icon/Icon';
import { Button } from '../../../components/Button/Button';
import { TextInput } from '../../../components/TextInput/TextInput';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';

export function ForgotPasswordScreen() {
  const {resetNavigation} = useResetNavigationSuccess();
  function submitForm() {
    resetNavigation({
      title: `Enviamos as instruções para ${'\n'} seu e-mail`,
      description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {name: 'messageRound', color: 'primary'},
    });
  }

  return (
    <Screen canGoBack scrollable>
      <Icon name='messageRound' color='primary' />
      <Text preset='headingLarge' mt='s24'>Esqueci minha senha</Text>
      <Text preset='paragraphLarge' mb='s32' mt='s16'>Digite seu e-mail e enviaremos as instruções para redefinição de senha</Text>
      <TextInput
        errorMessage="mensagem de error"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's40'}}
      />
      <Button onPress={submitForm} title='Enviar link de recuperação' />
    </Screen>
  );
}
