import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'
import Logo from '../../assets/logo.svg'
import { Car } from '../../components/Car';

import * as S from './styles'

export function Home() {
    const navigation = useNavigation();

    const carDataOne = {
        brand: 'Audi',
        name: 'RS 5 Coupé',
        rent: {
            period: 'AO DIA',
            price:  120
        },
        thumbnail: 'https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png?fit=around%7C875:492.1875'
    } 

    function handleCarDetails(){
        navigation.navigate('CarDetails');
    }

    return (
        <S.Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <S.Header>
                <S.HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <S.TotalCars>
                        Total de 12 carros
                    </S.TotalCars>
                </S.HeaderContent>
            </S.Header>
            <S.CarList 
            data={[1, 2, 3, 4, 5, 6, 7]}
            keyExtractor={item => String(item)}
            renderItem={({ item }) => <Car data={carDataOne} onPress={handleCarDetails} />}
            />
        </S.Container>
    )

}