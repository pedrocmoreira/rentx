import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Car } from '../../components/Car';
import Logo from '../../assets/logo.svg'
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';

import * as S from './styles'
import { Load } from '../../components/Load';


export function Home() {
    const [cars, setCars] = useState<CarDTO[]>([]);
    const [loading, setLoading] = useState(true);
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

    useEffect(() => {
        async function fetchCars() {
            try{
                const response = await api.get('cars');
                setCars(response.data);
            }catch (error){
                console.log(error);
            }finally{
                setLoading(false);
            }
        }

        fetchCars();
    });

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
            {loading ? <Load/>:
            <S.CarList 
            data={cars}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) =>
                 <Car data={item} onPress={handleCarDetails} />}
            />}
        </S.Container>
    )

}