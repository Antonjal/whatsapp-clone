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
                {/* This materialUI component imports my github profile pic as the avatar on the top left of Sidebar component */}
                <Avatar src="https://avatars.githubusercontent.com/u/29285093?s=400&u=225cccc48de556f580fe34a3b1257612d1fb43de&v=4" />
                <div className="sidebar__headerRight">
                   {/* This materialUI component turns MaterialUI icons into clickable buttons */}
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
            {/* Search bar in the sidebar */}
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    {/* This materialUI component renders a magnifier icon */}
                    <SearchIcon />
                    {/* Search input with a default placeholder text */}
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
