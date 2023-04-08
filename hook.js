import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
 
function App() {
    const [users, setUsers] = useState([]);
 
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
 
            const listarUsers = await Promise.all (
                data.map(async (user) => {
 
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        addressStreet: user.address.street,
                        addressSuite: user.address.suite,
                        addressCity: user.address.city,
                        addressZipcode: user.address.zipcode,
                        addressGeoLat: user.address.geo.lat,
                        addressGeoLng: user.address.geo.lng,
                        phone: user.phone,
                        website: user.website,
                        companyName: user.company.name,
                        companyCatchPhrase: user.company.catchPhrase,
                        companyBs: user.company.bs
                    };
                })
            );
 
            setUsers(listarUsers);
        };
 
        fetchUsers();
    }, []);
 
    const columns = [
        {
            dataField: "id",
            text: "ID"
        },
        {
            dataField: "name",
            text: "Nome"
        },
        {
            dataField: "email",
            text: "E-mail",
            style: { fontSize: '8px' }
        },
        {
            dataField: "addressStreet",
            text: "Rua"
        },
        {
            dataField: "addressSuite",
            text: "Apartamento"
        },
        {
            dataField: "addressCity",
            text: "Cidade",
            style: { fontSize: '13px' }
        },
        {
            dataField: "addressZipcode",
            text: "CEP"
        },
        {
            dataField: "addressGeoLat",
            text: "Latitude"
        },
        {
            dataField: "addressGeoLng",
            text: "Longitude"
        },
        {
            dataField: "phone",
            text: "Telefone"
        },
        {
            dataField: "website",
            text: "Site"
        },
        {
            dataField: "companyName",
            text: "Empresa"
        },
        {
            dataField: "companyCatchPhrase",
            text: "Slogan"
        },
        {
            dataField: "companyBs",
            text: "Objetivo"
        }
    ];
 
    return (
        <div>
            <BootstrapTable keyField="id" data={users} columns={columns} autoWidth />
        </div>
    );
}
 
export default App;
 
