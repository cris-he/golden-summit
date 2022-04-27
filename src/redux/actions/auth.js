import {
    SIGN_IN,
    SIGN_IN_SUCCESS,
    SIGN_OUT,
    SIGN_OUT_SUCCESS,
    SIGN_UP,
    SIGN_UP_SUCCESS
} from '../constants/action-types';


export const signUp = (user) => {
    return {
        type: SIGN_UP,
        data: user
    };
};

export const signInSuccess = (user) => {
    console.log("auth-action: signInSuccess", user);
    return {
        type: SIGN_IN_SUCCESS,
        data: user
    }
};

export const signIn = (user) => {
    console.log('auth-action: signIn', user);
    return {
        type: SIGN_IN,
        data: user
    };
};

export const signUpSuccess = (user) => {
    return {
        type: SIGN_UP_SUCCESS,
        data: user
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const signOutSuccess = () => {
    return {
        type: SIGN_OUT_SUCCESS,
    }
};