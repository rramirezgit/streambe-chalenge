import { Paper } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
// import CustomNoRowsOverlay from './CustomComponentTable'

interface TableProps {
  columns: any[]
  rows: any[]
}

const Table = ({ columns, rows }: TableProps): JSX.Element => {
  return (
    <Paper style={{ height: 'calc(100vh - 124px)' }}>
      <DataGrid
        disableDensitySelector
        isCellEditable={() => false}
        localeText={{
          toolbarColumns: 'Columnas',
          toolbarFilters: 'Filtros',
          toolbarExport: 'Exportar'
        }}
        components={{
          // NoRowsOverlay: CustomNoRowsOverlay,
          Toolbar: GridToolbar
        }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 }
          }
        }}
        rows={rows}
        columns={columns}
        disableSelectionOnClick
      />
    </Paper>
  )
}
export default Table
