import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import {
    MenuItem,
    FormControl,
    Select,
    Card,
    CardContent,
} from "@material-ui/core";
import { sortData, prettyPrintStat } from "./util";
import numeral from "numeral";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "leaflet/dist/leaflet.css";

// CUSTOM COMPONENTS
import Map from "./Map";
import AppFooter from '../NewLandingPage/modules/views/AppFooter';
import InfoBox from './InfoBox';
import LineGraph from "./LineGraph";
import Table from "./Table";
import Nav from '../Nav/Nav';
import "./AppPage.css";

const AppPage = () => {
    // hooks that set initial state 
    const [country, setInputCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState({});
    const [countries, setCountries] = useState([]);
    const [mapCountries, setMapCountries] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [casesType, setCasesType] = useState("cases");
    const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
    const [mapZoom, setMapZoom] = useState(3);

    useEffect(() => {
        // useEffect fires off async when page loads then we use fetch
        // to make api call and then we take the json data from response
        // then the data set countryInfo with the data
        fetch("https://disease.sh/v3/covid-19/all")
            .then((response) => response.json())
            .then((data) => {
                setCountryInfo(data);
            });
    }, []);

    useEffect(() => {
        // useEffect fires off async when page loads then we use fetch
        // to make api call and then we take the json data from response
        // then map through data and set the name and value
        const getCountriesData = async () => {
            fetch("https://disease.sh/v3/covid-19/countries")
                .then((response) => response.json())
                .then((data) => {
                    const countries = data.map((country) => ({
                        name: country.country, // United Kingdom, United States
                        value: country.countryInfo.iso2, // UK, USA, FR
                    }));
                    let sortedData = sortData(data);
                    setCountries(countries);
                    setMapCountries(data);
                    setTableData(sortedData);
                });
        };
        getCountriesData();
    }, []);


    const onCountryChange = async (e) => {
        // listens for countryCode then makes api call
        // using the countryCode to get specific data for country
        // it uses ternary operator to check if countryCode is worldwide
        // then it will make call to /all, otherwise
        // make call to /countries/countryCode
        // gets json format data resonse and sets countryInfo to data
        const countryCode = e.target.value;
        const url =
            countryCode === "worldwide"
                ? "https://disease.sh/v3/covid-19/all"
                : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
        await fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setInputCountry(countryCode); //set country to countryCode
                setCountryInfo(data); // set to all the data from response
                setMapCenter([data.countryInfo.lat, data.countryInfo.long]);  // set the lat and long
                setMapZoom(4);
            });
    };
    return (
        <div>
            <Nav />
            <div className="covidapp">
                <div className="covidapp__left">
                    <div className="covidapp__header">
                        <Link to="/admin">
                            <ArrowBackIcon className="covidArrowIcon" />
                        </Link>
                        <h3 className="backText">Back to Home</h3><h1>CheckUP COVID Tracker</h1>
                        <FormControl className="covidapp__dropdown">
                            <Select
                                variant="outlined"
                                value={country}
                                onChange={onCountryChange}
                            >
                                <MenuItem value="worldwide">Worldwide</MenuItem>
                                {countries.map((country) => (
                                    <MenuItem value={country.value}>{country.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="covidapp__stats">
                        <InfoBox
                            onClick={(e) => setCasesType("cases")}
                            title="COVID Cases"
                            isRed
                            active={casesType === "cases"}
                            cases={prettyPrintStat(countryInfo.todayCases)}
                            total={numeral(countryInfo.cases).format("0.0a")}
                        />
                        <InfoBox
                            onClick={(e) => setCasesType("recovered")}
                            title="Recovered"
                            active={casesType === "recovered"}
                            cases={prettyPrintStat(countryInfo.todayRecovered)}
                            total={numeral(countryInfo.recovered).format("0.0a")}
                        />
                        <InfoBox
                            onClick={(e) => setCasesType("deaths")}
                            title="Deaths"
                            isRed
                            active={casesType === "deaths"}
                            cases={prettyPrintStat(countryInfo.todayDeaths)}
                            total={numeral(countryInfo.deaths).format("0.0a")}
                        />
                    </div>
                    <Map
                        countries={mapCountries}
                        casesType={casesType}
                        center={mapCenter}
                        zoom={mapZoom}
                    />
                </div>
                <Card className="covidapp__right">
                    <CardContent>
                        <div className="covidapp__information">
                            <h3>Live Cases by Country</h3>
                            <Table countries={tableData} />
                            <h3>Worldwide new {casesType}</h3>
                            <LineGraph casesType={casesType} />
                        </div>
                    </CardContent>
                </Card>
            </div>
            <AppFooter />
        </div>
    );
};

export default AppPage;