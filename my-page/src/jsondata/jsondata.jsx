import React from "react";

function JsonDataDisplay(props) {
    return (
        <tr>
            <td>{props.data.surname}</td>
            <td>{props.data.name}</td>
        </tr>
    )
}
export default JsonDataDisplay;