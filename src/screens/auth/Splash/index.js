import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import Button from '../../../components/Button';


const Splash = () => {
  return (
    <>
      <View style={styles.container}>
        <Image resizeMode='contain' style={styles.image} source={require('../../../assets/splash_image.png')} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Encontrarás</Text>
          <Text style={[styles.title, styles.innerTitle]}>Todo lo que necesita</Text>
          <Text style={styles.title}>¡Aquí!</Text>
        </View>

        <Button title="Registrarse" />
        <Pressable hitSlop={20}>
          <Text style={styles.footerText}>Iniciar Sesión</Text>
        </Pressable>
      </View>
    </>
  );
};

export default React.memo(Splash);
