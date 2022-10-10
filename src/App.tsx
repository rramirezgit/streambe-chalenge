/* eslint-disable @typescript-eslint/indent */

import { RouterProvider } from 'react-router-dom'
import router from 'routes'

const App = (): JSX.Element => {
  return (
    <>
      <RouterProvider router={router} />
      {/* <p>
        {isLogout
          ? 'Please reload to Login'
          : isActive
          ? 'Hello There'
          : 'Interact to be active'}
      </p> */}
    </>
  )
}

export default App
