import React, { Component } from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {CardSection } from './common';

class ListItem extends Component{
    onRowPress(){
     Actions.employeeEdit({employee: this.props.employee});
    }

    render() {
        const {name, shift, phone} = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
            <View style={styles.container}>
            <CardSection>
                <Text style= {styles.titleStyle}>
                    {name}
                </Text>
                <Text style= {styles.titleStyle}>
                    {shift}
                </Text>
                <Text style= {styles.titleStyle}>
                    {phone}
                </Text>
            </CardSection>
            </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
    },
};


export default ListItem;
