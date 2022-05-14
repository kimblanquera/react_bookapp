import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Grid, InputBase } from '@material-ui/core';
import { NextRouter, useRouter } from 'next/router'

export default function SearchBar() {

    const [searchQuery, setSearchQuery] = useState('');
    const router: NextRouter = useRouter();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const query: string = searchQuery.replace(/ /g, '%20');
        const url: string = `/search?q=${query}`;
        router.push(url)
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setSearchQuery(e.target.value);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <Grid container direction="row" justify="flex-start" alignItems="center">
                        <Grid item sm={4}>
                            <InputBase value={searchQuery} onChange={handleChange} placeholder="Search..." />
                        </Grid>
                    </Grid>
            </form>
        </div>
    )
}
