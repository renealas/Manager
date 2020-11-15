import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderRadius: 2,
        borderBottomWidth: 0,
        shadowOffset: { width: 0, height: 2 },
        shadowOpcacity: 0.1,
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export { Card };
