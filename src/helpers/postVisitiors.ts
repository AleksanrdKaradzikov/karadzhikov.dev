import countapi from 'countapi-js';
import { SITE_HOST_NAME } from '../constants/constants';

const NAMESPACE = SITE_HOST_NAME;

export const setItemCount = (slug: string, onSusses: (param: countapi.Result) => void = () => null) => {
    countapi.hit(NAMESPACE, slug).then(onSusses);
};

export const getItemCount = (slug: string, onSusses: (param: countapi.Result) => void = () => null) => {
    countapi.get(NAMESPACE, slug).then(onSusses);
};
