import React from "react";
import JsonData from './data.json';

function JsonDataDisplay() {
    const DisplayData = JsonData.map(
        (myinfo) => {
            return (
                <tr>
                    <td>{myinfo.surname}</td>
                    <td>{myinfo.name}</td>
                </tr>
            )
        }
    )
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Surname</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>

        </div>
    )
}
export default JsonDataDisplay;