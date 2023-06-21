'use client'
import ItemCard from '@/components/ItemCard'
import { Alert } from '@mui/material'
import React from 'react'

const home = () => {
  return (
    <>
      <Alert severity="info">To see All Post kindly go to Post Menu in the Sidebar. Thanks Later!!</Alert>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", top: "100px" }} >
        <ItemCard title="Ritik Kumar Gupta" image="https://i.ibb.co/rx5DFbs/avatar.png"
          category="Loggedin User" />

      </div>

    </>

  )
}

export default home