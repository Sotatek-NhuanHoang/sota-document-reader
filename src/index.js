import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import PdfReader from './components/PdfReader';

const rootEl = document.getElementById('root');

const renderPdfReader = (url, options) => {
    ReactDOM.render(
        <AppContainer>
            <PdfReader />
        </AppContainer>,
        rootEl
    );
};

renderPdfReader();

