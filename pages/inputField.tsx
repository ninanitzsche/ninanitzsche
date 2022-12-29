import {TextField} from "@mui/material";
import * as React from "react";

const InputField = (props: { handleChange: any; label: any; name: any; type: any; value: any; rows: any; }) => {
    const { handleChange, label, name, type, value, rows } = props;
    return (
        <div className="mb-5">
            <TextField value={value} onChange={handleChange} label={name} variant="outlined" name={name} rows={rows} fullWidth required /></div>
    )
}

export default InputField