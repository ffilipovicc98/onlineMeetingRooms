import './App.css';
import {
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation,
} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import JoinPage from './components/JoinPage/JoinPage';
import RoomPage from './components/RoomPage/RoomPage';
import { AnimatePresence } from 'framer-motion';
import PageContainer from './components/PageContainer/PageContainer';

const springType = {
    type: 'spring',
    bounce: 0,
    duration: 1,
    restDelta: 0.005,
};

const App = () => {
    const history = useHistory();
    const location = useLocation();
    const uslov1 =
        location.pathname === '/join' &&
        (location.state === undefined ||
            location.state.previousPage !== 'home');
    const uslov2 =
        location.pathname === '/room' &&
        (location.state === undefined ||
            location.state.previousPage !== 'join');
    let shoudRedirectToHomePage = false;
    if (uslov1 || uslov2) {
        shoudRedirectToHomePage = true;
    }
    const variantsForAnimatingPages = {
        initialState: {
            x: '100vw',
            transition: springType,
        },
        animateState: {
            x: '0',
            transition: springType,
        },
        exitState: {
            x: '-100vw',
            transition: springType,
        },
    };
    if (location.pathname === '/' && location.state === undefined) {
        variantsForAnimatingPages.initialState = {
            scale: 0,
            transition: springType,
        };
        variantsForAnimatingPages.animateState = {
            scale: 1,
            transition: springType,
        };
    }
    console.log(location.state);
    if (location.pathname === '/room') {
        variantsForAnimatingPages.exitState = {
            x: '100vw',
            transition: springType,
        };
    }
    if (
        location.pathname === '/' &&
        location.state !== undefined &&
        location.state.previousPage === 'room'
    ) {
        console.log('kur');
        variantsForAnimatingPages.initialState = {
            x: '-100vw',
            transition: springType,
        };
        variantsForAnimatingPages.animateState = {
            x: '0',
            transition: springType,
        };
    }
    return (
        <div className='App'>
            {shoudRedirectToHomePage ? (
                <Redirect to={{ pathname: '/', state: undefined }} />
            ) : (
                <AnimatePresence>
                    <Switch location={location} key={location.pathname}>
                        <Route
                            exact
                            path='/'
                            render={(routeProps) => (
                                <PageContainer
                                    variantsForAnimatingPages={
                                        variantsForAnimatingPages
                                    }
                                    key={routeProps.location.pathname}
                                >
                                    <HomePage {...routeProps} />
                                </PageContainer>
                            )}
                        />
                        <Route
                            exact
                            path='/join'
                            render={(routeProps) => (
                                <PageContainer
                                    variantsForAnimatingPages={
                                        variantsForAnimatingPages
                                    }
                                    key={routeProps.location.pathname}
                                >
                                    <JoinPage {...routeProps} />
                                </PageContainer>
                            )}
                        />
                        <Route
                            exact
                            path='/room'
                            render={(routeProps) => (
                                <PageContainer
                                    variantsForAnimatingPages={
                                        variantsForAnimatingPages
                                    }
                                    key={routeProps.location.pathname}
                                >
                                    <RoomPage {...routeProps} />
                                </PageContainer>
                            )}
                        />
                        <Redirect to='/' />
                    </Switch>
                </AnimatePresence>
            )}
        </div>
    );
};

export default App;
