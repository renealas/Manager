import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router navigationBarStyle={styles.headerStyle} titleStyle={styles.wordStyle}>
            <Stack key="root" headerLayoutPreset={'center'} hideNavBar >
                <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Inicio de Session" initial />
                </Scene>
                <Scene key="main">
                <Scene
                rightTitle="Añadir"
                styles = {styles.wordStyle}
                onRight={() => Actions.employeeCreate()}
                key="employeeList"
                component={EmployeeList}
                title="Empleados"
                initial
                />
                <Scene
                key="employeeCreate"
                component={EmployeeCreate}
                title="Crear Empleado"
                />
                <Scene
                key="employeeEdit"
                component={EmployeeEdit}
                title="Editar Empleado"
                />
                </Scene>
            </Stack>
        </Router>
    );
};

const styles = {
    headerStyle: {
        backgroundColor: '#2C75FF',
    },
    wordStyle: {
        fontWeight:'bold',
        color: 'white',
    },
};

export default RouterComponent;
