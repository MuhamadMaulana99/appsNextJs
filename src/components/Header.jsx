import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '@/redux/sidebarSlice';

const Header = ({ open, toggleDrawer }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.open);
  return (
    <AppBar position="fixed" className={`transition-all ${open ? 'ml-64 w-[calc(100%-16rem)]' : 'ml-0 w-full'}`}  >
      <Toolbar>
        {!isOpen && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            // onClick={toggleDrawer}
            onClick={() => dispatch(toggleSidebar())}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div">
          My App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
