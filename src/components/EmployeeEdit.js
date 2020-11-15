import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import { ScrollView } from 'react-native-gesture-handler';
import {Card, CardSection, Button, Confirm} from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    state = {showModal: false};

    componentDidMount() {
        _.each(this.props.employee, (value, prop) =>{
            this.props.employeeUpdate({prop,value});
        });
    }

    onButtonPress(){
        const {name, phone, shift} = this.props;

        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
    }

    onTextPress(){
        const {phone, shift} = this.props;

        Communications.text(phone, `Tu proximo Horario es ${shift}`);
    }

    onAccept(){
        const {uid} = this.props.employee;

        this.props.employeeDelete({uid});
    }

    onDecline(){
        this.setState({showModal: false});
    }

    render() {
        return (
            <ScrollView style={styles.backgrounContainer}>
                <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button
                    title="Editar"
                    onPress={this.onButtonPress.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Button
                    title="Enviar SMS Horario"
                    onPress={this.onTextPress.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Button
                    title="Despedir a Empleado"
                    onPress={() => this.setState({showModal: !this.state.showModal})}
                    />
                </CardSection>
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Estas Seguro que quieres Borrar a este Usuario?
                </Confirm>
            </Card>
            </ScrollView>
        );
    }
}

const styles = {
    backgrounContainer: {
        backgroundColor: '#003f5c',
        flex:1,
    },
};

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);
