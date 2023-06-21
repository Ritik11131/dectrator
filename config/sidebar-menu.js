import HomeIcon from '@mui/icons-material/Home';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export const SidebarMenu = [
    {
        name:"Home",
        href:'/',
        id:'home',
        icon:<HomeIcon/>
    },
    {
        name:"Post",
        href:'/post',
        id:'post',
        icon:<PermMediaIcon/>
    },
    {
        name:"Live",
        href:'/',
        id:'live',
        icon:<LiveTvIcon/>
    },
]