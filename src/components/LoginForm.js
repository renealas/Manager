import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser}  from '../actions';
import { Card, CardSection, Input, Button, Logo, Spinner} from './common';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const {email, password} = this.props;

        this.props.loginUser({email, password});
    }

    renderError(){
        if (this.props.error){
            return (
                <View style={styles.container}>
                    <Text style={styles.errorMessage}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton(){
        if (this.props.loading){
            return <Spinner size="large" />;
        }
        return (
            <Button
                    title="Iniciar Session"
                    onPress={this.onButtonPress.bind(this)}
                    />
        );
    }

    render(){
        return (
            <ScrollView style={styles.backgrounContainer}>
            <Card>
                <CardSection>
                    <Logo source="https://www.pinclipart.com/picdir/middle/66-666389_birds-logo-template-for-clip-royalty-free-download.png"/>
                </CardSection>
                <CardSection>
                    <Input
                    label="Correo"
                    placeholder="email@gmail.com"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                    securetextentry
                    label="Contraseña"
                    placeholder="Contraseña"
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
            </ScrollView>
        );
    }
}

const styles = {
    errorMessage: {
        fontSize: 23,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'red',
    },
    container: {
        backgroundColor: '#003f5c',
        marginTop: 10,
        marginBottom: 10,
    },
    backgrounContainer: {
        backgroundColor: '#003f5c',
        flex:1,
    },
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading,
    };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser,
})(LoginForm);
