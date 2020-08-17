import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function InfoBox({ title, cases, total, active, isRed, ...props }) {
    console.log(title, active);
    return (
        <Card
            onClick={props.onClick}
            className={`icovidnfoBox ${active && "icovidnfoBox--selected"} ${
                isRed && "covidinfoBox--red"
                }`}
        >
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <h2 className={`covidinfoBox__cases ${!isRed && "covidinfoBox__cases--green"}`}>
                    {cases}
                </h2>

                <Typography className="covidinfoBox__total" color="textSecondary">
                    {total} Total
        </Typography>
            </CardContent>
        </Card>
    );
}

export default InfoBox;