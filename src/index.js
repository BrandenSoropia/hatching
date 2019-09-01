import React from "react";
import ReactDOM from "react-dom";
import { LandingPage } from './app/LandingPage';
import { ThemeProvider } from 'styled-components';
import theme from 'common/theme'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <LandingPage />
        </ThemeProvider>
    );
};


ReactDOM.render(<App />, document.getElementById("root"));
