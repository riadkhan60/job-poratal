import Grid  from "@mui/material/Grid";

function GridColumn({children, height}) {
  return (
    <Grid
      justifyContent={'center'}
      alignItems={'center'}
      direction={'column'}
      height={height}
      container
    >{children}</Grid>
  );
}

export default GridColumn;
