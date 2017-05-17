import * as types from '../constants/actionTypes';

const initialState = {
    currency: 'USD',
    ticker: '',
    name: '',
    reddit: [],
    week: {
        high: '',
        low: '',
    },
    picUrl: '',
    dataSet: [],
    currentPrice: '',
    market: '',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

    case types.UPDATE_REDDIT_THREAD:
        return {
            ...state,
            reddit: action.thread
        }
    case types.UPDATE_DATA_SET:
        return {
            ...state,
            dataSet: action.dataSet   
        }
    case types.CURRENCY_PRICE:
        return {
            ...state,
            currentPrice: action.currentPrice
        }
    case types.UPDATE_COIN:
        return {
            ...state,
            ticker: action.ticker,
            name: action.name,
            picUrl: action.url,
            market: action.market,
        }
        default:
            return state;

    }
}