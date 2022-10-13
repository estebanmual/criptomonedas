import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import axios from 'axios';

const Formulario = () => {
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [criptomonedas, setCriptomonedas] = useState('');

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resultado = await axios.get(url);
      setCriptomonedas(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  const obtenerMoneda = divisa => {
    setMoneda(divisa);
  };

  return (
    <View>
      <Text style={styles.label}>Moneda</Text>
      <Picker
        onValueChange={divisa => obtenerMoneda(divisa)}
        selectedValue={moneda}>
        <Picker.Item label="- Seleccione -" value="" />
        <Picker.Item label="Dólar Estadounidense" value="USD" />
        <Picker.Item label="Peso Mexicano" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>
      <Text style={styles.label}>Criptomoneda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    fontSize: 22,
    marginVertical: 20,
    textTransform: 'uppercase',
  },
});

export default Formulario;
