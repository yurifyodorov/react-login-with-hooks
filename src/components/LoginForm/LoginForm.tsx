import React, { useReducer, useEffect } from 'react';
import { 
  Panel,
  Form,
  Button,
  ButtonToolbar,
  Input
} from 'rsuite';

import InputField from '../InputField/InputField';
import TextField from '@material-ui/core/TextField';
import './LoginForm.scss';
import { stringify } from 'querystring';

//state type

type State = {
  username: string
  password:  string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
};

const initialState:State = {
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
  // const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

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

  // const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
  //   (event) => {
  //     dispatch({
  //       type: 'setUsername',
  //       payload: event.target.value
  //     });
  //   };

  const handleUsernameChange = (value: string) => {
    dispatch({ type: 'setUsername', payload: value });
  }

  const handlePasswordChange = (value: string) => {
    dispatch({ type: 'setPassword', payload: value });
  }

  // const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
  //   (event) => {
  //     dispatch({
  //       type: 'setPassword',
  //       payload: event.target.value
  //     });
  //   }

  return (
    <Panel 
      header="Panel title" 
      style={{ width: 288, height: 380 }}
      className='auth-panel'
      shaded
    >
      <Form className='form'>

          <InputField />


          <Input
            error={state.isError}
            id="username"
            type="email"
            label="Username"
            placeholder="Username"
            onChange={handleUsernameChange}
            onKeyPress={handleKeyPress}
          />
          
          <Input
            error={state.isError}
            id="password"
            type="password"
            label="Password"
            placeholder="Password"
            helperText={state.helperText}
            onChange={handlePasswordChange}
            onKeyPress={handleKeyPress}
          />

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
      </Form>
        
    </Panel>
  );
}

export default LoginForm;