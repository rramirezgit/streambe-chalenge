// import styles from './index.module.css'

import { Avatar } from '@mui/material'
import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams
} from '@mui/x-data-grid'
import Table from 'components/Table'
import { AppLayout } from 'layouts/AppLayout'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { get } from 'services'
import { userInterface } from 'types/context'

const Dashboard = (): JSX.Element => {
  const [rows, setRows] = useState<any[]>([])

  const columns: GridColDef[] = [
    { field: 'contactId', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'surnames', headerName: 'Surnames', width: 130 },
    {
      field: 'birthDate',
      headerName: 'Birth Date',
      width: 180,
      valueGetter: (params: GridValueGetterParams) => {
        return moment(params.row?.birthDate).format('MMMM DD, YYYY')
      }
    },
    { field: 'gender', headerName: 'Gender', width: 130 },
    {
      field: 'photo',
      headerName: 'Photo',
      width: 90,
      renderCell: (params: GridRenderCellParams<any>) => (
        <strong>
          <Avatar alt="Remy Sharp" src={params.value} />
        </strong>
      )
    },
    { field: 'phone', headerName: 'Phone', width: 130 },
    { field: 'profesion', headerName: 'Profesion', width: 130 },
    { field: 'email', headerName: 'Email', width: 180 }
  ]

  useEffect(() => {
    getDataTable().catch(error => console.log(error))
  }, [])

  const getDataTable = async (): Promise<void> => {
    const response = await get(
      'https://www.mockachino.com/06c67c77-18c4-45/users'
    )
      .then(response => {
        console.log(response)
        if (response?.status === 200) {
          return response.data.users.map((user: userInterface) => ({
            ...user,
            id: user.contactId
          }))
        }
        return []
      })
      .catch(error => {
        console.log(error)
        return []
      })
    setRows(response)
  }

  return (
    <AppLayout>
      <Table columns={columns} rows={rows} />
    </AppLayout>
  )
}

export default Dashboard
