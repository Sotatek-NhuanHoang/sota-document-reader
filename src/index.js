import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import PdfReader from './components/PdfReader';
import SheetReader from './components/SheetReader';

import './index.css';


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
            <SheetReader url={ url } options={ options } />
        </AppContainer>,
        rootEl
    );
};

// renderSheetReader('https://cors-anywhere.herokuapp.com/https://app.assetgenius.jp/static/docs/building/c77d2c1c068c2f12f1adfe23e6504d04.undefined', {
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTE1LCJlbWFpbCI6InRlc3QtcG1AYXNzZXRnZW5pdXMuanAifQ.xBBSsGfToGRWviwLg-G-HD7PXVLFjmac1CWzox2nYvg`,
//         'X-AG-Mobile': 'true',
//         'Origin': 'app.assetgenius.jp',
//     },
// });

// renderPdfReader('https://cors-anywhere.herokuapp.com/https://app.assetgenius.jp/static/docs/building/7409e3d7828667ae95cc95c92536fc6e.undefined', {
//     httpHeaders: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTE1LCJlbWFpbCI6InRlc3QtcG1AYXNzZXRnZW5pdXMuanAifQ.xBBSsGfToGRWviwLg-G-HD7PXVLFjmac1CWzox2nYvg`,
//         'X-AG-Mobile': 'true',
//         'Origin': 'app.assetgenius.jp',
//     },
// });
// renderPdfReader('https://cors-anywhere.herokuapp.com/https://app.assetgenius.jp/api/assets/8', {
//     httpHeaders: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTE1LCJlbWFpbCI6InRlc3QtcG1AYXNzZXRnZW5pdXMuanAifQ.xBBSsGfToGRWviwLg-G-HD7PXVLFjmac1CWzox2nYvg`,
//         'X-AG-Mobile': 'true',
//         'Origin': 'app.assetgenius.jp',
//     },
// });

