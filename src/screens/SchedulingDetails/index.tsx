import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { BackButton } from '../../components/BackButton';
import { Accessory } from '../Accessory';
import { ImageSlider } from '../ImageSlider';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';



import * as S from './styles'
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

export function SchedulingDetails() {
    const theme = useTheme();
    const navigation = useNavigation();

    function handleConfirmRental(){
        navigation.navigate('SchedulingComplete');
    }

    function handleGoBack(){
        navigation.goBack();
    }

    return (
        <S.Container>
            <S.Header>
                <BackButton onPress={ handleGoBack } />
            </S.Header>

            <S.CarImages>
                <ImageSlider
                    imagesUrl={['https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png?fit=around%7C875:492.1875']}
                />
            </S.CarImages>

            <S.Content>
                <S.Details>
                    <S.Description>
                        <S.Brand>Lamborghini</S.Brand>
                        <S.Name>Huracan</S.Name>
                    </S.Description>
                    <S.Rent>
                        <S.Period>Ao dia</S.Period>
                        <S.Price>R$ 580</S.Price>
                    </S.Rent>
                </S.Details>
                <S.Accesories>
                    <Accessory name="380Km/h" icon={speedSvg}/>
                    <Accessory name="3.2s" icon={accelerationSvg}/>
                    <Accessory name="800 HP" icon={forceSvg}/>
                    <Accessory name="Gasolina" icon={gasolineSvg}/>
                    <Accessory name="Auto" icon={exchangeSvg}/>
                    <Accessory name="2 Pessoas" icon={peopleSvg}/>
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
                        <S.DateValue>28/06/2021</S.DateValue>
                    </S.DateInfo>

                    <Feather 
                        name='chevron-right'
                        size={RFValue(10)}
                        color={theme.colors.text}
                    />
                    
                    <S.DateInfo>
                        <S.DateTitle>DE</S.DateTitle>
                        <S.DateValue>28/06/2021</S.DateValue>
                    </S.DateInfo>
                </S.RentalPeriod>

                <S.RentalPrice>
                    <S.RentalPriceLabel>TOTAL</S.RentalPriceLabel>
                    <S.RentalPriceDetails>
                        <S.RentalPriceQuota>R$ 580 x3 diárias</S.RentalPriceQuota>
                        <S.RentalPriceTotal>R$ 2.900</S.RentalPriceTotal>
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
