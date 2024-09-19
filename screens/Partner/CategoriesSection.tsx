import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import CustomTooltip from '../../components/CustomTooltip';
import {
  faBookOpen,
  faBaseball,
  faDumbbell,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const CategoriesSection = () => {
  return (
    <View style={[styles.flexCol, styles.categoriesContainer]}>
      <Text style={styles.categoriesTitle}>Popular Categories</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={[styles.flexRow, styles.categoriesSection]}>
          <CustomTooltip
            popover={
              <Text style={styles.tooltipStyle}>12 posts playing category</Text>
            }
            content={
              <View style={[styles.flexRow, styles.categoryItem]}>
                <FontAwesomeIcon
                  style={styles.categoryIcon}
                  icon={faBookOpen}
                  color="#fa9649"
                />
                <Text style={styles.categoryText}>Studying</Text>
              </View>
            }
          />
          <CustomTooltip
            popover={
              <Text style={styles.tooltipStyle}>12 posts playing category</Text>
            }
            content={
              <View style={[styles.flexRow, styles.categoryItem]}>
                <FontAwesomeIcon
                  style={styles.categoryIcon}
                  icon={faBaseball}
                  color="#fa9649"
                />
                <Text style={styles.categoryText}>Playing</Text>
              </View>
            }
          />
          <CustomTooltip
            popover={
              <Text style={styles.tooltipStyle}>12 posts playing category</Text>
            }
            content={
              <View style={[styles.flexRow, styles.categoryItem]}>
                <FontAwesomeIcon
                  style={styles.categoryIcon}
                  icon={faDumbbell}
                  color="#fa9649"
                />
                <Text style={styles.categoryText}>Gym</Text>
              </View>
            }
          />
          <CustomTooltip
            popover={
              <Text style={styles.tooltipStyle}>12 posts playing category</Text>
            }
            content={
              <View style={[styles.flexRow, styles.categoryItem]}>
                <FontAwesomeIcon
                  style={styles.categoryIcon}
                  icon={faDumbbell}
                  color="#fa9649"
                />
                <Text style={styles.categoryText}>Gym</Text>
              </View>
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    gap: 10,
  },
  categoriesTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3a395d',
  },
  categoriesSection: {
    padding: 5,
    gap: 10,
    borderWidth: 0,
  },
  categoryItem: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: '#f9f9f9',
    borderWidth: 1,
    padding: 15,
    gap: 5,
  },
  categoryIcon: {
    width: 16,
    height: 16,
  },
  categoryText: {
    fontSize: 16,
    color: '#6e6d8f',
  },
  tooltipStyle: {
    color: '#6e6d8f',
    margin: 5,
  },
  flexCol: {flexDirection: 'column'},
  flexRow: {flexDirection: 'row'},
});

export default CategoriesSection;
