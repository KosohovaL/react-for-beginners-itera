import React from "react";

function JsonDataDisplay(props) {
    return (
        <tr>
            <td>{props.surname}</td>
            <td>{props.name}</td>
        </tr>
    )
}
export default JsonDataDisplay;