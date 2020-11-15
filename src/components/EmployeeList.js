import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList, LogBox, Text, View} from 'react-native';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';
import {CardSection} from '../components/common';

class EmployeeList extends Component{
    componentDidMount(){
        const { employeesFetch } = this.props;
    employeesFetch();
    }

    render () {
        LogBox.ignoreLogs(['Warning: ...']);
        return (
            <View style={styles.backgrounContainer}>
            <View style={styles.container}>
            <CardSection>
                <Text style= {styles.titleStyle}>
                    Nombre
                </Text>
                <Text style= {styles.titleStyle}>
                    Horario
                </Text>
                <Text style= {styles.titleStyle}>
                    Telefono
                </Text>
            </CardSection>
            </View>
            <FlatList
              data={this.props.employees}
              renderItem={employee => <ListItem employee={employee.item} />}
              keyExtractor={employee => employee.uid}
            />
            </View>
          );
    }
}

const styles = {
    backgrounContainer: {
        backgroundColor: '#003f5c',
        flex:1,
    },
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '30%',
    },
};

const mapStateToProps = state => {
    const employees = _.map(state.employees, (values, uid) => ({ ...values, uid }));
  return { employees };
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
