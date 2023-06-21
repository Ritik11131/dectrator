import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { SidebarMenu } from '@/config/sidebar-menu';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
    const router = useRouter();

    const handleNavigation = (item) => {
        router.push(item);
    }

    return (
        <>
            <Toolbar/>
            <List sx={{ position:"fixed",zIndex:1}}>
                {SidebarMenu.map((obj,index)=>{
                    return (
                    <ListItem key={obj?.id} > 
                        <ListItemButton onClick={()=>handleNavigation(obj?.href)}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={obj.name} />
                        </ListItemButton>
                </ListItem>
)
})}
            </List>
</>

    );
};

export default Sidebar;
