import { setLanguage } from 'react-redux-multilang'

// change language from anywhere
setLanguage('ru')

// sample with button and onClick
<button onClick={() => setLanguage('ru')}>Change language to Russian</button>
<button onClick={() => setLanguage('en')}>Change language to English</button>

// also you can dispatch action like this
store.dispatch({
    type: 'SET_REDUX_LANGUAGE',
    code: 'ru'
})