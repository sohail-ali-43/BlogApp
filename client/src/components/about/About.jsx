

import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Blog App</Typography>
                <Text variant="h5">I'm a Mern atck developer .<br />
                    If you are interested, you can view some of my favorite projects in my Github just Click on the github symbol
                    <Box component="span" style={{ marginLeft: 10 }}>
                        <Link href="https://github.com/sohail-ali-43" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
              
            </Wrapper>
        </Box>
    )
}

export default About;