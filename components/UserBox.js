import { Avatar, Box, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

const UserBox = ({username}) => {
  return (
    <Box sx={{
        width: 200,
        background: "#511",
        height: "100%",
        position:"fixed",
        zIndex:1,
        flexGrow: 1
      }} component="div">
        <Avatar
          sx={{
            margin: "0.5rem auto",
            padding: "1rem",
            width: 150,
            height: 150
          }}
          src="https://i.ibb.co/rx5DFbs/avatar.png"
          alt="Juaneme8"
        />
        <List>
            <ListItem sx={{ color: "white" }}>
              <ListItemText sx={{display:"flex", justifyContent:"center",alignItems:"center"}} primary={username} />
            </ListItem>
        </List>
      </Box>
  )
}

export default UserBox