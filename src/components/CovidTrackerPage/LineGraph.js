import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

// pre defined options from documentation
// uses numeral to display the value at the tooltip on graph
const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {

                    callback: function (value, index, values) {
                        return numeral(value).format("0a");
                    },
                },
            },
        ],
    },
};

// takes data and turns it into object for ChartJS
// loops through all the cases from data
// sets x to the date and y to subtract the last date from new date total
// for the difference of the new cases then push newDataPoint
// into chartData and then return the chartData
const buildChartData = (data, casesType) => {
    let chartData = [];
    let lastDataPoint;
    for (let date in data.cases) {
        if (lastDataPoint) {
            let newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint,
            };
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
    }
    return chartData;
};

function LineGraph({ casesType }) {
    // set inital state 
    const [data, setData] = useState({});
    // useEffect to make api call to this endpoint
    // get the json response as our data for
    // all worldwide data from the last 120 days
    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    let chartData = buildChartData(data, casesType);
                    setData(chartData); // set Data to chartData
                });
        };
        fetchData();
    }, [casesType]);
    return (
        <div>
            {data?.length > 0 && (
                <Line
                    data={{
                        datasets: [
                            {
                                backgroundColor: "rgba(204, 16, 52, 0.5)",
                                borderColor: "#CC1034",
                                data: data,
                            },
                        ],
                    }}
                    options={options}
                />
            )}
        </div>
    );
}

export default LineGraph;