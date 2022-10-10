import { Paper } from '@mui/material'
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarQuickFilter
} from '@mui/x-data-grid'

interface TableProps {
  columns: any[]
  rows: any[]
}

const CustomToolbar = (): JSX.Element => {
  return (
    <GridToolbarContainer>
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  )
}

const Table = ({ columns, rows }: TableProps): JSX.Element => {
  return (
    <Paper style={{ height: 'calc(100vh - 124px)' }}>
      <DataGrid
        disableDensitySelector
        isCellEditable={() => false}
        components={{
          Toolbar: CustomToolbar
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
