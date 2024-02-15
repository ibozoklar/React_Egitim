import React from 'react'
import { suppliers } from './data/suppliers'
import { Link } from 'react-router-dom'

function ObjectArraySample() {
    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers.map(item => <tr>
                        <td><Link to={'/suppliers/'+item.id}>{item.id}</Link></td>
                        <td>{item.companyName}</td>
                        <td>{item.contactName}</td>
                    </tr>)
                }
            </tbody>
        </table>

    </>
    )
}

export default ObjectArraySample