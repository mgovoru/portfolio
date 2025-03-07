'use client';

import Canvas from './components/canvas/Canvas';
import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import About from './about/page';
import Works from './works/page';
import Link from '@mui/material/Link';

const NAVIGATION: Navigation = [
  {
    segment: 'about',
    title: 'обо мне',
    icon: <Image src='./hogwarts.svg' alt='hogwarts' width={32} height={32} />,
  },
  {
    segment: 'works',
    title: 'работы',
    icon: <Image src='./golden.svg' alt='hogwarts' width={32} height={32} />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: '#F1E7D2',
          paper: '#F1E7D2',
        },
      },
    },
    dark: {
      palette: {
        background: {
          default: '#7C4001',
          paper: '#7C4001',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1100,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  let content;

  if (pathname === '/about') {
    content = <About />;
  } else if (pathname === '/works') {
    content = <Works />;
  } else if (pathname === '/canvas') {
    content = <Canvas />;
  }
  return <div className='container'>{content}</div>;
}
function CustomAppTitle() {
  return (
    <Stack direction='row' alignItems='center' spacing={2}>
      <Image src='/express.svg' alt='ToDo logo' width='40' height='40' />
      <Typography
        variant='h4'
        sx={{
          '& > *': { fontFamily: 'Russo One' },
          textDecoration: 'none',
        }}
        component={Link}
        href='/'
      >
        <span className='gradient logo'>MGovorukhina</span>
      </Typography>
    </Stack>
  );
}
export default function DashboardLayoutBranding() {
  const router = useDemoRouter('/canvas');

  return (
    <AppProvider navigation={NAVIGATION} router={router} theme={demoTheme}>
      <DashboardLayout
        slots={{
          appTitle: CustomAppTitle,
        }}
        sx={{
          '.MuiSvgIcon-root': {
            color: 'rgb(234,191,34) !important',
          },
          '.MuiTypography-root': {
            fontFamily: 'Marck Script',
            fontSize: '24px',
          },
        }}
      >
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
