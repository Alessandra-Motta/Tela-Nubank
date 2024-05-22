
import { StyleSheet, Text, View, Button, Image, ImageBackground } from 'react-native';
import Header from './src/components/Header';

export default function App() {

  const image = {uri: './img/Image-NUBank.jpg'}

  return (
    <View style={styles.container}>
  
      <ImageBackground source={image} resizeMode='cover' style={styles.img}></ImageBackground>

      <Header/>

      <View style={styles.icon1}>
          <Image 
          source={{uri: 'https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-0-1.png'}}
          style= {{width: 50, height: 50}}
          />
      </View>

    <View style={{position: 'absolute'}}>

    <Text style={styles.text1}>Um mundo                                          financeiro sem                                     complexidades</Text>

    </View>

    <View style={styles.button}>

    <Button style={{borderRadius: 50}} 
        title='Começar'
        color={'purple'}
    />

    </View>

      <View style={styles.text2}>
        <Text style={{color:'white'}}>Entrar na minha conta</Text>
      </View>

      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img:{
    flex:1,
    width: '100%',
    height: '100%',
    position: 'absolute'
  },

  text1: {
    flex:1,
    fontSize: 30, 
    fontWeight: "bold",
    textAlign: 'left',
    color: 'white',
    justifyContent: 'flex-start',
    marginTop: 390,
    marginLeft: 20

  },

  text2: {
    flex:1,
    fontSize: 15, 
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginTop: 820,
    position: 'absolute'

  },

  button:{
    width: '80%',
    borderRadius: 90,
    marginTop: 740,
    position: 'absolute',
    overflow: 'hidden',
  },

  icon1: {
    height: 30,
    width: 30,
    alignItems: 'center',
    position: 'absolute',
    marginRight: 380,
    marginTop: -915

},

});
