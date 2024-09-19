import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

type HeaderProps = {
  handleBack?: () => void;
  handleUnmatch?: () => void;
};

const Header: React.FC<HeaderProps> = ({handleBack, handleUnmatch}) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={handleBack}>
      <Image
        source={require('../assets/icons/back.png')}
        style={{width: 24, height: 24}}
      />
    </TouchableOpacity>
    <Text style={styles.title}>Partner Insight</Text>
    <TouchableOpacity onPress={handleUnmatch}>
      <Image
        source={require('../assets/icons/unmatch.png')}
        style={{width: 24, height: 24}}
      />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: '#3a395d',
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default Header;
