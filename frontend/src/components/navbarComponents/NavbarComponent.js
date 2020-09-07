import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavbarComponent(props) {
    const classes = useStyles();
    if (props.items) {
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>{
                        props.items.map((elem) => {
                            return <Button color="inherit" component={RouterLink} to={elem.url}>{elem.name}</Button>;
                        })
                    }
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
