import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '@globalStyles';

type SubHeadingProps = ScrollView['props'] & {
  content: string;

};

export const SubHeading = ({ content }: SubHeadingProps) => {
  return (
    <View>
      <Text style={[globalStyles.textCreate ]}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
