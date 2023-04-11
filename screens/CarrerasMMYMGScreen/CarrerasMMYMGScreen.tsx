import React from 'react'
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import { CarrerasScreen } from '../../components/CarrerasScreen';

type CarrerasTestProps = {
    route: RouteProp<RootStackParamList, 'CarrerasMMYMGScreen'>;
}

const CarrerasMMYMGScreen = ({route}: CarrerasTestProps) => {

    const {areaUno, areaDos, prop} = route.params

    let msjAreaUno = areaUno?.split(',').join('\n')
    let msjAreaDos = areaDos?.split(',').join('\n')
  return (
    <CarrerasScreen
    argumento1={msjAreaDos}
    argumento2={msjAreaUno}
    area={prop}
    />
  )
}


export default CarrerasMMYMGScreen;