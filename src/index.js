import './index.css';

import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import PdfReader from './components/PdfReader';

const rootEl = document.getElementById('root');

window.renderPdfReader = function renderPdfReader(url, options) {
    ReactDOM.render(
        <AppContainer>
            <PdfReader url={ url } options={ options } />
        </AppContainer>,
        rootEl
    );
};

window.renderSheetReader = function renderSheetReader(url, options) {
    ReactDOM.render(
        <AppContainer>
            <PdfReader url={ url } options={ options } />
        </AppContainer>,
        rootEl
    );
};

renderPdfReader('https://cors-anywhere.herokuapp.com/https://app.assetgenius.jp/api/assets/8', {
    httpHeaders: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTE1LCJlbWFpbCI6InRlc3QtcG1AYXNzZXRnZW5pdXMuanAifQ.xBBSsGfToGRWviwLg-G-HD7PXVLFjmac1CWzox2nYvg`,
        'X-AG-Mobile': 'true',
        'Origin': 'app.assetgenius.jp',
    },
});

