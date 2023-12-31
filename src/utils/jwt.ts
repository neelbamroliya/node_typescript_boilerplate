import { sign, verify } from 'jsonwebtoken';
import environment from '../configs';
import { IJWTSign, IJWTTokens } from '../types';

export const signJWT = (payload: IJWTSign): IJWTTokens => {
    const access = sign(payload, environment.atSecret, { expiresIn: '1h' });
    const refresh = sign(payload, environment.rtSecret, { expiresIn: '7d' });

    return {
        accessToken: access,
        refreshToken: refresh,
    };
};

export const verifyAccessJWT = (token: string): IJWTSign => {
    return verify(token, environment.atSecret) as IJWTSign;
};
