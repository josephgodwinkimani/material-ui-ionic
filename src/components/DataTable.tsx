import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { CapacitorHttp, HttpOptions, HttpResponse } from "@capacitor/core";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    {
        field: 'address',
        headerName: 'Address',
        width: 300,
        valueGetter: (params) => {
            const { street, city, zipcode } = params.row.address || {};
            return `${street}, ${city}, ${zipcode}`;
        },
    },
];

function DataTable(): JSX.Element {
    const [rows, setRows] = React.useState([]);
    const paginationModel = { page: 0, pageSize: 5 };

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                // Make a Http GET Request to a server using native libraries
                const response: HttpResponse = await CapacitorHttp.get({
                    url: 'https://jsonplaceholder.typicode.com/users',
                } as HttpOptions);

                // Map the fetched data to match the expected format for DataGrid
                const formattedData = response.data.map((user: { id: any; name: any; username: any; email: any; address: any; }) => ({
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    address: user.address,
                }));
                setRows(formattedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Paper sx={{ marginTop: 2, height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    );
}

export default DataTable;