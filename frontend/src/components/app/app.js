import React from 'react';
import axios from 'axios';
import moment from 'moment';

import './app.css';
import AppInfo from '../app-info/app-info';
import SheetsList from '../sheets-list/sheets-list';
import SearchPanel from '../search-panel/search-panel';

const valute = {
    USD: ""
}
axios.get("http://www.cbr-xml-daily.ru/daily_json.js")
    .then((res) => {
        valute.USD = res.data.Valute.USD.Value
    });

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [{
                nomer: '',
                price_d: '',
                price_r: '',
                data: ''
            }],
            valute: [],
            zakaz: '',
            term: '',
            day: moment().format("DD"),
            month: moment().format("MM"), 
            year: moment().format("YYYY")     
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:8000/api/gtests/?format=json&ordering=nomer`)
          .then(res => {
            const datas = res.data;
            this.setState({ datas });
          });
    }
    onToggleProp = (id, prop) => {
        this.setState(({datas}) => ({
            datas: datas.map(item => {
                if (item.nomer === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }
    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            item.zakaz = item.zakaz + "";
            return item.zakaz.indexOf(term) > -1
        })
    }
    onUpdateSearch = (term) => {
        this.setState({term});
    }
    render () {
        const {datas, term, day, month, year} = this.state;
        const visibleData = this.searchEmp(datas, term);
        return (
            <React.Fragment>
                <div className="app">
                    <AppInfo 
                        day={day}
                        month={month}
                        year={year}
                        dol= {valute.USD}
                    />
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <SheetsList 
                        datas={visibleData} 
                        onToggleProp={this.onToggleProp}
                        dol= {valute.USD}
                    />
                </div>
            </React.Fragment>
        )
    }
}

  
export default App;