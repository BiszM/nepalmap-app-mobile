import React from 'react';
import { Text, Dimensions, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import BarChart from './BarChart';

const BarChartCard = ({
  mainValue,
  mainLabel,
  barChartHeight,
  barChartTitle,
  data
}) => {
  return (
    <Card
      containerStyle={{
        width: Dimensions.get('screen').width - 20,
        margin: 0
      }}
    >
      {mainValue && <Text style={styles.mainValue}>{mainValue}</Text>}
      {mainLabel && <Text style={styles.mainLabel}>{mainLabel}</Text>}
      <Text style={styles.barChartTitle}>{barChartTitle}</Text>
      <BarChart height={barChartHeight} width={350} data={data} />
    </Card>
  );
};

const styles = StyleSheet.create({
  mainValue: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  mainLabel: {
    fontSize: 20
  },
  barChartTitle: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default BarChartCard;
