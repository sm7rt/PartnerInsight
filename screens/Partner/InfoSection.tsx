import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {faBox, faEnvelopesBulk} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const InfoSection = () => {
  return (
    <View style={styles.infoContainer}>
      <View style={[styles.flexCol, styles.infoItem]}>
        <Text style={styles.infoTitle}>25-25-2024</Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <FontAwesomeIcon
            icon={faBox}
            color="#6e6d8f"
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>Partner Since</Text>
        </View>
      </View>
      <View style={[styles.flexCol, styles.infoItem]}>
        <Text style={styles.infoTitle}>40</Text>
        <View style={styles.flexRow}>
          <FontAwesomeIcon
            icon={faEnvelopesBulk}
            color="#6e6d8f"
            style={styles.infoIcon}
          />
          <Text style={styles.infoText}>Accountability Posts</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  infoItem: {
    flex: 1,
    backgroundColor: '#fbfbfb',
    borderRadius: 20,
    padding: 15,
    gap: 10,
  },
  infoTitle: {
    color: '#fa9649',
    fontWeight: 'bold',
    fontSize: 17,
  },
  infoIcon: {
    width: 12,
    height: 12,
  },
  infoText: {
    fontSize: 13,
    color: '#6e6d8f',
    marginLeft: 5,
  },
  flexCol: {flexDirection: 'column'},
  flexRow: {flexDirection: 'row'},
});

export default InfoSection;
