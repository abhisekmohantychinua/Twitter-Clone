import React from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Navigation = () => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        console.log("logout");
        handleClose();
    }
    return <div className="h-screen sticky top-0">
        <div>
            <div className="py-5">
                <svg height={30} width={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" version="1.1">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </div>
            <div className="space-y-6">
                {navigationMenu.map((item, index) =>
                    <div key={index} className="cursor-pointer flex space-x-3 items-center" onClick={() => item.title === 'Profile' ? navigate(`/profile/${5}`) : navigate(item.path)}>
                        {item.icon}
                        <p className="text-xl">{item.title}</p>

                    </div>
                )}
            </div>
            <div className="py-10">
                <Button
                    sx={{ width: '100%', borderRadius: '29px', py: '15px', bgcolor: '#1e88e5' }}
                    variant="contained"
                >
                    Tweet
                </Button>
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <Avatar alt="username" src="https://scontent.fbbi2-1.fna.fbcdn.net/v/t39.30808-6/312298604_1334705334019046_4796950339267081507_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=Hba0OJ_ib2UAX84O62g&_nc_ht=scontent.fbbi2-1.fna&oh=00_AfBpBsFaai-j7reyQZZ0yBhcCWGYptcx6rPOJxK8oTuCPA&oe=6501A44A" />
                <div>
                    <span>Coder Abhisek</span>
                    <span className="opacity-70">@coderabhisek</span>
                </div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MoreHorizIcon />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    </div>;
};

export default Navigation;
