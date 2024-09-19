import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ProfileSection from './ProfileSection.tsx';
import InfoSection from './InfoSection.tsx';
import CategoriesSection from './CategoriesSection.tsx';
import BadgesSection from './BadgesSection.tsx';

const Partner = () => (
  <ScrollView>
    <View style={styles.container}>
      <ProfileSection />
      <InfoSection />
      <CategoriesSection />
      <BadgesSection />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 15,
    gap: 30,
    backgroundColor: '#fefefe',
  },
});

export default Partner;
