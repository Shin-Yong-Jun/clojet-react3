import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
//https://mui.com/material-ui/customization/theme-components/ 스타일변경

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
//
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
//
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
//
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
//
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
//
import VerticalAlignTopRoundedIcon from '@mui/icons-material/VerticalAlignTopRounded';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
//

export function Inkutest6() {
    return (
        <Tooltip title='Top' placement='top' arrow>
            <IconButton
                sx={{
                    color: '#165',
                    boxShadow: 5,
                    position: 'fixed',
                    right: '5%',
                    bottom: '5%',
                    zIndex: 'tooltip',
                }}
                TouchRippleProps={{
                    style: { color: 'red' },
                    // https://mui.com/material-ui/api/button-base/#touchripple 터치프롭관련
                    // center: 파동 효과를 시작할 중심 위치입니다.
                    // classes: 커스텀 클래스를 적용할 수 있습니다.
                    // disabled: 버튼이 비활성화되었는지 여부를 나타냅니다.
                    // disableTouchRipple: 터치 효과를 비활성화할지 여부를 나타냅니다.
                    // key: React에서 요소를 식별하는 데 사용되는 키입니다.
                    // style: 스타일 객체를 적용할 수 있습니다.
                }}
            >
                <VerticalAlignTopRoundedIcon />
            </IconButton>
        </Tooltip>
    );
}

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export function Inkutest5() {
    const { data } = useDemoData({
        dataSet: 'Employee',
        visibleFields: VISIBLE_FIELDS,
        rowLength: 100,
    });

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid {...data} />
        </div>
    );
}
//
const theme = createTheme({
    components: {
        MuiButtonGroup: {
            styleOverrides: {
                grouped: {
                    '&:not(:last-of-type)': {
                        borderRight: '1px solid red',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: '#202020',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: 'red',
                    },
                },
            },
        },
    },
});

//

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export function Inkutest4() {
    return (
        <Box sx={{ width: 500, minHeight: 393 }}>
            <Masonry columns={4} spacing={2}>
                {heights.map((height, index) => (
                    <Item key={index} sx={{ height }}>
                        {index + 1}
                    </Item>
                ))}
            </Masonry>
        </Box>
    );
}
export function Inkutest3() {
    return (
        <Timeline position='alternate'>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color='secondary' />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Secondary</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color='success' />
                </TimelineSeparator>
                <TimelineContent>Success</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

export default function Inkutest() {
    return (
        <ThemeProvider theme={theme}>
            <ButtonGroup variant='contained' aria-label='outlined primary button group' disableElevation>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </ThemeProvider>
    );
}

export function Inkutest2() {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color='primary' aria-label='add'>
                <AddIcon />
            </Fab>
            <Fab color='secondary' aria-label='edit'>
                <EditIcon />
            </Fab>
            <Fab variant='extended'>
                <NavigationIcon sx={{ mr: 1 }} />
                Navigate
            </Fab>
            <Fab disabled aria-label='like'>
                <FavoriteIcon />
            </Fab>
        </Box>
    );
}
