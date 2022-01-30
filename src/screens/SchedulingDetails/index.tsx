import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { format } from 'date-fns';

import { BackButton } from '../../components/BackButton';
import { Accessory } from '../Accessory';
import { ImageSlider } from '../ImageSlider';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation, useRoute } from '@react-navigation/native'
import { api } from '../../services/api';
import { Alert } from 'react-native';;

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { Button } from '../../components/Button';
import { CarDTO } from '../../dtos/CarDTO';


import * as S from './styles'
import { getPlatformDate } from '../../utils/getPlatformDate';



interface Params{
    car: CarDTO;
    dates: string[];
}

interface RentalPeriod{
    start: string;
    end: string;
}

export function SchedulingDetails() {
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod);

    const theme = useTheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { car, dates } = route.params as Params;

    const rentalTotal = Number(dates.length * car.rent.price);

   async function handleConfirmRental(){
      const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

        const unavailable_dates = [
            ...schedulesByCar.data.unavailable_dates,
            ...dates,
        ];

        api.put(`/schedules_bycars/${car.id}`, {
            id: car.id,
            unavailable_dates
        })
        .then(() => navigation.navigate('SchedulingComplete'))
        .catch(() => Alert.alert('Não foi possível confirmar o agendamento'))
    }

    function handleGoBack(){
        navigation.goBack();
    }

    useEffect(() => {
        setRentalPeriod({
            start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
            end:  format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
        })
    }, [])

    return (
        <S.Container>
            <S.Header>
                <BackButton onPress={ handleGoBack } />
            </S.Header>

            <S.CarImages>
                <ImageSlider
                    imagesUrl={car.photos}
                />
            </S.CarImages>

            <S.Content>
                <S.Details>
                    <S.Description>
                        <S.Brand>{car.brand}</S.Brand>
                        <S.Name>{car.name}</S.Name>
                    </S.Description>
                    <S.Rent>
                        <S.Period>{car.rent.period}</S.Period>
                        <S.Price>R$ {car.rent.price}</S.Price>
                    </S.Rent>
                </S.Details>
                <S.Accesories>
                    {
                        car.accessories.map(accessory => (
                            <Accessory 
                                key={accessory.type}
                                name={accessory.name} 
                                icon={getAccessoryIcon(accessory.type)}
                            />
                        ))  
                    }
                </S.Accesories>

                <S.RentalPeriod>
                    <S.CalendarIcon>
                        <Feather
                            name='calendar'
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </S.CalendarIcon>

                    <S.DateInfo>
                        <S.DateTitle>DE</S.DateTitle>
                        <S.DateValue>{rentalPeriod.start}</S.DateValue>
                    </S.DateInfo>

                    <Feather 
                        name='chevron-right'
                        size={RFValue(10)}
                        color={theme.colors.text}
                    />
                    
                    <S.DateInfo>
                        <S.DateTitle>ATÉ</S.DateTitle>
                        <S.DateValue>{rentalPeriod.end}</S.DateValue>
                    </S.DateInfo>
                </S.RentalPeriod>

                <S.RentalPrice>
                    <S.RentalPriceLabel>TOTAL</S.RentalPriceLabel>
                    <S.RentalPriceDetails>
                        <S.RentalPriceQuota>{`R$ ${car.rent.price}  x${dates.length} diárias`}</S.RentalPriceQuota>
                        <S.RentalPriceTotal>R$ {rentalTotal}</S.RentalPriceTotal>
                    </S.RentalPriceDetails>
                </S.RentalPrice>

            </S.Content>

            <S.Footer>
                <Button 
                    title="Alugar agora"
                    color={theme.colors.success}
                    onPress={handleConfirmRental}
                />
            </S.Footer>

        </S.Container>
    )
}
