import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

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
    const theme = useTheme()

    function handleCarDetails(car: CarDTO){
        navigation.navigate('CarDetails', { car });
    }

    function handleOpenMyCars(){
        navigation.navigate('MyCars');
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
                        Total de {cars.length} carros
                    </S.TotalCars>
                </S.HeaderContent>
            </S.Header>
            {loading ? <Load/>:
            <S.CarList 
            data={cars}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) =>
                 <Car data={item} onPress={ () => handleCarDetails(item) } />}
            />}
            <S.MyCarsButton onPress={handleOpenMyCars} >
                <Ionicons 
                    name="ios-car-sport"
                    size={32}
                    color={theme.colors.shape}
                />
            </S.MyCarsButton>
        </S.Container>
    )

}