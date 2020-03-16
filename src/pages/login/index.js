import React, {Component} from 'react';
import {StatusBar} from 'react-native';

import api from '../../services/api';

import {Container, Input, Button, ButtonText, Error} from './styles';

export default class Login extends Component {
  state = {username: ''};

  handleSubmit = async () => {
    const {username} = this.state;

    try {
      await api.get(`/users/${username}`).then(data => console.log(data));
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {username} = this.state;

    return (
      <Container>
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
