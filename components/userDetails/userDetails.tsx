import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { Grid, Typography } from '@material-ui/core'
import UserStyles from './userDetails.module.scss'
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Link from 'next/link';

interface UserProps {
    userId: string,
    userImage: string,
    firstName: string,
    lastName: string
}

export default class UserDetails extends PureComponent<UserProps, any> {
    static propTypes = {
        userId: PropTypes.string,
        userImage: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string
    }

    static defaultProps = {
        userId: 'AAAAAAAAAA',
        userImage: '',
        firstName: 'Kim',
        lastName: 'Campos'
    }

    constructor(props: UserProps) {
        super(props);
    }

    render() {
        return (
            <div className={UserStyles.UserDetails}>
                <Grid container direction="column" spacing={2}>
                    <Grid container item sm={12} justify="center">

                        <Image
                            src="/donna_icon.png"
                            width={100}
                            height={100}
                            className={UserStyles.UserImage}
                        />

                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="h6" className={UserStyles.UserName}>
                        { this.props.firstName } { this.props.lastName }
                        </Typography>
                    </Grid>
                    <Grid container item sm={12} direction="row" spacing={1} justify="center" alignItems="center">
                        <Grid item>
                            <Link href={`./user/settings`}>
                                <SettingsIcon color="secondary"></SettingsIcon>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/">
                                <ExitToAppIcon color="secondary"></ExitToAppIcon>
                            </Link>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </div>
        )
    }
}
