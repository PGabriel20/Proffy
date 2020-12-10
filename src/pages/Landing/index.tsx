import React, { useEffect, useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/purple-heart.png';

function Landing() {

    const { navigate } = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(()=>{
        api.get('/connections').then(res =>{
            const {total} = res.data.total

            setTotalConnections(total)
        })
    }, [])

    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPages(){
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem vindo,{'\n'}
                <Text style={styles.titleBold}>
                    O que deseja
                </Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={handleNavigateToStudyPages} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClasses} />
                    <Text style={styles.buttonText}>Dar Aulas</Text>
                </TouchableOpacity>

            </View>
            <Text style={styles.totalConnections}>
                Total de 200 conxões já realizadas {' '}
            </Text>
            <Image source={heartIcon} />
        </View>
    )
}

export default Landing;