import { PROMO_CODE } from './types';

export conts handleChange = e => dispatch => {
    dispatch({
        type: PROMO_CODE,
        payload: e.target.value

    });
};