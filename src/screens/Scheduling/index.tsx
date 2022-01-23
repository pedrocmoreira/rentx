import React from 'react';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg';

import * as S from './styles';
import { Button } from '../../components/Button';
import { Calendar } from '../../components/Calendar';
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';
import { SchedulingDetails } from '../SchedulingDetails';


export function Scheduling(){
    const theme = useTheme();
    const navigation = useNavigation();

    function handleConfirmRental(){
        navigation.navigate('SchedulingDetails')
    }

    return(
        <S.Container>
            <S.Header>
                <StatusBar
                    barStyle="light-content"
                    translucent 
                />
                <BackButton 
                    onPress={() => {}}
                    color={theme.colors.shape}
                />

                <S.Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel
                </S.Title>

                <S.RentalPeriod>
                    <S.DateInfo>
                        <S.DateTitle>DE</S.DateTitle>
                        <S.DateValue selected={false}>
                        18/06/2021
                        </S.DateValue>
                    </S.DateInfo>

                    <ArrowSvg />

                    <S.DateInfo>
                        <S.DateTitle>ATÉ</S.DateTitle>
                        <S.DateValue selected={false}>
                            18/06/2021
                        </S.DateValue>
                    </S.DateInfo>
                </S.RentalPeriod>

            </S.Header>

            <S.Content>
                <Calendar />
            </S.Content>

            <S.Footer>
                <Button title="Confirmar" onPress={handleConfirmRental}/>
            </S.Footer>
        </S.Container>
    )
}