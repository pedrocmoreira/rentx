import React,{ useState } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import * as Yup from 'yup';

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

  async function handleSignIn(){
    try{
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('A senha é obrigatória')
      });
  
      await schema.validate({ email, password });
      Alert.alert('Tudo certo', 'Login realizado com sucesso');
    }catch(error){
      if(error instanceof Yup.ValidationError){
        return Alert.alert('Opa',error.message);
      }else{
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, verifique as credenciais'
        )
      }
    }
  }

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
          onPress={handleSignIn}
          enabled={true}
          loading={false}
        />
        <Button
          title='Criar conta gratuita'
          color={theme.colors.background_secondary}
          light={true}
          onPress={() => {}}
          enabled={true}
          loading={false}
        />
      </Footer>
    </Container>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}