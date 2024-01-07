import React from 'react';
import { View, Button } from 'react-native';
import NfcManager, {Ndef, NfcEvents} from 'react-native-nfc-manager';

export const HomePage = ({navigation}) => {
    return (
        <Button
            title="Connect"
            onPress={() => navigation.navigate('ScanNFC')}
        />
    );
};

export const ScanNFC = ({navigation, route}) => {
    React.useEffect(() => {
        NfcManager.start()
            .catch((err) => {
                console.warn(err);
                // Handle the error here
            });
        NfcManager.setEventListener(NfcEvents.DiscoverTag, readNfcData);
        return () => {
            NfcManager.stop();
            NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
        };
    }, []);

    const readNfcData = (tag) => {
        if (tag.ndefMessage && tag.ndefMessage[0]) {
            const parsed = Ndef.parseUri(tag.ndefMessage[0]);
            if (parsed) {
                const uid = parsed.id;

                if (uid === '2A:CE:8B:DD') {
                    alert('Welcome Dylan A !');
                }
            }
        }
    };

    return (
        <View>
            <Button title="Stop Scanning" onPress={() => NfcManager.setEventListener(NfcEvents.DiscoverTag, null)} />
        </View>
    );
};