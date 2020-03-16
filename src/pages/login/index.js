import React, {Component} from 'react';
import {StatusBar} from 'react-native';

import {Container, Input, Button, ButtonText, Error} from './styles';

export default class Login extends Component {
  state = {username: ''};

  handleSubmit = () => {
    const {username} = this.state;
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
