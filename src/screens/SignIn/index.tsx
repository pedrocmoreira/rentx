import React,{ useState } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import { Button } from '../../components/Button';
import { Input } from '../Input';
import theme from '../../styles/theme';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Footer,
  Form,
} from './styles';
import { PasswordInput } from '../PasswordInput';

export function SignIn() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView behavior='position' enabled>
    <Container>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      <Header>
        <Title>Estamos{'\n'}quase lá</Title>
        <SubTitle>
          Faça seu login para começar{'\n'}
          uma experiencia incrível.
        </SubTitle>
      </Header>

      <Form>
        //Fazer refactor dos inputs
        <Input
          iconName='mail'
          placeholder='E-mail'
          keyboardType='email-address'
          autoCorrect={false}
          autoCapitalize='none'
          onChangeText={setEmail}
          value={email}
        />

        <PasswordInput
          iconName='lock'
          placeholder='Senha'
          onChangeText={setPassword}
          value={password}
        />
      </Form>

      <Footer>
        <Button
          title='Login'
          onPress={() => { }}
          enabled={false}
          loading={false}
        />
        <Button
          title='Criar conta gratuita'
          color={theme.colors.background_secondary}
          light={true}
          onPress={() => { }}
          enabled={false}
          loading={false}
        />
      </Footer>
    </Container>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}