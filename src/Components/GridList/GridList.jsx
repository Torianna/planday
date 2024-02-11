import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import tilesData from '../../gridTilesData.json'
import {Card, CardActionArea, CardContent, CardMedia, Container, Pagination, Typography} from "@mui/material";
import {SearchBar} from "../SearchBar/SearchBar";
import {useState} from "react";

const pageSize = 6

export const GridList = () => {
    const [foundData, setFoundData] = useState(tilesData)
    const [page, setPage] = useState(1)

    const handleSearch = (searchValue) => {
        setFoundData(tilesData.filter((tile) => tile.title.toUpperCase().includes(searchValue.toUpperCase())))
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
                <Grid xs={12} justifyContent={'center'} sx={{display: "flex"}}>
                    <SearchBar handleSearch={handleSearch}/>
                </Grid>

                {tiles.length > 1 ? <>
                        {tiles.map(value =>
                            <>
                                <Grid xs={4}>
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
            </Grid>

        </Container>

    )
}