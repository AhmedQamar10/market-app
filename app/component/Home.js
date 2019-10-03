import React, { Component } from "react";
import ImageSlider from 'react-native-image-slider';
import { TouchableOpacity, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { categories } from '../actions/index';
import { connect } from "react-redux";
import axios from 'axios';

class Home extends Component {
  state = {
    loading: true,
  }
  componentDidMount() {
    axios.get(`https://5bcce576cf2e850013874767.mockapi.io/task/categories`,

      // ==== OR ====> https://api.myjson.com/bins/87i2x
    )
      .then(data => {
          this.setState({ loading: false })
          return this.props.categories(data)
      })
  }
  render() {
    if (this.state.loading) {
      return <ActivityIndicator
        style={styles.activityIndicator}
        size="large" />
    }
    return (
      <View style={styles.container}>
        <ImageSlider autoPlayWithInterval={3000}
          images={[
            require('../images/Capture1.png'),
            require('../images/Capture2.png'),
            require('../images/Capture3.png'),

          ]} />
        <TouchableOpacity style={{ paddingBottom: 10 }}
          onPress={() => this.props.navigation.navigate('categories')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Skip</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, {categories})(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginTop: 10,
    backgroundColor: "#1B9CFC",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    width: 100,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
    fontWeight: 'bold'
  },
});