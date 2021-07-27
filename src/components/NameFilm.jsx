import {Box, Skeleton, Typography} from "@material-ui/core";

function NameFilm({name, year}) {
   return (
      <Box sx={{margin: '20px 0 30px'}}>
         {name
            ? <Typography sx={{
               fontSize: '25px',
            }}>
               {name} ({year})
            </Typography>
            : <Skeleton variant='text' animation="wave" width={200} height={38}/>}
      </Box>
   )
}

export default NameFilm