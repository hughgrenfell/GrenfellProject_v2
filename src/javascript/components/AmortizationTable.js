import React from 'react';

function AmortizationTable(props) {

    const data = [];
    let tableData;

    console.log(props.frequency);

    if (props.frequency > 0) {

        let principalRemaining = props.principal;
        let totalPayments = ( props.amortization * props.frequency);
        let rate = ( props.interestRate / props.frequency / 100 );

        for(let i = 0; i < totalPayments; i++) {
            let interestPayment = ( principalRemaining * rate );
            let principalPayment = props.periodicPayment - interestPayment;
            principalRemaining -= principalPayment;
            data[i] = {year: i+1, principalRemaining: principalRemaining, interest: interestPayment, principal: principalPayment}
        }

        tableData = data.map((tableValue) =>
            <tr>
                <td>{tableValue.year}</td>
                <td>{tableValue.principalRemaining}</td>
                <td>{tableValue.interest}</td>
                <td>{tableValue.principal}</td>
            </tr> 
        );

        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="3">Amortization Table</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Payment Number</th>
                            <th>Principal Remaining</th>
                            <th>Interest Payment</th>
                            <th>Principal Payment</th>
                        </tr>
                        {tableData}
                    </tbody>
                </table>
            </>
        );
    } else {
        return (
            <>
                Please Enter Data!
            </>
        )
    }
}

export default AmortizationTable;


