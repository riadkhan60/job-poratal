import {
  Box,
  Button,
  ButtonGroup,
  CardMedia,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import JobRequirementList from '../Components/JobRequirementList';
import { MdDeleteOutline } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
function JobViewDemo() {
  return (
    <div>
      <Container sx={{ marginTop: '12rem' }}>
        <Typography variant="h3">
          Have Your dream job as front end webdeveloper
        </Typography>
        <Stack
          justifyContent={'space-between'}
          alignItems={'center'}
          sx={{ marginTop: '3rem' }}
          direction={{lg:'row'}}
        >
          <Typography  sx={{ maxWidth: '800px' }} variant="body1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis obcaecati rem perferendis modi officia consequuntur qui labore quis excepturi facere. Sequi rem eligendi vel in, perspiciatis quos ut suscipit! Quae numquam id rem expedita quas quia, nihil, consequatur at perspiciatis maxime amet porro quidem iusto sed deserunt accusantium delectus vel, itaque nulla? Iste eveniet aliquam quidem quisquam ad eius! Dicta?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequuntur corporis rem distinctio, dignissimos porro reiciendis aliquid debitis itaque amet! Assumenda aliquam molestiae minus repudiandae error sint, placeat dolor iure, ullam odit eligendi, ipsam quis obcaecati eos? Sunt unde quia, nihil aut alias reprehenderit dolorem quaerat. Voluptatibus voluptates fuga tempora consequuntur pariatur corporis explicabo illum vero, harum temporibus natus dignissimos repudiandae deleniti iste nulla voluptate blanditiis sed eum? Sit, minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nisi omnis enim quae dolores, expedita corrupti, accusamus quaerat eaque autem ullam fugiat harum nobis facere ducimus dolore deleniti distinctio aperiam explicabo pariatur asperiores ipsam eius laudantium. Dolorem doloremque tenetur dolor sed deserunt doloribus officiis rem eligendi nesciunt dolores animi architecto, iusto explicabo sint minima nisi aut nobis facilis optio asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, consectetur molestias velit esse expedita natus impedit alias? Architecto incidunt illum, facere sunt placeat cumque aliquid distinctio explicabo quae nostrum assumenda tempora rerum recusandae! Amet odio, corrupti modi ut illo a, iure at, vero ipsam totam adipisci consequatur obcaecati. Eos, harum.
          </Typography>
          <Box>
            <CardMedia
              component="img"
              height="140"
              width="400px"
              image="http://source.unsplash.com/random"
              alt="random image"
              sx={{marginBottom:'2rem'}}
            />
            <JobRequirementList skills={['React', 'JavaScript', 'CSS', 'SCSS', 'TailWind', 'Redux','React Router', 'React Querry' ]} />
          </Box>
        </Stack>
        <ButtonGroup sx={{ marginTop: '3rem' }} variant="outlined">
          <Button startIcon={<MdDeleteOutline />}>Delete</Button>
          <Button startIcon={<CiEdit />}>Edit</Button>
        </ButtonGroup>
      </Container>
    </div>
  );
}

export default JobViewDemo;
