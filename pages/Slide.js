import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions,StatusBar } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8;

 class Slide extends Component {
    render() {
        const { images } = this.props;
        if (images && images.length) {
            return (
                <View style={styles.scrollContainer}>
                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={true} >
                        {images.map((image, i) => (
                            <Image style={styles.image} source={image.source} key={i} />
                        ))}
                    </ScrollView>
                </View>
            );
        }
        console.log('Please provide images');
        return null;
    }
}

export default class App extends Component {
    render() {
        const images = [
            {
                source: {
                    uri: 'https://cdn.pixabay.com/photo/2018/03/11/20/42/mammals-3218028__340.jpg',
                },
            },
            {
                source: {
                    uri: 'https://cdn.pixabay.com/photo/2018/03/12/14/03/flower-3219718__340.jpg',
                },
            },
            {
                source: {
                    uri: 'https://cdn.pixabay.com/photo/2018/03/04/22/37/orange-3199462__340.jpg',
                },
            },
            {
                source: {
                    uri: 'https://cdn.pixabay.com/photo/2018/03/22/17/15/strawberries-3251153__340.jpg',
                },
            },

        ];

        return (
            <View style={styles.container}>
                <Slide images={images}  />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
    },
    scrollContainer: {
        height,
    },
    image: {
        width,
        height,
    },
});
