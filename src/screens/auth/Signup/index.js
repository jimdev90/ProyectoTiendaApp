import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
import { SafeAreaView } from 'react-native-safe-area-context';


const Signup = ({ navigation }) => {
    const [checked, setChecked] = useState(false);

    const onSignIn = () => {
        navigation.navigate('Signin')
    };

    const onBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <AuthHeader onBackPress={onBack} title="Registrarse" />
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
                    <Text onPress={onSignIn} style={styles.footerLink}> Inicia Sesión</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Signup);