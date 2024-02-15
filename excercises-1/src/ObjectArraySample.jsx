import React, { useState } from 'react';
import { countries as initialCountries } from './data/countries';

function ObjectArraySample() {
    
    const [countries, setCountries] = useState(initialCountries);

    const removeFirstRow = () => {
        
        setCountries(countries.slice(1));
    };

    const clearAllRows = () => {
        setCountries([]);
    };

    return (
        <>
            <button onClick={removeFirstRow}>Remove First Row</button>
            <button onClick={clearAllRows}>Clear All</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Population</th>
                        <th>Capital</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countries.slice(0, 10).map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.code}</td>
                                <td>{item.population}</td>
                                <td>{item.capital}</td>
                                <td>{item.currency}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default ObjectArraySample;
