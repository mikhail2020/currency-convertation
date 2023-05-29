import React from 'react';
import Main from '../Main/Main';
import useAppLogic from './AppLogic';
import { IAppProps } from './AppInterface';
import { Switch } from "react-router-dom";
import { Route } from 'react-router';
import Converter from '../Converter/Converter';
import Navigation from '../Navigation/Navigation';
import Container from '@mui/material/Container';




const App: React.FC<IAppProps> = (props) => {
    const logic = useAppLogic(props);

    return (<>
        <Container>

            <Navigation />
            <Switch>
                <Route exact path="/" >
                    <Main propsToMain={logic.propsToMain} />
                </Route>
                <Route exact path="/conversion" >
                    <Converter rates={logic.propsToMain.rates} />
                </Route>
            </Switch>
        </Container>

    </>)
}

export default App;
