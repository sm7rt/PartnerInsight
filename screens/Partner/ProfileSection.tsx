import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import CustomTooltip from '../../components/CustomTooltip';
import {faFire} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const ProfileSection = () => {
  return (
    <View style={styles.profileContainer}>
      <Image
        source={require('../../assets/images/partner.png')}
        style={styles.partnerPic}
      />
      <CustomTooltip
        popover={<Text style={styles.tooltipStyle}>Longest streak</Text>}
        content={
          <View style={[styles.flexRow, styles.streakContainer]}>
            <FontAwesomeIcon icon={faFire} color="#fa9649" />
            <Text style={styles.streakText}>23</Text>
          </View>
        }
      />
      <Text style={styles.name}>Alex Carter</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    padding: 20,
  },
  partnerPic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: -15,
  },
  streakContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    fontSize: 15,
    borderRadius: 50,
    borderColor: '#f9f9f9',
    borderWidth: 1,
    padding: 5,
    gap: 5,
  },
  streakText: {
    fontWeight: 'bold',
    color: '#fa9649',
  },
  name: {
    fontSize: 20,
    color: '#6e6d8f',
    marginTop: 20,
  },
  tooltipStyle: {
    color: '#6e6d8f',
    margin: 5,
  },
  flexRow: {
    flexDirection: 'row',
  },
});

export default ProfileSection;
