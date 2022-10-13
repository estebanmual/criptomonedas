import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Cotizacion = ({resultado}) => {
  if (Object.keys(resultado).length === 0) {
    return null;
  }

  return (
    <View style={styles.resultado}>
      <Text style={[styles.texto, styles.precio]}>
        <Text style={styles.span}>{resultado.PRICE}</Text>
      </Text>
      <Text style={[styles.texto, styles.precio]}>
        Precio más alto del día:{' '}
        <Text style={styles.span}>{resultado.HIGHDAY}</Text>
      </Text>
      <Text style={[styles.texto, styles.precio]}>
        Precio más bajo del día:{' '}
        <Text style={styles.span}>{resultado.LOWDAY}</Text>
      </Text>
      <Text style={[styles.texto, styles.precio]}>
        Variación últimas 24 horas:{' '}
        <Text style={styles.span}>{resultado.CHANGEPCT24HOUR}</Text>
      </Text>
      <Text style={[styles.texto, styles.precio]}>
        Última actualización:{' '}
        <Text style={styles.span}>{resultado.LASTUPDATE}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultado: {},
  texto: {},
  precio: {},
  span: {},
});

export default Cotizacion;
