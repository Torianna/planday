import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import tilesData from '../../gridTilesData.json'
import {Button, Card, CardActionArea, CardContent, CardMedia, Container, Pagination, Typography} from "@mui/material";
import {SearchBar} from "../SearchBar/SearchBar";
import {useEffect, useState} from "react";
import {AddModal} from "../AddModal/AddModal";

const pageSize = 6

export const GridList = () => {
    const [allTiles, setAllTiles] = useState(tilesData)
    const [foundData, setFoundData] = useState(allTiles)
    const [searchValue, setSearchValue] = useState('')
    const [openModal, setOpenModal] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        setFoundData(allTiles.filter((tile) => tile.title.toUpperCase().includes(searchValue.toUpperCase())))
        setPage(1)
    }, [allTiles, searchValue])

    const handleAddTile = (tile) => {
        setAllTiles(state => state.concat(tile))
    }

    const tiles = foundData.slice((page - 1) * pageSize, page * pageSize)

    return (
        <Container fixed>
            <Grid container rowSpacing={6} columnSpacing={{xs: 1, sm: 2, md: 3}}
                  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Grid xs={12} justifyContent={'center'} sx={{display: "flex"}}>
                    <Typography  align={'center'} variant="h2" component="h3">
                        Fun Tiles
                    </Typography>
                </Grid>
                <Grid xs={12} justifyContent={'center'} sx={{display: "flex"}} columnGap={{xs: 1, sm: 2, md: 3}}>
                    <SearchBar handleSearch={(searchValue => setSearchValue(searchValue))}/>
                    <Button variant={'contained'} onClick={()=>setOpenModal(true)}>Add Tile</Button>
                </Grid>
                {tiles.length > 0 ? <>
                        {tiles.map(value =>
                            <>
                                <Grid xs={12} sm={6} md={4}>
                                    <Card sx={{maxWidth: 345}}>
                                        <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="140"
                                            image={value.imagePath}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {value.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {value.description}
                                            </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </>
                        )}
                        <Grid xs={12} justifyContent={'center'} sx={{display: "flex"}}>
                            <Pagination onChange={(e, value) => setPage(value)} page={page}
                                        count={Math.ceil(foundData.length / pageSize)} color="primary"/>
                        </Grid>
                    </> :
                    <Typography align={'left'} sx={{marginTop: 10}} variant="h4" component="h3">
                        No results found...
                    </Typography>
                }
                <AddModal open={openModal} onClose={()=> setOpenModal(false)} onAddTile={handleAddTile}/>
            </Grid>
        </Container>
    )
}