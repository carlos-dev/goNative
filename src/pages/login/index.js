/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StatusBar} from 'react-native';

import api from '../../services/api';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as LoginActions from '../../store/actions/login';

import {Container, Input, Button, ButtonText, Error} from './styles';

class Login extends Component {
  state = {username: ''};

  handleSubmit = async () => {
    const {username} = this.state;
    const {loginRequest} = this.props;

    loginRequest(username);
  };

  render() {
    const {username} = this.state;
    const {error} = this.props;

    return (
      <Container>
        {error && <Error>Usuário inexistente</Error>}
        <StatusBar translucent backgroundColor="transparent" />
        <Input
          value={username}
          onChangeText={text => this.setState({username: text})}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="digite seu usuário"
        />
        <Button onPress={this.handleSubmit}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
