import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 10,
        overflow: 'hidden',
    },
    profile:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    avatar:{
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee'
    },
    profileInfo:{
        marginLeft: 16,
    },
    name:{
        color: '#32264d',
        fontSize: 20,
    },
    subject:{
        color: '#6a6180',
        fontSize: 12,
        marginTop: 4,
    },
    bio:{
        fontSize: 14,
        margin: 14,
        lineHeight: 24,
        color: '#6a6180'
    },
    footer:{
        backgroundColor: '#fafafafc',
        padding: 24,
        alignItems: 'center',
        marginTop: 24,
    },
    price:{
        color: '#6a6180',
        fontSize: 14,
    },
    priceValue:{
        color: '#8257e5',
        fontSize: 16,
    },
    buttonsContainer:{
        flexDirection: 'row',
        marginTop:16,
    },
    favoriteButton:{
        backgroundColor: '#8257e5',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    contactButton:{
        backgroundColor: '#04d361',
        flex: 1,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    contactButtonText:{
        color: '#fff',
        fontSize: 16,
        marginLeft: 16,
    },
    favorited:{
        
    }
});

export default styles;