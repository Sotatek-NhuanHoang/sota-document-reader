import React, { PureComponent, Fragment } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import XLSX from 'xlsx';
import ReactDataGrid from 'react-data-grid';


class SheetReader extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            rows: [],
            columns: [],
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        try {
            const response = await axios.get(this.props.url, {
                responseType: 'arraybuffer',
                ...(this.props.options || {})
            });
        
            const data = new Uint8Array(response.data);
            const workbook = XLSX.read(data, { type: 'array' });
            let csvContentJson = XLSX.utils.sheet_to_json(
                workbook.Sheets[workbook.SheetNames[0]],
                { header: 'A' },
            );
            csvContentJson = _.map(csvContentJson, (row, index) => {
                return ({
                    ROOT: index,
                    ...row,
                });
            })

            let columns = _.map(new Array(26), (item, index) => {
                const character = (index + 10).toString(36).toUpperCase();
                return {
                    key: character,
                    name: character,
                    resizable: true,
                };
            });
            columns = [
                { key: 'ROOT', name: '', frozen: true, width: 50, },
                ...columns,
            ]

            this.setState({ rows: csvContentJson, columns: columns, });
        } catch (error) {

        }
    }

    render() {
        const { rows, columns } = this.state;
        const w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            height = w.innerHeight || e.clientHeight || g.clientHeight;

        return (
            <ReactDataGrid
                columns={columns}
                rowGetter={(index) => rows[index]}
                rowsCount={ rows.length }
                minHeight={ height }
            />
        );
    }
}


export default SheetReader;
