import React from "react";
import JsonData from './data.json';
import JsonDataDisplay from "./JsonData";

function DisplayData() {
    const GetData = JsonData.map(
        (myinfo) => {
            return (
                <JsonDataDisplay name={myinfo.name} surname={myinfo.surname} />
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
                    {GetData}
                </tbody>
            </table>

        </div>
    )
}
export default DisplayData;