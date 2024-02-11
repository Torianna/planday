import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import {useState} from "react";
import Grid from "@mui/material/Unstable_Grid2";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4
};

export const AddModal = (props) => {
    const {onClose, open, onAddTile} = props;
    const [title, setTile] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTile = () => {
        onAddTile({title, description, imagePath})
        onClose()
    }

    return (
        <Modal

            open={open}
            onClose={onClose}>
            <Box sx={{...style}}>
                <Grid container rowSpacing={4}>
                    <Grid xs={12}>
                        <Typography variant={'h6'}>Add new tile</Typography>
                    </Grid>
                    <Grid xs={12}>
                        <TextField
                            value={title}
                            type={'text'}
                            sx={{width: '100%'}}
                            onChange={(event) => setTile(event.target.value)}
                            label="Title"
                            inputProps={{'aria-label': 'add title'}}
                        />
                    </Grid>
                    <Grid xs={12}>
                        <TextField
                            value={description}
                            type={'text'}
                            sx={{width: '100%'}}
                            onChange={(event) => setDescription(event.target.value)}
                            label="Description"
                            inputProps={{'aria-label': 'add description'}}
                        />
                    </Grid>
                    <Grid xs={12}>
                        <TextField
                            value={imagePath}
                            type={'text'}
                            sx={{width: '100%'}}
                            label="Picture url"
                            onChange={(event) => setImagePath(event.target.value)}
                            inputProps={{'aria-label': 'add picture url'}}
                        />
                    </Grid>
                    <Grid xs={12}>
                        <Button variant={'contained'} onClick={handleAddTile}>Add Tile</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>

    )
}