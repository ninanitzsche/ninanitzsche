import * as React from 'react';
import Familie1 from '../../ninanitzschephotography/public/teresa/_DSC2559.jpg';
import Familie2 from '../../ninanitzschephotography/public/teresa/_DSC2568.jpg';
import Familie3 from '../../ninanitzschephotography/public/teresa/_DSC3221.jpg';
import Familie4 from '../../ninanitzschephotography/public/teresa/_DSC3005.jpg';
import Familie5 from '../../ninanitzschephotography/public/teresa/_DSC2632.jpg';
import Familie6 from '../../ninanitzschephotography/public/teresa/_DSC2917.jpg';
import Familie7 from '../../ninanitzschephotography/public/teresa/_DSC2839.jpg';
import Familie8 from '../../ninanitzschephotography/public/teresa/_DSC3289.jpg';
import Familie9 from '../../ninanitzschephotography/public/teresa/_DSC3083.jpg';
import Familie10 from '../../ninanitzschephotography/public/teresa/_DSC3143.jpg';
import Familie11 from '../../ninanitzschephotography/public/teresa/_DSC3133.jpg';
import Familie12 from '../../ninanitzschephotography/public/teresa/_DSC2886.jpg';
import Gallery from 'react-photo-gallery';
import styles from "../styles/Home.module.css";
import {Grid} from "@mui/material";

function srcset({image, size, rows = 1, cols = 1}: { image: any, size: any, rows?: number, cols?: number }) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function QuiltedImageList() {
    return (
        <Grid container  spacing={2} className={`${styles.informationText} ${styles.informationTextCenter}  ${styles.aboutMe}`} id="Portfolio">
        <Gallery photos={photos}/>
        </Grid>
    );
}

const photos = [
    {
        src: Familie1.src,
        width: 4,
        height: 3
    },
    {
        src: Familie2.src,
        width: 4,
        height: 3
    },
    {
        src: Familie3.src,
        width: 4,
        height: 3
    },
    {
        src: Familie4.src,
        width: 1,
        height: 1
    },
    {
        src: Familie5.src,
        width: 4,
        height: 3
    },
    {
        src: Familie6.src,
        width: 1,
        height: 1
    },
    {
        src: Familie7.src,
        width: 4,
        height: 3
    },
    {
        src: Familie8.src,
        width: 1,
        height: 1
    },
    {
        src: Familie9.src,
        width: 4,
        height: 3
    },
    {
        src: Familie10.src,
        width: 1,
        height: 1
    },
    {
        src: Familie11.src,
        width: 4,
        height: 3
    },
    {
        src: Familie12.src,
        width: 1,
        height: 1
    }
];