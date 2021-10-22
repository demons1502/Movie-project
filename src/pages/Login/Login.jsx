import React, { useState, useReducer, useEffect } from 'react';

import PageHeader from '../../components/page-header/PageHeader';

import Button, { OutlineBlackButton } from '../../components/button/Button';

import './Login.scss';

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.includes('@') };
    }

    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') };
    }
    return { value: '', isValid: false };
};

const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 8 };
    }

    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 8 };
    }
    return { value: '', isValid: false };
};

function Login() {
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null,
    });

    const [passState, dispatchPass] = useReducer(passwordReducer, {
        value: '',
        isValid: null,
    });

    const { isValid: emailIsValid } = emailState;
    const { isValid: passIsValid } = passState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('Check');
            setFormIsValid(emailIsValid && passIsValid);
        }, 500);

        return () => {
            console.log('clean');
            clearTimeout(identifier);
        };
    }, [emailIsValid, passIsValid]);

    const emailChangeHandler = (e) => {
        console.log(emailState.value);
        dispatchEmail({ type: 'USER_INPUT', value: e.target.value });
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR' });
    };

    const passChangeHandler = (e) => {
        dispatchPass({ type: 'USER_INPUT', value: e.target.value });
    };

    const validatePassHandler = () => {
        dispatchPass({ type: 'INPUT_BLUR' });
    };
    return (
        <div className='container'>
            <PageHeader>Login</PageHeader>
            <div className='login-form'>
                <h3>Welcome to VKU Movies</h3>
                <form action=''>
                    <div className='login-form__control'>
                        <label htmlFor='email'>E-Mail</label>
                        <input
                            className={
                                emailState.isValid === false ? 'blur' : ''
                            }
                            type='email'
                            id='email'
                            placeholder='Enter your Email'
                            value={emailState.value}
                            onChange={emailChangeHandler}
                            onBlur={validateEmailHandler}
                        />
                    </div>
                    <div className='login-form__control'>
                        <label htmlFor='pass'>Password</label>
                        <input
                            className={
                                passState.isValid === false ? 'blur' : ''
                            }
                            type='password'
                            id='password'
                            placeholder='Enter your password'
                            value={passState.value}
                            onChange={passChangeHandler}
                            onBlur={validatePassHandler}
                        />
                    </div>
                    <div className='actions'>
                        <Button disabled={!formIsValid} className='small'>
                            Login
                        </Button>
                        <OutlineBlackButton className='small'>
                            Sign In
                        </OutlineBlackButton>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
