import React from 'react';
import { AppState, StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';
import { Router, Scene, Actions, Modal, ActionConst } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import createSagaMiddleware from 'redux-saga';
import Icon from 'react-native-vector-icons/FontAwesome';

import reducers from '../reducers';
//import rootSaga from '../sagas';

// connects react router to redux to pass scene info
const ReduxRouter = connect()(Router);
// sets up sagas for modularized asyncronicity
//const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk];
const store = compose(
    applyMiddleware(...middleware)
)(createStore)(reducers);

//sagaMiddleware.run(rootSaga);

// actions

// components
import Base from './Base';
import Splash from './Splash';

import { colors, defaults, fonts, mixins, variables } from '../styles';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'blue'
    },
    tabBar: {
        ...mixins.row,
        height: variables.HEADER_HEIGHT,
        borderTopWidth: 1,
        borderTopColor: colors.primaryLight,
        alignItems: 'center',
        color: colors.primary,
        backgroundColor: colors.secondary
    },
    title: {
        color: colors.primaryDark
    }
});

console.disableYellowBox = true;
 
class App extends Base {
    constructor(props, context) {
        super(props, context);
        this.autoBind();
    }
    componentWillMount() {
       

    }
    componentWillUnmount() {
        
    }
    
    
    render() {
        console.log('App render');

        return (
            <ReduxRouter>
                <Scene
                    key='root'
                    sceneStyle={styles.root}
                    hideNavBar
                    onEnter={this.updateTabBar}
                >
                    <Scene
                        key='Splash'
                        component={Splash}
                        title={'Splash'}
                    />
                </Scene>
            </ReduxRouter>
        );
    }
}

// injects global props at root level
function mapStateToProps({ auth, messages }) {
    return {
       
    };
}

function mapDispatchToProps(dispatch) {
    return {
        
    };
}

const ReduxApp = connect()(App);

// wraps App in redux provider
export default function AppWrapper() {
    return (
        <Provider store={store}>
            <ReduxApp />
        </Provider>
    );
}