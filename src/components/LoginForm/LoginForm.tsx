import React, { useReducer, useEffect } from 'react';
import {
  Panel,
  Form,
  Button,
  ButtonToolbar,
  Input,
} from 'rsuite';

import Logo from '../Logo/Logo';
import InputField from '../InputField/InputField';


import './LoginForm.scss';


//state type

type State = {
  username: string
  password: string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
};

const initialState: State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername':
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword':
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled':
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess':
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed':
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError':
      return {
        ...state,
        isError: action.payload
      };
  }
}

const LoginForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inputs = [
    {
      label: 'Email',
      icon: 'avatar',
      type: 'email',
      tooltip: 'введите email'
    },
    {
      label: 'Password',
      icon: 'lock',
      type: 'password',
      tooltip: 'введите пароль'
    }
  ];

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: false
      });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password]);

  const handleLogin = () => {
    if (state.username === 'abc@email.com' && state.password === 'password') {
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully'
      });
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password'
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange = (value: string) => {
    dispatch({ type: 'setUsername', payload: value });
  }

  const handlePasswordChange = (value: string) => {
    dispatch({ type: 'setPassword', payload: value });
  }

  return (
    <div className='login-form-wrapper'>
      <Panel
        header={<Logo />}
        style={{ width: 288, height: 380 }}
        className='login-form'
        shaded
      >
        <Form className='form' >

          {inputs.map((props, index) => (
            <InputField
              error={state.isError}
              // onChange here
              // onKeyPress here
              key={index}
              index={index}
              {...props}
            />
          ))}

          <ButtonToolbar className='toolbar'>
            <Button
              className='button'
              appearance="primary"
              type="submit"
              onClick={handleLogin}
              disabled={state.isButtonDisabled}
            >
              Войти
            </Button>
          </ButtonToolbar>


          {/* FIXME: move the onChange and onKeyPress methods to <InputField /> */}
          {/* then remove those <Input /> */}
          <Input
            error={state.isError}
            id="username"
            type="email"
            label="Username"
            placeholder="Username"
            onChange={handleUsernameChange}
            onKeyPress={handleKeyPress}
            style={{ height: 15, fontSize: 10, marginTop: 10 }}
          />

          <Input
            error={state.isError}
            id="password"
            type="password"
            label="Password"
            placeholder="Password"
            onChange={handlePasswordChange}
            onKeyPress={handleKeyPress}
            style={{ height: 15, fontSize: 10 }}
          />
        </Form>

      </Panel>
    </div>
  );
}

export default LoginForm;