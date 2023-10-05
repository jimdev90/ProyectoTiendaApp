import React from 'react';
import { Text, ScrollView } from 'react-native';
import { styles } from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
import { SafeAreaView } from 'react-native-safe-area-context';


const Signin = ({ navigation }) => {

    const onSignUp = () => {
        navigation.navigate('Signup')
    };

    const onBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Iniciar Sesión" />
                <Input label='Email' placeholder='correo@correo.com' />
                <Input isPassword label='Password' placeholder='********' />
                <Button style={styles.button} title='Ingresar' />
                <Separator text='O inicia sesión con' />
                <GoogleLogin />
                <Text style={styles.footerText}>
                    ¿No tienes una cuenta?
                    <Text onPress={onSignUp} style={styles.footerLink}> Registrate</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>

    );
};

export default React.memo(Signin);