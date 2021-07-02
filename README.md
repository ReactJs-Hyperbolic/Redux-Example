# Redux Process

## Step 1: **Create Reducers**

- within _state/reducers/accountReducer.js_
- Function that returns state within the /reducer

```JavaScript
const reducer = (state = 0, action ) => {
    Switch(action.type) {
        case "deposite":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        default:
            return state;
    }
}

export default reducer;
```

## Step 2: **Combine Reducers**

- within _state/reducers/index.js_
- Even if there is only one reducer such as this example
- Requires importing {combineReducers} from 'redux'
- As well as our reducer from accountReducer

```JavaScript
import {combineReducers} from 'redux'
import accountReducer from './accountReducer'

const reducers = combineReducers({
    // Takes in a key:value pair
    account: accountReducer
})

// Export the combined reducers
export default reducers;
```

## Step 3: **Create Store**

- within _state/store.js_

```JavaScript
import {createStore} from 'redux'
import reducers from './reducers/index.js'

export const store = createStore(
    reducers,
    {}
);
```

## Step 4: **Provide our App with access to Store (state)**

- within _src/index.js_
- Wrap our App in a Provider which contains the data in the store
- Send the Store data through as prop to Provider

```JavaScript
import { Provider } from 'react-redux';
import { store } from './state/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

## Step 5: **Create Action-Creators to update Store**

- within new dir _state/action-creators/index.html_
- Adds the ability to update our Store
- Function that Dispatches an Action to the Reducer which interprets the Action to manipulate the Store
- Usually have different files for individual Actions but will use index.html in this smaller example

### (First Action-Creator)

```JavaScript
// Define the action which takes in a parameter
export const depositMoney = (amount) => {
    // Create an Action & Dispatch it (by returning another function)
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        });
    }
}
```

### (Second Action-Creator)

```JavaScript
export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}
```

## Step 6: **Combine Action-Creators in a 'central' .js file (index.js)**

- within _src/state/index.js_
- export everything (\*) from _./action-creators/index_ as 'actionCreators'
- the following line will house all of our actions

```JavaScript
export * as actionCreators from './action-creators/index.js'
```

## Step 7: **Use the Actions inside the App.js**

- useDispatch within the _src/App.js_

```JavaScript
import { useSelector, useDispatch } from 'react-redux'

const dispatch = useDispatch();
```

## Step 8: **Bind all Action-Creators and provide it with the previously defined variable (dispatch)**

- requires 'bindActionCreators' method from redux
- required pulling in all of our action creators as well

```JavaScript
import { bindActionCreators } from 'redux'
// import the following created and exported in Step 6
import { actionCreators } from './state/index'

// Create a new variable with bindedActionCreators passing in the actionCreators and the dispatch created in the previous Step
const AC = bindActionCreators(actionCreators, dispatch)
```
