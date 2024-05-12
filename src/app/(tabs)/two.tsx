import {Button, StyleSheet} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import {Text, View} from '@/components/Themed';
import {addDoc, collection, getFirestore} from "@firebase/firestore";
import {firebaseApp} from "@/firebase/firebaseConfig";

export default function TabTwoScreen() {

    const addData = async () => {
        const db = getFirestore(firebaseApp)
        const data = {
            name: "car",
            age: 19,
        }

        const col = collection(db, "data") //reference to collection
        // const document =doc(db, "data", "data1")
        await addDoc(col, data)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tab Two</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            <Button title="Test Insert to DB" onPress={addData}></Button>
            <EditScreenInfo path="app/(tabs)/two.tsx"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
