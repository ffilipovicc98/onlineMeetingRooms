import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import styled from 'styled-components';

const srpringConfig = {
    stiffness: 100,
    damping: 18,
    mass: 2,
};

const variantsOfHomePageSvgIcon = {
    initialState: {},
    animateState: {
        transition: {
            staggerChildren: 0.15,
        },
    },
    exitState: {},
};

const transition2 = {
    type: 'spring',
    bounce: 0.45,
    duration: 1.7,
};

const variantsOfHomePageSvgIconChlidren = {
    initialState: { scale: 0, opacity: 0 },
    animateState: {
        scale: 1,
        opacity: 1,
        transition: {
            ...transition2,
        },
    },
    exitState: { scale: 1, opacity: 1 },
};

const StyledHomePageSvgIcon = styled(motion.svg)`
    /* debugging properties */
    /* background-color: rgb(49, 161, 46); */
    /* opacity: 0.5; */

    /* main properties */
    padding: 50px;
    width: 700px;
    overflow: visible;
`;

const HomePageSvgIcon = () => {
    let x = useSpring(0, srpringConfig);
    let y = useSpring(0, srpringConfig);

    let blobX = useTransform(x, (value) => value / 15);
    let blobY = useTransform(y, (value) => value / 15);
    let flowersX = useTransform(x, (value) => value / 5);
    let flowersY = useTransform(y, (value) => value / 5);
    let tableWithContentsX = useTransform(x, (value) => value / 9);
    let tableWithContentsY = useTransform(y, (value) => value / 9);
    let manInChairX = useTransform(x, (value) => -value / 9);
    let manInChairY = useTransform(y, (value) => -value / 9);

    return (
        <StyledHomePageSvgIcon
            id='home_page_svg_icon'
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 1126.65 785.91'
            variants={variantsOfHomePageSvgIcon}
            onMouseMove={(event) => {
                const {
                    left,
                    right,
                    bottom,
                    top,
                } = event.currentTarget.getBoundingClientRect();
                const kordinataCentraSVG_x = left + (right - left) / 2;
                const kordinataCentraSVG_y = top + (bottom - top) / 2;
                const pom = {
                    x: kordinataCentraSVG_x - event.clientX,
                    y: kordinataCentraSVG_y - event.clientY,
                };

                x.set(pom.x);
                y.set(pom.y);
            }}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
        >
            <defs>
                <style>
                    {`
                        .home_page_svg_cls_1,
                        .home_page_svg_cls_3 {
                        fill: #3182ce;
                        }
                        .home_page_svg_cls_1,
                        .home_page_svg_cls_15,
                        .home_page_svg_cls_6 {
                        opacity: 0.1;
                        }
                        .home_page_svg_cls_1,
                        .home_page_svg_cls_15,
                        .home_page_svg_cls_16,
                        .home_page_svg_cls_4,
                        .home_page_svg_cls_6 {
                        isolation: isolate;
                        }
                        .home_page_svg_cls_17,
                        .home_page_svg_cls_2 {
                        fill: none;
                        stroke-miterlimit: 10;
                        }
                        .home_page_svg_cls_2 {
                        stroke: #535461;
                        stroke-width: 2px;
                        }
                        .home_page_svg_cls_15,
                        .home_page_svg_cls_4,
                        .home_page_svg_cls_8 {
                        fill: #fff;
                        }
                        .home_page_svg_cls_4 {
                        opacity: 0.5;
                        }
                        .home_page_svg_cls_5 {
                        fill: #474059;
                        }
                        .home_page_svg_cls_7 {
                        fill: #c0bccf;
                        }
                        .home_page_svg_cls_9 {
                        fill: #e8eaf1;
                        }
                        .home_page_svg_cls_10 {
                        fill: url(#linear-gradient);
                        }
                        .home_page_svg_cls_11 {
                        fill: #b96b6b;
                        }
                        .home_page_svg_cls_12 {
                        fill: #ffb9b9;
                        }
                        .home_page_svg_cls_13 {
                        fill: #fec5d9;
                        }
                        .home_page_svg_cls_14 {
                        fill: #747b9c;
                        }
                        .home_page_svg_cls_16 {
                        opacity: 0.2;
                        }
                        .home_page_svg_cls_17 {
                        stroke: #3182ce;
                        }
                        .home_page_svg_cls_18 {
                        fill: url(#linear-gradient-2);
                        }
                        .home_page_svg_cls_19 {
                        fill: #d6e6f9;
                        }
                        .home_page_svg_cls_20 {
                        fill: #5f546f;
                        }
                        .home_page_svg_cls_21 {
                        fill: #ffced8;
                        }
                        .home_page_svg_cls_22 {
                        fill: #bc8387;
                        }
                        .home_page_svg_cls_23 {
                        fill: #ae767a;
                        }
                        .home_page_svg_cls_24 {
                        fill: #cb919b;
                        }
                        .home_page_svg_cls_25 {
                        fill: #5a5773;
                        }`}
                </style>
                <linearGradient
                    id='linear-gradient'
                    x1='470.08'
                    y1='628.02'
                    x2='470.08'
                    y2='535.97'
                    gradientTransform='translate(-36.68 -349.05)'
                    gradientUnits='userSpaceOnUse'
                >
                    <stop offset='0' stopColor='gray' stopOpacity='0.25' />
                    <stop offset='0.54' stopColor='gray' stopOpacity='0.12' />
                    <stop offset='1' stopColor='gray' stopOpacity='0.1' />
                </linearGradient>
                <linearGradient
                    id='linear-gradient-2'
                    x1='654.76'
                    y1='1018.85'
                    x2='654.76'
                    y2='463.88'
                    xlinkHref='#linear-gradient'
                />
            </defs>
            <title>undraw_social_networking_nqk4</title>
            <motion.g
                id='Blob'
                x={blobX}
                y={blobY}
                whileTap={{ scale: 0.9 }}
                variants={variantsOfHomePageSvgIconChlidren}
            >
                <path
                    className='home_page_svg_cls_1'
                    d='M1060,458.2c-39.1,53.7-26.2,130.4-3.6,191.5,7.6,20.5,16.2,42.1,12.3,64.3-4.8,27.2-27.4,47.6-50.8,58.7-42.8,20.2-93.3,17-131.5-8.5-33-22-56.2-58.6-89.9-79.5-56.3-35-129.4-19.4-192,7.4-44.3,18.9-92.9,43.3-136.1,25.8-30.4-12.3-50.9-43.6-61.6-77.1-5.2-16.2-8.8-33.7-19.2-46.3-6.2-7.5-14.3-12.8-22.7-17.1-76.4-40-174.6-15-248.7-59.6-50-30.1-81.1-88.6-94.1-150.1s-9.7-126.4-4.6-190.2C21.2,132.1,27,83.6,54.2,48,83.1,10.3,131.4-4.7,174.6,1.2s81.9,29.9,115.8,58.5c42.4,35.8,81.4,80.6,134.1,94.2,35.9,9.2,74.1,2.7,111.4-.2,62.4-4.8,124.6.7,186.4,7,59.2,6,118.7,12.7,174.8,32.4,39.7,13.9,71.1,40.2,108.4,58.2,24.3,11.7,51.1,14.4,74,29.6,28.3,18.6,53.8,51.7,45.5,91.3C1117.2,410,1080.8,429.7,1060,458.2Z'
                    transform='translate(0.06 0.04)'
                />
            </motion.g>
            <motion.g
                id='flowers'
                x={flowersX}
                y={flowersY}
                whileTap={{ scale: 0.9 }}
                variants={variantsOfHomePageSvgIconChlidren}
            >
                <path
                    className='home_page_svg_cls_2'
                    d='M151.6,575.2s-3.3-97.8-56.2-153C73.2,399,58.6,369.6,54.8,337.7a248.09,248.09,0,0,1-1.2-45.6'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_3'
                    d='M20.4,257.2c3.6,10.9,33.9,36,33.9,36S63.6,255,60,244.1a20.86,20.86,0,0,0-39.6,13.1Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_3'
                    d='M7.8,328.5c9,7.2,48,11.8,48,11.8s-13-37.1-22-44.3a20.81,20.81,0,1,0-26,32.5Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_3'
                    d='M43.5,431.4c11.4,1.7,47.4-14,47.4-14s-30-25.5-41.3-27.2a20.82,20.82,0,0,0-6.1,41.2Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_3'
                    d='M88,503.1c10.9,3.6,49.1-5.8,49.1-5.8s-25.2-30.2-36.1-33.8a20.84,20.84,0,1,0-13,39.6Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_3'
                    d='M98,328.7c-5.3,10.2-39.2,30.2-39.2,30.2s-3.1-39.2,2.2-49.4a20.84,20.84,0,0,1,37,19.2Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_3'
                    d='M149,413.2c-8.1,8.1-46.4,17.1-46.4,17.1s8.8-38.3,16.9-46.5A20.82,20.82,0,1,1,149,413.2Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_3'
                    d='M187.3,502.2c-6.6,9.4-42.9,24.7-42.9,24.7s2.2-39.3,8.8-48.7A20.8,20.8,0,0,1,188,501a3.46,3.46,0,0,1-.7,1.2Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_2'
                    d='M140,534.8s30-43.6,24.7-84.7a80.37,80.37,0,0,1,9.5-49.9,136.13,136.13,0,0,1,14.1-20.3'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_3'
                    d='M185.2,354.1c-1.9,5.9,3.2,26.6,3.2,26.6s16.3-13.7,18.3-19.6a11.31,11.31,0,0,0-21.5-7Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_3'
                    d='M156.7,381.1c1.6,6,17.1,20.6,17.1,20.6s6.3-20.3,4.7-26.4a11.28,11.28,0,0,0-21.8,5.8Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_3'
                    d='M139.2,437.3c4.4,4.4,25.2,9.1,25.2,9.1s-4.8-20.7-9.3-25.1a11.28,11.28,0,0,0-15.9,16Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_3'
                    d='M135.5,483c3.6,5.1,23.3,13.3,23.3,13.3s-1.3-21.3-4.9-26.3a11.26,11.26,0,1,0-18.4,13Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_3'
                    d='M196,410.2c-5.6,2.7-26.8.5-26.8.5s11.3-18.1,16.9-20.8a11.29,11.29,0,0,1,9.9,20.3Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_3'
                    d='M191,463.4c-6.2.9-25.7-7.5-25.7-7.5s16.1-13.9,22.3-14.8a11.28,11.28,0,0,1,3.4,22.3Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_3'
                    d='M179,514.5c-5.9,2-26.6-3-26.6-3s13.6-16.4,19.5-18.4a11.27,11.27,0,1,1,7.1,21.4Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_4'
                    d='M185.2,354.1c-1.9,5.9,3.2,26.6,3.2,26.6s16.3-13.7,18.3-19.6a11.31,11.31,0,0,0-21.5-7Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_4'
                    d='M156.7,381.1c1.6,6,17.1,20.6,17.1,20.6s6.3-20.3,4.7-26.4a11.28,11.28,0,0,0-21.8,5.8Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_4'
                    d='M139.2,437.3c4.4,4.4,25.2,9.1,25.2,9.1s-4.8-20.7-9.3-25.1a11.28,11.28,0,0,0-15.9,16Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_4'
                    d='M135.5,483c3.6,5.1,23.3,13.3,23.3,13.3s-1.3-21.3-4.9-26.3a11.26,11.26,0,1,0-18.4,13Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_4'
                    d='M196,410.2c-5.6,2.7-26.8.5-26.8.5s11.3-18.1,16.9-20.8a11.29,11.29,0,0,1,9.9,20.3Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_4'
                    d='M191,463.4c-6.2.9-25.7-7.5-25.7-7.5s16.1-13.9,22.3-14.8a11.28,11.28,0,0,1,3.4,22.3Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_4'
                    d='M179,514.5c-5.9,2-26.6-3-26.6-3s13.6-16.4,19.5-18.4a11.27,11.27,0,1,1,7.1,21.4Z'
                    transform='translate(0.06 0.04)'
                />
                <polygon
                    className='home_page_svg_cls_5'
                    points='195.56 653.14 110.26 653.14 88.86 523.04 216.86 523.04 195.56 653.14'
                />
                <polygon
                    className='home_page_svg_cls_6'
                    points='200.56 523.04 180.66 644.64 108.86 644.64 110.26 653.14 195.56 653.14 216.86 523.04 200.56 523.04'
                />
            </motion.g>
            <motion.g
                id='tableWithContents'
                x={tableWithContentsX}
                y={tableWithContentsY}
                variants={variantsOfHomePageSvgIconChlidren}
            >
                <g id='table'>
                    <rect
                        className='home_page_svg_cls_7'
                        x='232.86'
                        y='359.04'
                        width='148'
                        height='51'
                    />
                    <rect
                        className='home_page_svg_cls_7'
                        x='836.86'
                        y='334.04'
                        width='32'
                        height='278'
                    />
                    <rect
                        className='home_page_svg_cls_6'
                        x='232.86'
                        y='359.04'
                        width='148'
                        height='3'
                    />
                    <rect
                        className='home_page_svg_cls_6'
                        x='836.86'
                        y='334.04'
                        width='32'
                        height='28'
                    />
                    <rect
                        className='home_page_svg_cls_7'
                        x='232.86'
                        y='408.04'
                        width='148'
                        height='51'
                    />
                    <circle
                        className='home_page_svg_cls_3'
                        cx='306.86'
                        cy='433.04'
                        r='9'
                    />
                    <circle
                        className='home_page_svg_cls_3'
                        cx='306.86'
                        cy='384.04'
                        r='9'
                    />
                    <rect
                        className='home_page_svg_cls_7'
                        x='232.86'
                        y='459.04'
                        width='148'
                        height='51'
                    />
                    <circle
                        className='home_page_svg_cls_3'
                        cx='306.86'
                        cy='483.04'
                        r='9'
                    />
                    <rect
                        className='home_page_svg_cls_7'
                        x='232.86'
                        y='510.04'
                        width='148'
                        height='51'
                    />
                    <circle
                        className='home_page_svg_cls_3'
                        cx='306.86'
                        cy='534.04'
                        r='9'
                    />
                    <rect
                        className='home_page_svg_cls_7'
                        x='232.86'
                        y='561.04'
                        width='148'
                        height='51'
                    />
                    <circle
                        className='home_page_svg_cls_3'
                        cx='306.86'
                        cy='585.04'
                        r='9'
                    />
                    <rect
                        className='home_page_svg_cls_6'
                        x='232.86'
                        y='456.04'
                        width='148'
                        height='4'
                    />
                    <rect
                        className='home_page_svg_cls_6'
                        x='232.86'
                        y='406.04'
                        width='148'
                        height='4'
                    />
                    <rect
                        className='home_page_svg_cls_6'
                        x='232.86'
                        y='507.04'
                        width='148'
                        height='4'
                    />
                    <rect
                        className='home_page_svg_cls_6'
                        x='232.86'
                        y='558.04'
                        width='148'
                        height='4'
                    />
                    <rect
                        className='home_page_svg_cls_7'
                        x='229.86'
                        y='330.04'
                        width='643'
                        height='30'
                    />
                </g>
                <g id='screen'>
                    <path
                        className='home_page_svg_cls_5'
                        d='M390.3,158.9H576.5a9.6,9.6,0,0,1,9.6,9.6V287.3a9.6,9.6,0,0,1-9.6,9.6H390.3a9.6,9.6,0,0,1-9.6-9.6V168.5A9.54,9.54,0,0,1,390.3,158.9Z'
                        transform='translate(0.06 0.04)'
                    />
                    <rect
                        className='home_page_svg_cls_8'
                        x='385.06'
                        y='175.04'
                        width='196.4'
                        height='112.8'
                    />
                    <ellipse
                        className='home_page_svg_cls_8'
                        cx='483.26'
                        cy='169.24'
                        rx='1.7'
                        ry='1.9'
                    />
                    <rect
                        className='home_page_svg_cls_5'
                        x='464.86'
                        y='292.04'
                        width='36'
                        height='38'
                    />
                    <path
                        className='home_page_svg_cls_5'
                        d='M461.8,327h44a6,6,0,0,1,6,6h-56A6,6,0,0,1,461.8,327Z'
                        transform='translate(0.06 0.04)'
                    />
                </g>
                <motion.g id='screenContent' whileTap={{ scale: 0.9 }}>
                    <rect
                        className='home_page_svg_cls_9'
                        x='389.86'
                        y='182.84'
                        width='92'
                        height='97.2'
                    />
                    <rect
                        className='home_page_svg_cls_8'
                        x='391.86'
                        y='184.94'
                        width='88'
                        height='93'
                    />
                    <path
                        className='home_page_svg_cls_10'
                        d='M470.3,252.7c1.2-9.7-1.2-10.4-1.2-10.4l-3.5-1.7a9.7,9.7,0,0,0,.1-1.7v-1.4c-.4-3.8-2.6-7.2-4.3-10.7a32.92,32.92,0,0,1-2.8-10.2c-.4-4.4,0-8.9-1.5-13a24,24,0,0,0-6.2-8.6,32.25,32.25,0,0,0-10-6.8,16.3,16.3,0,0,0-11.9-.3c-3.4,1.3-6,4-8.6,6.6a30.75,30.75,0,0,0-4.9,5.9,25.51,25.51,0,0,0-2.7,8.9,147.64,147.64,0,0,0-1.7,14.9c-.3,4.2-.7,8.9-4,11.5-1.6,1.3-3.9,2-4.7,3.8a3.72,3.72,0,0,0-.2,1.8,7.57,7.57,0,0,0,.1,1.5,2.92,2.92,0,0,0,.2.9,50.41,50.41,0,0,0-2.4,7.8,196.66,196.66,0,0,0-4.9,27.4h59.3a4.85,4.85,0,0,0,1.7,0h15.4Z'
                        transform='translate(0.06 0.04)'
                    />
                    <rect
                        className='home_page_svg_cls_11'
                        x='419.06'
                        y='212.34'
                        width='34'
                        height='25.7'
                    />
                    <rect
                        className='home_page_svg_cls_6'
                        x='419.06'
                        y='212.34'
                        width='34'
                        height='25.7'
                    />
                    <path
                        className='home_page_svg_cls_12'
                        d='M454.3,239.2l-13.1,18.5-13.8-1.2s-17.9,1.2-6-12.6c5.7-6.6,7.6-12.1,8-16a12.76,12.76,0,0,0-.9-6.7l14.9-1.8a10.12,10.12,0,0,0-.2,6.2C445.1,233.5,454.3,239.2,454.3,239.2Z'
                        transform='translate(0.06 0.04)'
                    />
                    <path
                        className='home_page_svg_cls_6'
                        d='M443.3,225.7a14.86,14.86,0,0,1-13.8,2.2,12.76,12.76,0,0,0-.9-6.7l14.9-1.8A10.46,10.46,0,0,0,443.3,225.7Z'
                        transform='translate(0.06 0.04)'
                    />
                    <circle
                        className='home_page_svg_cls_12'
                        cx='434.26'
                        cy='213.24'
                        r='14.9'
                    />
                    <path
                        className='home_page_svg_cls_6'
                        d='M435.1,252.9s5.4-6.6,5.4-12a12.25,12.25,0,0,1,7.2-6c5.4-1.8,4.8,0,4.8,0l3.6,14.3-1.2,25.7.6,3H411.3l3-12-.6-10.1,2.4-15.5,7.2-4.2,5.4,7.2Z'
                        transform='translate(0.06 0.04)'
                    />
                    <path
                        className='home_page_svg_cls_13'
                        d='M435.1,253.6s5.4-6.6,5.4-12a12.25,12.25,0,0,1,7.2-6c5.4-1.8,4.8,0,4.8,0l3.6,14.3-1.2,25.7.6,3H411.3l3-12-.6-10.2L416,241l7.2-4.2,5.4,7.2Z'
                        transform='translate(0.06 0.04)'
                    />
                    <path
                        className='home_page_svg_cls_6'
                        d='M426.8,235l-18.5,3s-3-.6-6.6,13.7a201.91,201.91,0,0,0-4.8,26.9H420s1.4-23.9,5-25.7l5-7.7s-8-.6-6.8-4.8S426.8,235,426.8,235Z'
                        transform='translate(0.06 0.04)'
                    />
                    <path
                        className='home_page_svg_cls_14'
                        d='M426.2,235l-18.5,3s-3-.6-6.6,13.7a201.91,201.91,0,0,0-4.8,26.9h23.1s1.4-23.9,5-25.7l5-7.7s-8-.6-6.8-4.8S426.2,235,426.2,235Z'
                        transform='translate(0.06 0.04)'
                    />
                    <path
                        className='home_page_svg_cls_6'
                        d='M447.7,233.2l19.7,9.6s2.4.6,1.2,10.2l1.2,25.7H448.6a77.49,77.49,0,0,0,.9-24.5A147.54,147.54,0,0,1,447.7,233.2Z'
                        transform='translate(0.06 0.04)'
                    />
                    <path
                        className='home_page_svg_cls_14'
                        d='M448.3,233.2l19.7,9.6s2.4.6,1.2,10.2l1.2,25.7H449.2a77.49,77.49,0,0,0,.9-24.5A163.75,163.75,0,0,1,448.3,233.2Z'
                        transform='translate(0.06 0.04)'
                    />
                    <path
                        className='home_page_svg_cls_6'
                        d='M429.3,206.7c-.3,2.4-1.9,4.4-3.3,6.4s-2.6,4.5-1.8,6.8c.3.9.9,1.7,1.1,2.6.4,1.6-.5,3.3-.3,4.9.2,2.2,2.1,3.9,3.1,5.9,2.2,4.2.5,9.4-1.9,13.5s-5.5,8-6.3,12.6c-.7,4.3.7,8.7,2.2,
12.8a3.87,3.87,0,0,1,.3,2.6c-.5,1.4-2.2,1.8-3.6,1.9a38.43,38.43,0,0,1-4.8,0,3.92,3.92,0,0,1-1.8-.4c-1.1-.6-1.4-2-1.8-3.2s-1.3-2.5-2.6-2.4c-.8.1-1.5.8-2.3.9a2.17,2.17,0,0,1-2-.8c-1.5-1.6-1.1-4.2-.1-6.2s2.5-3.7,3.1-5.8c1.6-5.2-2.4-10.4-3.3-15.7a5.66,5.66,0,0,1,.1-2.6c.7-1.9,2.9-2.5,4.5-3.8,3.2-2.5,3.6-7.2,3.9-11.2a141.66,141.66,0,0,1,1.6-14.6,30.69,30.69,0,0,1,2.6-8.8,29.13,29.13,0,0,1,4.7-5.8c2.5-2.6,5-5.2,8.3-6.5a16.26,16.26,0,0,1,11.5.3,32.4,32.4,0,0,1,9.7,6.7,22.76,22.76,0,0,1,6,8.4c1.5,4,1,8.5,1.5,12.8a31.58,31.58,0,0,0,2.7,10c1.6,3.4,3.8,6.7,4.1,10.5.3,3-.7,6-1.2,9-.9,5.2-.4,10.5.2,15.7a11.67,11.67,0,0,0,.8,3.7,13.57,13.57,0,0,0,3.6,4.3,1.33,1.33,0,0,1,.6,1,1.19,1.19,0,0,1-.5.9c-1.8,1.6-4.9.4-6.9,1.9-.5.5-1,1-1.5,1.6a6.77,6.77,0,0,1-9.5.4,6.87,6.87,0,0,1-2-3.5c-.5-2.3.3-4.7.5-7.1.9-7.5-2.9-14.7-6-21.6-1.4-3.2-2.8-6.7-2.2-10.2.4-2.8,2-5.3,3.1-7.9,2.3-5.2,3-11.3,1-16.6a16,16,0,0,0-8.5-9.2c-1.4-.6-3.4-1.5-4.9-.7C428.8,201.6,429.5,204.5,429.3,206.7Z'
                        transform='translate(0.06 0.04)'
                    />
                    <path
                        className='home_page_svg_cls_11'
                        d='M429.3,206.1c-.3,2.4-1.9,4.4-3.3,6.4s-2.6,4.5-1.8,6.8c.3.9.9,1.7,1.1,2.6.4,1.6-.5,3.3-.3,4.9.2,2.2,2.1,3.9,3.1,5.9,2.2,4.2.5,9.4-1.9,13.5s-5.5,8-6.3,12.6c-.7,4.3.7,8.7,2.2,12.8a3.87,3.87,0,0,1,.3,2.6c-.5,1.4-2.2,1.8-3.6,1.9a38.43,38.43,0,0,1-4.8,0,3.92,3.92,0,0,1-1.8-.4c-1.1-.6-1.4-2-1.8-3.2s-1.3-2.5-2.6-2.4c-.8.1-1.5.8-2.3.9a2.17,2.17,0,0,1-2-.8c-1.5-1.6-1.1-4.2-.1-6.2s2.5-3.7,3.1-5.8c1.6-5.2-2.4-10.4-3.3-15.7a5.66,5.66,0,0,1,.1-2.6c.7-1.9,2.9-2.5,4.5-3.8,3.2-2.5,3.6-7.2,3.9-11.2a141.66,141.66,0,0,1,1.6-14.6,30.69,30.69,0,0,1,2.6-8.8,29.13,29.13,0,0,1,4.7-5.8c2.5-2.6,5-5.2,8.3-6.5a16.26,16.26,0,0,1,11.5.3,32.09,32.09,0,0,1,9.7,6.6,22.76,22.76,0,0,1,6,8.4c1.5,4,1,8.5,1.5,12.8a31.58,31.58,0,0,0,2.7,10c1.6,3.4,3.8,6.7,4.1,10.5.3,3-.7,6-1.2,9-.9,5.2-.4,10.5.2,15.7a11.67,11.67,0,0,0,.8,3.7,13.57,13.57,0,0,0,3.6,4.3,1.33,1.33,0,0,1,.6,1,1.19,1.19,0,0,1-.5.9c-1.8,1.6-4.9.4-6.9,1.9-.5.5-1,1-1.5,1.6a6.77,6.77,0,0,1-9.5.4,6.87,6.87,0,0,1-2-3.5c-.5-2.3.3-4.7.5-7.1.9-7.5-2.9-14.7-6-21.6-1.4-3.2-2.8-6.7-2.2-10.2.4-2.8,2-5.3,3.1-7.9,2.3-5.2,3-11.3,1-16.6a16,16,0,0,0-8.5-9.2c-1.4-.6-3.4-1.5-4.9-.7C428.8,200.9,429.5,203.9,429.3,206.1Z'
                        transform='translate(0.06 0.04)'
                    />
                    <rect
                        className='home_page_svg_cls_9'
                        x='500.86'
                        y='188.94'
                        width='72'
                        height='3'
                    />
                    <rect
                        className='home_page_svg_cls_9'
                        x='500.86'
                        y='196.94'
                        width='72'
                        height='3'
                    />
                    <rect
                        className='home_page_svg_cls_9'
                        x='500.86'
                        y='204.94'
                        width='72'
                        height='3'
                    />
                    <rect
                        className='home_page_svg_cls_9'
                        x='500.86'
                        y='212.94'
                        width='72'
                        height='3'
                    />
                    <rect
                        className='home_page_svg_cls_9'
                        x='500.86'
                        y='220.94'
                        width='72'
                        height='3'
                    />
                    <rect
                        className='home_page_svg_cls_9'
                        x='500.86'
                        y='228.94'
                        width='72'
                        height='3'
                    />
                    <rect
                        className='home_page_svg_cls_9'
                        x='500.86'
                        y='236.94'
                        width='72'
                        height='3'
                    />
                    <rect
                        className='home_page_svg_cls_9'
                        x='500.86'
                        y='244.94'
                        width='72'
                        height='3'
                    />
                    <rect
                        className='home_page_svg_cls_9'
                        x='500.86'
                        y='252.94'
                        width='72'
                        height='3'
                    />
                    <rect
                        className='home_page_svg_cls_9'
                        x='500.86'
                        y='261.04'
                        width='72'
                        height='3'
                    />
                    <rect
                        className='home_page_svg_cls_9'
                        x='500.86'
                        y='269.04'
                        width='72'
                        height='3'
                    />
                </motion.g>
                <g id='apple'>
                    <path
                        className='home_page_svg_cls_3'
                        d='M808.3,300.4s-9.1-3.1-13.5,5a14.44,14.44,0,0,0,.2,14.1c2.9,5.2,8.8,12,20.1,11.4,9.6-.5,12.7-7.8,13.6-14.6a15,15,0,0,0-13-16.7,16.14,16.14,0,0,0-6.9.7Z'
                        transform='translate(0.06 0.04)'
                    />
                    <path
                        className='home_page_svg_cls_15'
                        d='M796.9,320.2a14.71,14.71,0,0,1-.2-14.1c4.4-8,13.5-5,13.5-5l.5-.2a14.64,14.64,0,0,1,10.7.2,14.91,14.91,0,0,0-12.7-1.2l-.5.2s-9.1-3.1-13.5,5a14.44,14.44,0,0,0,.2,14.1,22.72,22.72,0,0,0,10.3,9.8A23.44,23.44,0,0,1,796.9,320.2Z'
                        transform='translate(0.06 0.04)'
                    />
                    <path
                        className='home_page_svg_cls_16'
                        d='M803.6,304.3s3.4,2.7,11.6,0'
                        transform='translate(0.06 0.04)'
                    />
                    <path
                        className='home_page_svg_cls_3'
                        d='M802.9,285s5.8,15.7,5.3,19.8l4.6-.5s-7.7-13.8-5.8-19.3Z'
                        transform='translate(0.06 0.04)'
                    />
                    <path
                        className='home_page_svg_cls_16'
                        d='M802.9,285s5.8,15.7,5.3,19.8l4.6-.5s-7.7-13.8-5.8-19.3Z'
                        transform='translate(0.06 0.04)'
                    />
                    <path
                        className='home_page_svg_cls_3'
                        d='M826.6,286.3s-9.1-4.7-13.2-.8-4.7,13.7-4.7,13.7S823.5,301.2,826.6,286.3Z'
                        transform='translate(0.06 0.04)'
                    />
                    <path
                        className='home_page_svg_cls_15'
                        d='M826.6,286.3s-9.1-4.7-13.2-.8-4.7,13.7-4.7,13.7S823.5,301.2,826.6,286.3Z'
                        transform='translate(0.06 0.04)'
                    />
                    <path
                        className='home_page_svg_cls_17'
                        d='M808.7,299.2s2.4-11.5,17.9-12.9'
                        transform='translate(0.06 0.04)'
                    />
                </g>
            </motion.g>
            <motion.g
                id='manInAChair'
                x={manInChairX}
                y={manInChairY}
                variants={variantsOfHomePageSvgIconChlidren}
            >
                <path
                    className='home_page_svg_cls_18'
                    d='M756.2,425.8a73.08,73.08,0,0,0,4.3-43.8,368.78,368.78,0,0,1-7.1-53.3c-1.1-17.1-3.6-28.3-6.4-35.5h0s1-23.3-14.8-35.5-52.7-31.5-52.7-31.5l3.7-15.1H683a13.31,13.31,0,0,0,3.2-1.5,13.12,13.12,0,0,0,2.8-2.4c6.2-5.5,6.3-15.5,9.3-23.5,2.3-6.1,6.5-11.4,9.6-17.2,5.6-10.6,6.9-23.6,1.7-34.4s-17.5-18.5-29.7-17.1a52.34,52.34,0,0,0-11.6,3.1c-8.9,3.1-15.9-5.7-24.7-2.6-4.5,1.6-21.1,3.3-24.7,7.8a4.38,4.38,0,0,0-1.7,2.3c-.9,4.4,7.2,13.3,13.2,20.4a32.39,32.39,0,0,0-7.4,20.7v1a32.38,32.38,0,0,0,10,23.4,147.4,147.4,0,0,1-2.4,14.6h-.7S625.7,224,612,224c-3.7,0-8.7-.2-14-.5a145.68,145.68,0,0,0-47.8,5.5c-5.3,1.5-11.2,1.6-16.1-1.9-11.8-8.5-24.4-30.1-26.2-33.1,1.3-8.8,1.1-24.8-17.1-27.8-21.4-3.4-20.2,21.3-7.9,37.1a10.55,10.55,0,0,0-.6,2.4c-1,13.2,11.6,37.5,14.8,40.6s3.2,22.3,25.3,27.4,38,7.1,39,32.5,22.1,51.7,11.6,81.2c-6.3,17.7-4.7,26.9-2.3,31.5l-.6,1.8c-2.4,7.3-5.4,14.6-8.7,19a36.18,36.18,0,0,0-2.2,3.2c-8.6,5.6-17.5,11.8-21,15.6-7.4,8.1-4.2,40.6,0,53.8s30.6,93.3,30.6,93.3h1l.3,2,1.1,6.6c-.3-.2-.7-.4-1-.6a1.75,1.75,0,0,0-2.4.4.37.37,0,0,0-.1.3l-5.1,11.5s-21.1-9.1-22.2,12.2v2.4c0,11.3,6.2,15.5,11.5,17.1a43,43,0,0,1,13.7,6.4c5.1,3.6,12.8,7.4,21.6,5.3a19.78,19.78,0,0,1,5.4-.5c3.8.1,10.2-1,10-9.5v-2s-4.5-17.1-4.6-25a5.87,5.87,0,0,1,.4-2.3c.8-1.4,1-4.2.9-7.1a64.49,64.49,0,0,0-.4-7.6,1.2,1.2,0,0,0-1.3-1,1,1,0,0,0-.8.5l-.2.2c-.7-2.3-1.5-4.9-2.2-7.4l-.6-2h1.4s-8.4-49.8-5.3-53.8c2.1-2.7-1.3-34.4-3.8-56,25.7,1.6,66.6-2.9,94.6-4.3a35.48,35.48,0,0,0,15.3-4.3c-2.5,20.5-7.2,61.5-4.9,64.6,3.2,4.1-5.3,53.8-5.3,53.8h1.3l-.5,1.5h.2c-.8,2.6-1.6,5.5-2.4,7.9l-.2-.2a1.15,1.15,0,0,0-1.6-.3,1,1,0,0,0-.5.8,64.5,64.5,0,0,0-.4,7.6c0,2.9.2,5.6.9,7.1a5.87,5.87,0,0,1,.4,2.3c-.2,7.9-4.6,25-4.6,25v2c-.2,8.5,6.2,9.6,10,9.5a19.78,19.78,0,0,1,5.4.5c8.8,2,16.5-1.7,21.6-5.3a44,44,0,0,1,13.7-6.4c5.3-1.5,11.6-5.7,11.5-17.1V638c-1.1-21.3-22.2-12.2-22.2-12.2l-5.2-11.5a1.68,1.68,0,0,0-2.3-.8c-.1,0-.2.1-.3.1-.3.2-.7.4-1,.6l1.4-8.7h1s26.3-80.2,30.6-93.3,7.4-45.7,0-53.8c-3.5-3.8-12.6-10.2-21.3-15.8a192.93,192.93,0,0,1,21.3,14.8ZM710.7,436l-3.3-2a15.94,15.94,0,0,0-2.5-3.3,35.83,35.83,0,0,1-2.6-2.9c-2.1-6.2-9.7-32,.5-45.3,7.4-9.7,7.9-28.4,7.3-40.7,5,24.5,12,59,12.7,66.1C723.5,416.7,714.5,430.6,710.7,436Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_19'
                    d='M707.3,598.5l-4,26-24-5s5-17,6-21,1,0,1,0Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_19'
                    d='M599.3,619.5l-24,5-2.8-18-1.2-8h21s0-4,1,0c.4,1.4,1.2,4.6,2.2,8C597.3,612.5,599.3,619.5,599.3,619.5Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_6'
                    d='M595.6,606.5h-23l-1.2-8h21s0-4,1,0C593.7,599.9,594.6,603,595.6,606.5Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_6'
                    d='M683.1,606h23l1.2-8h-21s0-4-1,0C685,599.4,684.1,602.5,683.1,606Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_19'
                    d='M730.3,283.5s13,1,16,48a386.68,386.68,0,0,0,6.8,52.5,74.26,74.26,0,0,1-4,43.2l-12.8,31.3s-24-20-32-19c0,0,14-19,13-30s-17-90-17-90Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_20'
                    d='M580.3,432.5s-31,19-38,27-4,40,0,53,29,92,29,92h25s-8-49-5-53-6-75-6-75Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_20'
                    d='M698.3,432.5s31,19,38,27,4,40,0,53-29,92-29,92h-25s8-49,5-53,6-75,6-75Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_6'
                    d='M580.3,432.5s-31,19-38,27-4,40,0,53,29,92,29,92h25s-8-49-5-53-6-75-6-75Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_6'
                    d='M698.3,432.5s31,19,38,27,4,40,0,53-29,92-29,92h-25s8-49,5-53,6-75,6-75Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_21'
                    d='M633.3,179.4s0,39-14,59,64,3,64,3a20.34,20.34,0,0,1-7.5-10.5c-4.1-14.7-5.7-40.5.5-51.5C685.3,163.4,633.3,179.4,633.3,179.4Z'
                    transform='translate(0.06 0.04)'
                />
                <circle
                    className='home_page_svg_cls_6'
                    cx='655.86'
                    cy='172.94'
                    r='33'
                />
                <circle
                    className='home_page_svg_cls_21'
                    cx='655.86'
                    cy='171.94'
                    r='33'
                />
                <path
                    className='home_page_svg_cls_20'
                    d='M679.4,512.3c-35.8,1.6-95.3,8.2-104.3-1.6-14.5-15.9-9.4-30.3-1.9-39,2.9-3.4,5.6-9.2,7.7-14.9.7-1.9,1.4-3.9,2-5.7,2.3-7.1,10-12,18.7-12h72.2c8.8,0,16.5,5,18.7,12.1a34.19,34.19,0,0,0,4.6,9.4,23.42,23.42,0,0,0,3.7,4c3.6,3.1,6,9.8,7.5,17.1C711.6,497.1,698,511.5,679.4,512.3Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_6'
                    d='M679.4,512.3c-35.8,1.6-95.3,8.2-104.3-1.6-14.5-15.9-9.4-30.3-1.9-39,2.9-3.4,5.6-9.2,7.7-14.9.7-1.9,1.4-3.9,2-5.7,2.3-7.1,10-12,18.7-12h72.2c8.8,0,16.5,5,18.7,12.1a34.19,34.19,0,0,0,4.6,9.4,23.42,23.42,0,0,0,3.7,4c3.6,3.1,6,9.8,7.5,17.1C711.6,497.1,698,511.5,679.4,512.3Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_6'
                    d='M587.1,617.2c-3.1-.6-11.3-2.4-14.5-4.8a1.51,1.51,0,0,0-2.2.4c-.1.1-.1.2-.2.3l-4.9,11.4s-20-9-21,12c-.6,12.3,5.6,16.7,10.9,18.2a40.68,40.68,0,0,1,13.1,6.3c4.8,3.6,12.1,7.3,20.5,5.3a17.68,17.68,0,0,1,5.1-.5c3.7.1,10.2-1,9.5-10.3,0,0-6-24-4-28,1.3-2.5.9-9,.5-13.5a1.19,1.19,0,0,0-1.2-1,1.23,1.23,0,0,0-.8.4,8.82,8.82,0,0,1-7.7,4A10.57,10.57,0,0,1,587.1,617.2Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_22'
                    d='M587.1,618.2c-3.1-.6-11.3-2.4-14.5-4.8a1.51,1.51,0,0,0-2.2.4c-.1.1-.1.2-.2.3l-4.9,11.4s-20-9-21,12c-.6,12.3,5.6,16.7,10.9,18.2a40.68,40.68,0,0,1,13.1,6.3c4.8,3.6,12.1,7.3,20.5,5.3a17.68,17.68,0,0,1,5.1-.5c3.7.1,10.2-1,9.5-10.3,0,0-6-24-4-28,1.3-2.5.9-9,.5-13.5a1.19,1.19,0,0,0-1.2-1,1.23,1.23,0,0,0-.8.4,8.82,8.82,0,0,1-7.7,4A10.57,10.57,0,0,1,587.1,618.2Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_6'
                    d='M691.6,617.2c3.1-.6,11.3-2.4,14.5-4.8a1.51,1.51,0,0,1,2.2.4c.1.1.1.2.2.3l4.9,11.4s20-9,21,12c.6,12.3-5.6,16.7-10.9,18.2a39.23,39.23,0,0,0-13,6.3c-4.8,3.6-12.1,7.3-20.5,5.3a17.68,17.68,0,0,0-5.1-.5c-3.7.1-10.2-1-9.5-10.3,0,0,6-24,4-28-1.3-2.5-.9-9-.5-13.5a1.19,1.19,0,0,1,1.2-1,1.23,1.23,0,0,1,.8.4,8.82,8.82,0,0,0,7.7,4A10.12,10.12,0,0,0,691.6,617.2Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_22'
                    d='M691.6,618.2c3.1-.6,11.3-2.4,14.5-4.8a1.51,1.51,0,0,1,2.2.4c.1.1.1.2.2.3l4.9,11.4s20-9,21,12c.6,12.3-5.6,16.7-10.9,18.2a39.23,39.23,0,0,0-13,6.3c-4.8,3.6-12.1,7.3-20.5,5.3a17.68,17.68,0,0,0-5.1-.5c-3.7.1-
10.2-1-9.5-10.3,0,0,6-24,4-28-1.3-2.5-.9-9-.5-13.5a1.19,1.19,0,0,1,1.2-1,1.23,1.23,0,0,1,.8.4,8.82,8.82,0,0,0,7.7,4A10.12,10.12,0,0,0,691.6,618.2Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_21'
                    d='M512.3,204.4s9-29-15-33-18,31,0,44S512.3,204.4,512.3,204.4Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_6'
                    d='M698.3,433.5c-28,46-122-6-122-6s-2.2-1.2-3.8-5.2c.8-2.4,1.5-4.9,2.1-7.2A20.44,20.44,0,0,1,594.5,400h77a20.56,20.56,0,0,1,19.9,15.2,44.63,44.63,0,0,0,4.9,11.7C697.4,431,698.3,433.5,698.3,433.5Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_19'
                    d='M635.3,210.4h-6s-4,18-17,18c-3.5,0-8.2-.2-13.3-.5a134.09,134.09,0,0,0-45.4,5.4c-5.1,1.5-10.6,1.6-15.3-1.9-12-9-25-33-25-33s-23-1-24,12,11,37,14,40,3,22,24,27,36,7,37,32,21,51,11,80,1,35,1,35,94,52,122,6c0,0-11-31,0-46s6-52,6-52l36-36s1-23-14-35-50-31-50-31l3.5-14.9Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_6'
                    d='M636.4,182.1c-.8,9.4-.5,20.1,6.5,26.5,3.4,3.1,8,4.7,12.5,5.8a78.17,78.17,0,0,0,14.4,2.1c4.4.2,9.2,0,12.9-2.4,7.6-4.9,7.5-15.9,10.5-24.5,2.2-6.1,6.2-11.2,9.1-17,5.3-10.4,6.5-23.3,1.6-33.9s-16.5-18.2-28.2-16.9a46.12,46.12,0,0,0-11,3.1c-8.4,3.1-15-5.6-23.5-2.6-4.6,1.7-22.9,3.5-24,9-1.3,6.5,16.4,22.7,18.3,28.4C638.1,167.2,636.4,174.6,636.4,182.1Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_23'
                    d='M637.4,181.1c-.8,9.4-.5,20.1,6.5,26.5,3.4,3.1,8,4.7,12.5,5.8a78.17,78.17,0,0,0,14.4,2.1c4.4.2,9.2,0,12.9-2.4,7.6-4.9,7.5-15.9,10.5-24.5,2.2-6.1,6.2-11.2,9.1-17,5.3-10.4,6.5-23.3,1.6-33.9s-16.5-18.2-28.2-16.9a46.12,46.12,0,0,0-11,3.1c-8.4,3.1-15-5.6-23.5-2.6-4.6,1.7-22.9,3.5-24,9-1.3,6.5,16.4,22.7,18.3,28.4C639.1,166.2,637.4,173.6,637.4,181.1Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_6'
                    d='M622.8,223.4s6,2.5,23,7.5,30,0,30,0'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_6'
                    d='M577.8,366.4s28,1.6,37,13.6,12,16,23,16,46,2,51,4'
                    transform='translate(0.06 0.04)'
                />
                <rect
                    className='home_page_svg_cls_7'
                    x='636.56'
                    y='669.44'
                    width='16.7'
                    height='19.1'
                />
                <rect
                    className='home_page_svg_cls_24'
                    x='741.66'
                    y='434.14'
                    width='13.1'
                    height='96.7'
                />
                <rect
                    className='home_page_svg_cls_24'
                    x='720.16'
                    y='529.74'
                    width='28.7'
                    height='3.6'
                />
                <rect
                    className='home_page_svg_cls_24'
                    x='536.26'
                    y='434.14'
                    width='13.1'
                    height='96.7'
                />
                <rect
                    className='home_page_svg_cls_24'
                    x='538.56'
                    y='529.74'
                    width='28.7'
                    height='3.6'
                />
                <rect
                    className='home_page_svg_cls_7'
                    x='632.96'
                    y='535.64'
                    width='27.5'
                    height='117'
                />
                <path
                    className='home_page_svg_cls_24'
                    d='M647.2,493.7c74,2.6,76.4-25.8,76.4-25.8l-4.8-78.6c-1.2-122.4-71.7-104.4-71.7-104.4s-70.5-18-71.7,104.4l-4.8,78.6C570.8,467.9,573.2,496.2,647.2,493.7Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_15'
                    d='M647.2,493.7c74,2.6,76.4-25.8,76.4-25.8l-4.8-78.6c-1.2-122.4-71.7-104.4-71.7-104.4s-70.5-18-71.7,104.4l-4.8,78.6C570.8,467.9,573.2,496.2,647.2,493.7Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_24'
                    d='M645.2,488.8c70.6,2.5,72.8-24.6,72.8-24.6l-4.5-74.9c-1.1-116.7-68.3-99.5-68.3-99.5s-67.2-17.2-68.3,99.5l-4.5,74.9S574.7,491.2,645.2,488.8Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_7'
                    d='M643,456.8h4.9a12.5,12.5,0,0,1,12.5,12.5v26.4a12.5,12.5,0,0,1-12.5,12.5H643a12.5,12.5,0,0,1-12.5-12.5V469.3A12.5,12.5,0,0,1,643,456.8Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_6'
                    d='M660.3,648.5v4.2H632.9v-4.1l2.4-.6H658Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_7'
                    d='M535,688.5s-12-9.5,100.4-39.4H658s96.7,23.9,97.9,39.4H741.6S689.1,673,665.2,673s-95.5,2.4-117,15.5Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_24'
                    d='M539.6,419.8h5a13,13,0,0,1,13,13h0v6.1h-31v-6.1a13,13,0,0,1,13-13Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_24'
                    d='M745,419.8h5a13,13,0,0,1,13,13h0v6.1H732v-6.1a13,13,0,0,1,13-13Z'
                    transform='translate(0.06 0.04)'
                />
                <circle
                    className='home_page_svg_cls_25'
                    cx='540.96'
                    cy='696.94'
                    r='8.4'
                />
                <circle
                    className='home_page_svg_cls_25'
                    cx='644.86'
                    cy='696.94'
                    r='8.4'
                />
                <circle
                    className='home_page_svg_cls_25'
                    cx='749.96'
                    cy='696.94'
                    r='8.4'
                />
                <rect
                    className='home_page_svg_cls_6'
                    x='632.96'
                    y='535.64'
                    width='27.5'
                    height='4.8'
                />
                <path
                    className='home_page_svg_cls_24'
                    d='M647.2,538h80l6-11.9c3.6-20.3-9.5-21.5-9.5-21.5H570.8s-13.1,1.2-9.5,21.5l6,11.9Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_15'
                    d='M647.2,538h80l6-11.9c3.6-20.3-9.5-21.5-9.5-21.5H570.8s-13.1,1.2-9.5,21.5l6,11.9Z'
                    transform='translate(0.06 0.04)'
                />
                <path
                    className='home_page_svg_cls_24'
                    d='M647.2,538h80l6-10.2c3.6-17.4-9.5-18.4-9.5-18.4H570.8s-13.1,1-9.5,18.4l6,10.2Z'
                    transform='translate(0.06 0.04)'
                />
            </motion.g>
        </StyledHomePageSvgIcon>
    );
};

export default HomePageSvgIcon;
