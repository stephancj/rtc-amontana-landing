// images
import blogImg1 from "/public/images/blog/img-1.jpg";
import blogImg2 from "/public/images/blog/img-2.jpg";
import blogImg3 from "/public/images/blog/img-3.jpg";

import blogImg4 from "/public/images/blog/img-4.jpg";
import blogImg5 from "/public/images/blog/img-5.jpg";
import blogImg6 from "/public/images/blog/img-6.jpg";

import blogImg7 from "/public/images/blog/img-7.jpg";
import blogImg8 from "/public/images/blog/img-8.jpg";
import blogImg9 from "/public/images/blog/img-9.jpg";

import blogImg10 from "/public/images/blog/img-10.jpg";
import blogImg11 from "/public/images/blog/img-11.jpg";
import blogImg12 from "/public/images/blog/img-12.jpg";

import blogImg13 from "/public/images/blog/img-13.jpg";
import blogImg14 from "/public/images/blog/img-14.jpg";
import blogImg15 from "/public/images/blog/img-15.jpg";

import blogAvaterImg1 from "/public/images/blog/blog-avater/img-1.jpg";
import blogAvaterImg2 from "/public/images/blog/blog-avater/img-2.jpg";
import blogAvaterImg3 from "/public/images/blog/blog-avater/img-3.jpg";

import blogSingleImg1 from "/public/images/blog/1.jpg";
import blogSingleImg2 from "/public/images/blog/2.jpg";
import blogSingleImg3 from "/public/images/blog/3.jpg";

import blogSingleImg4 from "/public/images/blog/4.jpg";
import blogSingleImg5 from "/public/images/blog/5.jpg";
import blogSingleImg6 from "/public/images/blog/6.jpg";

import blogSingleImg7 from "/public/images/blog/7.jpg";
import blogSingleImg8 from "/public/images/blog/8.jpg";
import blogSingleImg9 from "/public/images/blog/9.jpg";

import blogSingleImg10 from "/public/images/blog/10.jpg";
import blogSingleImg11 from "/public/images/blog/11.jpg";
import blogSingleImg12 from "/public/images/blog/12.jpg";

import blogSingleImg13 from "/public/images/blog/13.jpg";
import blogSingleImg14 from "/public/images/blog/14.jpg";
import blogSingleImg15 from "/public/images/blog/15.jpg";

import pb from './base';

export const getAllEvents = async () => {
    const events = await pb.collection('events').getFullList();
    return events;
}