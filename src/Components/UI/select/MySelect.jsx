import React from "react";
import classes from "./MySelect.module.css";

export default function MySelect({options, defaultValue, value, onChange}) {
    return (
        <select
            className={classes.mySelect}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled={true} value=''>{defaultValue}</option>
            {options.map(o =>
                <option value={o.value} key={o.value}>{o.name}</option>
            )}
        </select>
    );
};