import * as React from 'react';
import Box from '@mui/material/Box';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Link } from 'react-router-dom';

export default function Navigation() {
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: 500 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction 
                    label="Главная"     
                    icon={<AccountBalanceIcon />} 
                    component={Link}
                    to="/"
                    value="/"
                />
                <BottomNavigationAction 
                    label="Конвертация" 
                    icon={<CompareArrowsIcon />} 
                    component={Link}
                    to="/conversion"
                    value="/conversion"
                />
            </BottomNavigation>
        </Box>
    );
}