import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { format } from 'date-fns';
import { BackButton } from '../../components/BackButton';
import ArrowSvg from '../../assets/arrow.svg';
import { Button } from '../../components/Button';
import { Calendar, DayProps, generateInterval, MarkedDateProps } from '../../components/Calendar';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as S from './styles';

import { getPlatformDate } from '../../utils/getPlatformDate';
import { CarDTO } from '../../dtos/CarDTO';

interface RentalPeriod {
    startFormatted: string;
    endFormatted: string;
}

interface Params{
    car: CarDTO;
}

export function Scheduling(){
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

    const theme = useTheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Params;

    function handleConfirmRental(){
        navigation.navigate('SchedulingDetails', {
            car,
            dates: Object.keys(markedDates)
        });
    }

    function handleGoBack(){
        navigation.goBack();
    }

    function handleChangeDate(date: DayProps){
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if(start.timestamp > end.timestamp){
            start = end;
            end = start;
        }

        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);

        const firstDate = Object.keys(interval)[0];
        const endDate = Object.keys(interval)[Object.keys(interval).length -1];

        setRentalPeriod({
            startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
            endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
        })
    }

    return(
        <S.Container>
            <S.Header>
                <StatusBar
                    barStyle="light-content"
                    translucent 
                />
                <BackButton 
                    onPress={handleGoBack}
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
                        <S.DateValue selected={!!rentalPeriod.startFormatted}>
                            {rentalPeriod.startFormatted}
                        </S.DateValue>
                    </S.DateInfo>

                    <ArrowSvg />

                    <S.DateInfo>
                        <S.DateTitle>ATÉ</S.DateTitle>
                        <S.DateValue selected={!!rentalPeriod.endFormatted}>
                            {rentalPeriod.endFormatted}
                        </S.DateValue>
                    </S.DateInfo>
                </S.RentalPeriod>

            </S.Header>

            <S.Content>
                <Calendar 
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />
            </S.Content>

            <S.Footer>
                <Button title="Confirmar" onPress={handleConfirmRental} enabled={!!rentalPeriod.startFormatted}/>
            </S.Footer>
        </S.Container>
    )
}