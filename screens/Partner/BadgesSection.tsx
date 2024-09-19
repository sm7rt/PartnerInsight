import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const BadgesSection = () => {
  return (
    <View style={styles.badgesContainer}>
      <Text style={styles.badgesTitle}>Badges Earned</Text>
      <View style={[styles.flexRow, styles.badgesSection]}>
        <View style={styles.badgeItem}>
          <Image
            style={styles.badgeImage}
            source={require('../../assets/images/badge1.png')}
          />
          <Text style={styles.badgeText}>Good Friend</Text>
        </View>
        <View style={styles.badgeItem}>
          <Image
            style={styles.badgeImage}
            source={require('../../assets/images/badge2.png')}
          />
          <Text style={styles.badgeText}>20 Days Streak</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  badgesContainer: {
    gap: 10,
  },
  badgesSection: {
    gap: 10,
  },
  badgesTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3a395d',
  },
  badgeItem: {
    alignItems: 'center',
  },
  badgeImage: {
    width: 128,
    height: 146,
  },
  badgeText: {
    position: 'absolute',
    color: '#fa9649',
    fontWeight: '500',
    fontSize: 14,
    bottom: 20,
  },
  flexRow: {
    flexDirection: 'row',
  },
});

export default BadgesSection;
