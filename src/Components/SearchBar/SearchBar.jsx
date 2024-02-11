import {IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = ({handleSearch}) => {
    return (
        <Paper
            component="form"
            sx={{ display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                onChange={(event)=> handleSearch(event.target.value)}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Tiles"
                inputProps={{ 'aria-label': 'search tiles' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}