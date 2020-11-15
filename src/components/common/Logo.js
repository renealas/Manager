import React from 'react';
import { View, Image } from 'react-native';

const Logo = ({ source }) => {
    return (
        <View style={styles.thumbnailContainerStyle}>
            <Image source={{uri: source}} style={styles.thumbnailStyle} />
        </View>
    );
};

const styles = {
    thumbnailContainerStyle: {
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    thumbnailStyle:{
        marginTop: 10,
        marginBottom: 10,
        height:200,
        width: 200,
        backgroundColor:'#fff',
       },
};

export { Logo };
