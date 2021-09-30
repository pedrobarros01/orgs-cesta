import React from 'react';
import { StyleSheet, View } from 'react-native';
import Detalhes from './componentsCesta/Detalhes';
import Topo from './componentsCesta/Topo';

const Cesta = ({topo, detalhes}) =>{
    return(
        <>
            
            <Topo {...topo} />
            <View style={estilos.cesta}>
                <Detalhes {...detalhes}/>
            </View>
        </>
    );

}

const estilos = StyleSheet.create({

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
        
    
});

export default Cesta;