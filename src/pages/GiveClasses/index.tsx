import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

function GiveClasses(){

    const {goBack} = useNavigation();

    function handleNavigateBack(){
        goBack();
    }

    return(

        <View style={styles.container} >
            <Text style={styles.title}>Quer ser um Proffy</Text>
            <Text style={styles.description}>Para começar, você precisa se cadastrar como um professor
             em nossa plataforma web</Text>


             <TouchableOpacity onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>
                    Tudo Bem
                </Text>
             </TouchableOpacity>
        </View>
    )
}


export default GiveClasses;