'use client';

import Canvas from './components/canvas/Canvas';

import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

const NAVIGATION: Navigation = [
  {
    segment: '/about',
    title: 'обо мне',
    icon: <DashboardIcon />,
  },
  {
    segment: '/works',
    title: 'работы',
    icon: <ShoppingCartIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  return (
    // <Box
    //   sx={{
    //     py: 4,
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     textAlign: 'center',
    //   }}
    // >
    //   <Typography>Dashboard content for {pathname}</Typography>
    // </Box>

    <div className='container'>
      <Canvas />
    </div>
  );
}
function CustomAppTitle() {
  return (
    <Stack direction='row' alignItems='center' spacing={2}>
      <Image
        src='/to-do__app/logo.png'
        alt='ToDo logo'
        width='40'
        height='40'
      />
      <Typography variant='h4' sx={{ '& > *': { fontFamily: 'Russo One' } }}>
        <span className='gradient logo'>MGovorukhina</span>
      </Typography>
    </Stack>
  );
}
export default function DashboardLayoutBranding() {
  const router = useDemoRouter('/');

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src='https://mui.com/static/logo.png' alt='MUI logo' />,
        title: 'MGovorukhina',
      }}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout
        slots={{
          appTitle: CustomAppTitle,
        }}
        sx={{
          '.MuiPaper-root': { backgroundColor: '#F1E7D2' },
        }}
      >
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

// export default function Home() {
//   return (
//     <>
//       <Canvas />
//     </>
//   );
// }
