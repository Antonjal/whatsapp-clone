import React from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://avatars.githubusercontent.com/u/29285093?s=400&u=225cccc48de556f580fe34a3b1257612d1fb43de&v=4" />
                <div className="sidebar__headerRight">
                   <IconButton>
                        <DonutLargeIcon/>
                   </IconButton>
                   <IconButton>
                        <ChatIcon/>
                   </IconButton>
                   <IconButton>
                        <MoreVertIcon/>
                   </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar