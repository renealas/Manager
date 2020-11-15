import React, {Component} from 'react';
import { Picker, Text, View } from 'react-native';
import {connect} from 'react-redux';
import { employeeUpdate} from '../actions';
import {CardSection, Input} from './common';

class EmployeeForm extends Component {
    render() {
        return (
            <>
                <CardSection>
                    <Input
                    label="Nombre"
                    placeholder="Nombre"
                    value = {this.props.name}
                    onChangeText={text => this.props.employeeUpdate({prop: 'name', value: text})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                    label="Telefono"
                    placeholder="2284-1900"
                    value = {this.props.phone}
                    onChangeText={text => this.props.employeeUpdate({prop: 'phone', value: text})}
                    />
                </CardSection>
                <CardSection>
                    <Text style={styles.labelPicker}>Turno</Text>
                    <Picker
                    style = {styles.pickerStyle}
                    selectedValue = {this.props.shift}
                    onValueChange = {day => this.props.employeeUpdate({prop: 'shift', value: day})}
                    >
                        <Picker.Item label="Lunes" value="Lunes" />
                        <Picker.Item label="Martes" value="Martes" />
                        <Picker.Item label="Miercoles" value="Miercoles" />
                        <Picker.Item label="Jueves" value="Jueves" />
                        <Picker.Item label="Viernes" value="Viernes" />
                        <Picker.Item label="Sabado" value="Sabado" />
                        <Picker.Item label="Domingo" value="Domingo" />
                    </Picker>
                </CardSection>
            </>
        );
    }
}

const styles = {
    backgrounContainer: {
        backgroundColor: '#003f5c',
        flex:1,
    },
    pickerStyle: {
        flex: 1,
        alignContent: 'center',
         alignItems: 'center',
         color: 'white',
         borderColor: '#2C75FF',
         borderWidth: 2,
         borderRadius: 25,
         fontSize: 20,
         backgroundColor: 'white',
    },
    labelPicker: {
        fontSize: 20,
        paddingLeft: 20,
        paddingRight:20,
        color: 'white',
        fontWeight: 'bold',
        },
};

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);
