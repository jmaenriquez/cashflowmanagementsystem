import React from "react";

type Rows = {
    description: string;
    accgrp: string;
    amount: number;
    recdate: string;
}

type TableParams = {
    theader: string[];
    trows: any[];
    tfoot: any[];
}

function ReusableTable({theader, trows, tfoot}: TableParams) {
  return (

    <div>
        <table>
            <th>
                array.forEach(element => {
                    <tr></tr>
                });
            </th>
            <tbody>
                array.forEach(element => {
                    <td></td>
                });
            </tbody>
            <tfoot></tfoot>
        </table>
    </div>
  )
}

export default ReusableTable