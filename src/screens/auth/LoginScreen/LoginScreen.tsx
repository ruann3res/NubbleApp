import React from 'react';

import {Button} from '../../../components/Button/Button';

import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackNavigationProp<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: {navigation: ScreenProps}) {
  function handleCreateAccount() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <Screen scrollable>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        errorMessage="mensagem de error"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
      />

      <Text color="primary" preset="paragraphSmall" bold onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        Esqueci minha senha
      </Text>

      <Button marginTop="s48" title="Entrar" />
      <Button
        onPress={handleCreateAccount}
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
      />
    </Screen>
  );
}
