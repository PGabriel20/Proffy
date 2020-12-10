import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,
    },
    content:{
        flex: 1,
        justifyContent: 'center',
    },
    title:{
        color: '#fff',
        fontSize: 20,
        lineHeight: 37,
        maxWidth: 100,
    },
    description:{
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        maxWidth: 240,
    },
    okButton:{
        marginVertical: 40,
        backgroundColor: '#04d361',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    okButtonText:{
        color: '#fff',
        fontSize: 16,

    }
   

});

export default styles;