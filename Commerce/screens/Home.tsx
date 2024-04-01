import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Layout from '../components/Layout/Layout';
import Category from '../components/category/Category';
import Banner from '../components/banner/Banner';
import Products from '../components/products/Products';
import Header from '../components/Layout/Header';

const Home = () => {
  return (
    <Layout header={<Header />}>
      <ScrollView>
        <Category />
        <Banner />
        <Products />
      </ScrollView>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
