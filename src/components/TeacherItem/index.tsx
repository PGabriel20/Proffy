import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, Linking } from 'react-native';
import styles from './styles';
import heartOutlineIcon from '../../assets/images/icons/purple-heart.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
 

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {

    const [isFavorited, setIsFavorited] = useState(favorited)

    function handleLinkToWhatsapp() {
        Linking.openURL('whatsapp://send?phone=${teacher.whatsapp}')
    }

    async function hanldeToggleFavorite() {
        const favorites = await AsyncStorage.getItem('favorites');

        let favoritesArray = [];

        if(favorites){
            favoritesArray = JSON.parse(favorites)

        }

        if(isFavorited){
            //Remover dos favoritos
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher)=>{
                return teacherItem.id === teacher.id
            })

            favoritesArray.splice(favoriteIndex, 1);
            setIsFavorited(false)
        }
        else{
            //Adicionar aos favoritos

            favoritesArray.push(teacher)

            setIsFavorited(true)
            
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{ uri: teacher.avatar }} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>



            <Text style={styles.bio}>
                {teacher.bio}
            </Text>


            <View style={styles.footer}>
                <Text style={styles.price}>Preço/hora</Text>
                <Text style={styles.priceValue}>R$: {teacher.cost}</Text>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={hanldeToggleFavorite} style={[styles.favoriteButton, isFavorited ? styles.favorited: {}]}>
                        {isFavorited ? <Text>X</Text> : <Image source={heartOutlineIcon}></Image>}
                        
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                        <Image source={whatsappIcon}></Image>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;