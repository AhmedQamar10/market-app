import React, { Component } from "react";
import { Text, Image, TouchableOpacity, View, StyleSheet } from "react-native";
import { Card } from 'react-native-elements';

class CategoryDetails extends Component {

  render() {
    const category_name = this.props.navigation.getParam('CategoryNameParam')
    const products = this.props.navigation.getParam('ProductsParam')

    return (
      <View style={{ flex: 1 }}>
        <Text style={style.text_list_categories}>List {category_name}</Text>
        <View style={style.parent}>
          {products.map((getproducts) => (
            <TouchableOpacity key={getproducts.id} style={style.child}
              onPress={() => this.props.navigation.navigate({
                routeName: 'product_details',
                params: {
                  ProductNameParam: getproducts.name
                }
              })
              }
            >
              <Card containerStyle={style.card}>
                <Image source={{ uri: getproducts.product_img }}
                  style={style.image}
                />
                <Text style={style.text_name_category}>
                  {getproducts.name}
                </Text>
                <Text style={style.text_name_category}>
                  {getproducts.weight}
                </Text>
                <Text style={style.text_name_category}>
                  {getproducts.price}
                </Text>
              </Card>
            </TouchableOpacity>))}
        </View>
      </View>

    );
  }
}
export default CategoryDetails

const style = StyleSheet.create({
  parent: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  child: {
    width: '50%',
    aspectRatio: 0.8,
  },
  text_list_categories: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 25,
    paddingTop: 40
  },
  card: {
    backgroundColor: '#f5f6fa',
    borderRadius: 20
  },
  image: {
    height: 100,
    width: '100%',
    borderRadius:10
  },
  text_name_category: {
    paddingTop: 10,
    alignSelf: 'center'
  }
});
