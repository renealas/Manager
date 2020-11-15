import React, {Component} from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { ScrollView } from 'react-native-gesture-handler';
import {Card, CardSection, Button} from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component{
    onButtonPress(){
        const {name, phone, shift} = this.props;

        this.props.employeeCreate({name, phone, shift: shift || 'Lunes'});
    }

    render () {
        return (
            <ScrollView style={styles.backgrounContainer}>
                <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button
                    title="Guardar"
                    onPress={this.onButtonPress.bind(this)}
                    />
                </CardSection>
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

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);
