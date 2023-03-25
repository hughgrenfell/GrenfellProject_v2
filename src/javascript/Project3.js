import Dropdown from './components/Dropdown';
import React, { useState } from 'react';
import AmortizationTable from './components/AmortizationTable';
import Popup from 'reactjs-popup';

const dropdownOptions = [
    {value:52, label:"Weekly"},
    {value:26, label:"Bi-weekly"},
    {value:24, label:"Bi-monthly"},
    {value:12, label:"Monthly"}
]

function ShowTable(props) {
        return <div>
                <AmortizationTable 
                    principal={props.principal} 
                    interestRate={props.interestRate} 
                    amortization={props.amortization}
                    periodicPayment={props.periodicPayment}
                    frequency={props.frequency} 
                />
            </div>
}

function Project3() {

    const [ principal, setPrincipal ] = useState(0);
    const [ interestRate, setInterestRate ] = useState(0);
    const [ amortization, setAmortization ] = useState(0);
    const [ frequency, setFrequency ] = useState();
    const [ periodicPayment, setPeriodicPayment ] = useState();

    let calcPayment = () => {
        
        console.log(principal, interestRate, amortization, frequency);

        let rate = ( (interestRate / 100) / frequency );
        let periods = ( amortization * frequency );
        let payment = ( principal * ( rate ) * ( 1 + rate )**( periods ) ) /
                (( 1 + rate )**( periods ) - 1 )

        if(principal === 0 || interestRate === 0 || amortization === 0) {
            alert('Please enter all values!');
        } else {
            setPeriodicPayment(payment);
        }
    }

    return (
        <div>
            <label>
                Principal: 
                <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
            </label>
            <label>
                Interest Rate: 
                <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
            </label>
            <label>
                Amortization Period: 
                <input type="number" value={amortization} onChange={(e) => setAmortization(e.target.value)} />
            </label>
            <Dropdown options={ dropdownOptions } setReturnValue={setFrequency} ></Dropdown>
            <button onClick={calcPayment}>Submit</button>
            <div>{periodicPayment}</div>
            <Popup 
                trigger={<button> Open Amortization Table </button>} 
                position="center left"
                closeOnDocumentClick
            >
                <div>            
                    <ShowTable 
                        interestRate={interestRate} 
                        principal={principal} 
                        amortization={amortization} 
                        periodicPayment={periodicPayment}
                        frequency={frequency}
                    />
                </div>
            </Popup>
        </div>
    );
}

export default Project3;