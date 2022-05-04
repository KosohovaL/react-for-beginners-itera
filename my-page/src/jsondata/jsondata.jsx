import React from "react";

function JsonDataDisplay(props) {
    const { surname, name } = props.data
    return (
        <tr>
            <td>{surname}</td>
            <td>{name}</td>
        </tr>
    )
}
export default JsonDataDisplay;