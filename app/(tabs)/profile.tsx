import {Image, StyleSheet, Platform, View, Button, TextInput} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Profile() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.reactLogo}
                />
            }>
            <View style={styles.formContainer}>

                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                />


                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                />


                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                />


                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                />


                <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry
                />


                <Button color={'rgb(29, 61, 71)'} title="Register" onPress={() => {}} />
            </View>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    formContainer: {
        marginTop: 20,
        gap: 12,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        fontSize: 16,
        color:'white'
    },
});
