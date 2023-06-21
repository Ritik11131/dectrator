'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import ItemCard from '@/components/ItemCard';
import { CircularProgress, InputBase, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';


export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [filteredData,setFilteredData] = useState([])
    const [searchText,setSearchText] = useState("")
    const [value,setValue] = useState("")
    const [loading, setloading] = useState(false)

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        setloading(true)
        try {
            const response = await axios.get('https://fakestoreapi.com/products/');
            const data = response.data;
            setPosts(data);
            setFilteredData(data)
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
        setloading(false)
        console.log(filteredData);
    };

    const handleFilter = (value) => {
        setValue(value)
        setSearchText(value)
        console.log(value);
        const filtered=[];
        posts.map((obj)=>{
            obj?.title.toLowerCase().includes(searchText.toLowerCase()) && filtered.push(obj)
        })
        searchText.length === 1 ? setFilteredData(posts) : setFilteredData(filtered)
        console.log(filtered);
    }


    return (
        <>
            {loading ?
                <Box sx={{ display: 'flex', marginLeft: '240px', justifyContent: 'center', alignItems: 'center', height: "100vh" }}>
                    <CircularProgress />
                </Box> :
                <>
                    <Box sx={{ display: 'flex', justifyContent:"center", alignItems: 'flex-end' }}>
                        <SearchIcon sx={{ mr: 1, my: 0.5 }} />
                        {/* <input type="text" value={value} onChange={(e)=>handleFilter(e?.target?.value)} /> */}
                        <TextField label="Search Post" variant="standard" value={value} onChange={(e)=>handleFilter(e?.target?.value)} />
                    </Box>
                    <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
                        <CssBaseline />
                        <Grid container rowSpacing={{ xs: 2, sm: 3, md: 4 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            {filteredData?.map((obj) => {
                                return (
                                    <Grid key={obj?.id} item xs={6} md={4}>
                                        <ItemCard showPrice={true} showRating={true} title={obj?.title} description={obj?.description} image={obj?.image} category={obj?.category} rating={obj?.rating} price={obj?.price} />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Box>
                </>
            }
        </>


    );
}
