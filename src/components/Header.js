import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';

export default function Header(){
    return(
        <View style={styles.container}>


            
            <View style={styles.icon2}>
                <Text>Brasil</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      
    },
  

    icon2: {
        height: 30,
        width: 60,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#D3D3D3',
        color: 'white',
        textAlign: 'flex-end',
        position: 'absolute',
        margin: 20,
        justifyContent: 'center',
        marginLeft: 150
    },
});
