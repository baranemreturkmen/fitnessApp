import React, {useState} from 'react';
import { SafeAreaView, Alert } from 'react-native';

import Input  from '../components/Input';
import Button from '../components/Button';

function MemberSign({navigation}){
    
    /*label, placeholder, onChangeText bunlar benim oluşturduğum custom component'de oluşturmuş
        olduğum propertyler.*/

    /*es6 syntatic sugar (text) => setUserName(text) yerine setUserName'i direkt olarak 
        onChangeText'e verebilirim.
        Ve yine json objemde key ve value'larım aynı ise eğer userName: userName, şeklinde
        uzun uzun bu şekilde yazmak yerine sadece userName, olarak bırakabilirim.*/

    const [userName, setUserName] = useState(null);
    const [userSurname, setSurname] = useState(null);
    const [userAge, setAge] = useState(null);
    const [userHeight, setHeight] = useState(null);
    const [userWeight, setWeight] = useState(null);
    const [userMail, setMail] = useState(null);

    const handleSubmit = () => {

        if(!userName || !userSurname || !userAge || !userHeight || !userWeight || !userMail){
            Alert.alert('Fitness Salonu', 'Bilgiler boş bırakılamaz!');
            return;
        }

        const user = {
            userName,
            userSurname,
            userAge,
            userHeight,
            userWeight,
            userMail,
        };

        navigation.navigate('MemberResultScreen',{user});
    }

    return(
        <SafeAreaView>
            <Input label="Üye Adı"
                placeholder="Üye adını giriniz..."
                onChangeText={setUserName}></Input>
            <Input label="Üye Soyadı"
                placeholder="Üye soyadını giriniz..."
                onChangeText={setSurname}></Input>
            <Input label="Üye Yaşı"
                placeholder="Üye yaşını giriniz..."
                onChangeText={setAge}></Input>
            <Input label="Üye Boyu"
                placeholder="Üye boyunu giriniz..."
                onChangeText={setHeight}></Input>
            <Input label="Üye Kilosu"
                placeholder="Üye kilosunu giriniz..."
                onChangeText={setWeight}></Input>
            <Input label="Üye E-postası"
                placeholder="Üye e-posta adresini giriniz..."
                onChangeText={setMail}></Input>
            <Button text="Kaydı Tamamla" onPress={handleSubmit}></Button>
        </SafeAreaView>
        
    )
}

export default MemberSign;