import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

export default function DataGridDemo({ data, editHandler, isLoading }) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
      field: 'title',
      headerName: 'Title',
      width: 180,
    },
    {
      field: 'body',
      headerName: 'Body',
      width: 800,
    },
    {
      field: 'cta',
      headerName: 'Action',
      width: 100,
      renderCell: (api) => {
        return <Button onClick={() => editHandler(api.id)}>Edit</Button>;
      },
    },
  ];

  const rows = data.map((item) => ({
    id: item.id,
    title: item.title,
    body: item.body,
  }));
  return (
    <div style={{ height: 390, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        disableColumnMenu={true}
        loading={isLoading}
      />
    </div>
  );
}
