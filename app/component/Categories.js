import React, { Component } from "react";
import { Text, Image, TouchableOpacity, View, StyleSheet } from "react-native";
import { Card } from 'react-native-elements';
import { connect } from "react-redux";
class Categories extends Component {
    render() {
        const { data } = this.props
        return (
            <View style={{ flex: 1 }}>
                <Text style={style.text_list_categories}>List the categories</Text>
                <View style={style.parent}>
                    {data.map((getcategories) => (
                        <TouchableOpacity key={getcategories.id} style={style.child}
                            onPress={() => this.props.navigation.navigate({
                                routeName: 'category_details',
                                params: {
                                    ProductsParam: getcategories.products,
                                    CategoryNameParam: getcategories.name
                                }
                            })
                            }
                        >
                            <Card containerStyle={style.card}>
                                <Image source={{ uri: getcategories.category_img }}
                                    style={style.image}
                                />
                                <Text style={style.text_name_category}>
                                    {getcategories.name}
                                </Text>
                            </Card>
                        </TouchableOpacity>))}
                </View>
            </View>
        );
    }
}
const mapStateToProps = (state) => ({
    data: state.getCategories.info.data
});
export default connect(mapStateToProps)(Categories)

const style = StyleSheet.create({
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    parent: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        //alignContent: 'center'
    },
    child: {
        width: '50%',
        //margin: '0%'
        aspectRatio: 1,
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
        borderRadius: 10
    },
    text_name_category: {
        paddingTop: 10,
        alignSelf: 'center'
    }
});