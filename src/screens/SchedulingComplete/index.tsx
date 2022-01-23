import React from 'react';
import { useWindowDimensions, StatusBar } from 'react-native';
import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import * as S from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';
import { useNavigation } from '@react-navigation/native';

export function SchedulingComplete(){
    const { width } = useWindowDimensions();
    const navigation = useNavigation();
    
    function handleConfirm(){
        navigation.navigate('Home')
    }

   return(
       <S.Container>
           <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
           />
           <LogoSvg width={width} />

           <S.Content>
               <DoneSvg width={80} height={80}/>
               <S.Title>Carro alugado!!</S.Title>

               <S.Message>
                   Agora você só precisa ir {'\n'}
                   até ua concessionária da RENTX{'\n'}
                   pegar o seu automóvel. 
               </S.Message>
           </S.Content>

            <S.Footer>
                <ConfirmButton title="OK" onPress={handleConfirm}/>
            </S.Footer>

       </S.Container>
       
   )
}