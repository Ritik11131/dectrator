import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { SidebarMenu } from '@/config/sidebar-menu';
import { useRouter } from 'next/navigation';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

const Sidebar = () => {
    const router = useRouter();

    const handleNavigation = (item) => {
        router.push(item);
    }

    return (
        <>
            <Toolbar />

                <List sx={{ position: "fixed", zIndex: 1 }}>
                    {SidebarMenu.map((obj, index) => {
                        return (
                            <ListItem key={obj?.id} >
                                <ListItemButton onClick={() => handleNavigation(obj?.href)}>
                                    <ListItemIcon>
                                        {obj?.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={obj.name} />
                                </ListItemButton>

                            </ListItem>
                        )
                    })}
                    <ListItem>
                        <ListItemButton>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </ListItem>
                </List>
        </>

    );
};

export default Sidebar;
