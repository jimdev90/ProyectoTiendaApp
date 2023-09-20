import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';


const Signin = () => {
    const [checked, setChecked] = useState(false);

    const onSignIn = () => {
        console.log('HELLO');
    };

    return (
        <ScrollView style={styles.container}>
            <AuthHeader title="Registrarse" />
            <Input label='Nombres' placeholder='Jimmy Niels' />
            <Input label='Email' placeholder='correo@correo.com' />
            <Input isPassword label='Password' placeholder='********' />
            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>Estoy de acuerdo con los <Text style={styles.agreeTextBold}>Términos</Text> y <Text style={styles.agreeTextBold}>Privacidad</Text></Text>
            </View>
            <Button style={styles.button} title='Registrarse' />
            <Separator text='O registrarse con' />
            <GoogleLogin />
            <Text style={styles.footerText}>
                ¿Ya tienes una cuenta?
                <Text onPress={onSignIn} style={ styles.footerLink }> Inicia Sesión</Text>
            </Text>
        </ScrollView>
    );
};

export default React.memo(Signin);