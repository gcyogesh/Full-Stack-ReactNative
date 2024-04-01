import React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import Footer from './Footer';

const Layout = ({ children, header }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      {header && header}
      <View style={styles.content}>{children}</View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  content: {
    flex: 1,
    marginBottom: 20, // Adjust this value according to the height of your footer
    
  },
});

export default Layout;
