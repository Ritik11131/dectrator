'use client'

import Sidebar from '@/components/Sidebar'
import { Grid} from '@mui/material'
import UserBox from '@/components/UserBox'

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            {children}
          </Grid>
          <Grid item xs={2}>
            <UserBox username="Ritik Kumar Gupta"/>
          </Grid>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
        </Grid>
      </body>
    </html>
  )
}
