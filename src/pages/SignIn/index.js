import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth'

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText
} from './styles'

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    signIn(email, password)
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enable
      >
        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrent={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrent={false}
            autoCapitalize="none"
            value={password}
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        <SubmitButton onPress={handleLogin}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#fff" />
            ) : (
              <SubmitText>Acessar</SubmitText>
            )
          }
        </SubmitButton>

        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>

      </Container>
    </Background>
  );
}