import React, { PureComponent, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { pdfjs, Document, Page } from 'react-pdf';
import _ from 'lodash';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


class PdfReader extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            pdfTotalPages: 0,
        };
    }

    render() {
        const { url, options } = this.props;
        const { pdfTotalPages } = this.state;
        const w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            width = w.innerWidth || e.clientWidth || g.clientWidth;
    
        return (
            <Document
                file={ url }
                options={ options || {} }
                onLoadSuccess={({ numPages }) => {
                    this.setState({ pdfTotalPages: numPages });
                }}
            >
                {_.map(new Array(pdfTotalPages), (item, index) => (
                    <Fragment>
                        <Page
                            key={ index + 1 }
                            pageNumber={ index + 1 }
                            width={ width }
                            loading=""
                        />
                        <hr />
                    </Fragment>
                ))}
            </Document>
        );
    }
}


export default PdfReader;
