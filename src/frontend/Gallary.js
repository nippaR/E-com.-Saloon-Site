import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IMG1 from '../Images/1.jpeg';
import IMG2 from '../Images/2.jpg';
import IMG3 from '../Images/3.webp';
import IMG4 from '../Images/hair1.avif';
import IMG5 from '../Images/hair2.jpeg';
import IMG6 from '../Images/hair3.jpeg';
import IMG7 from '../Images/hair4.jpeg';
import IMG8 from '../Images/hair5.jpeg';
import IMG9 from '../Images/hair6.jpeg';
import IMG10 from '../Images/hari7.jpeg';
import IMG11 from '../Images/hair8.jpeg';
import IMG12 from '../Images/hair9.jpg';


export default function StandardImageList() {
  return (
   
    <ImageList sx={{ width: 1200, height: 650, ml:15, borderRadius:5, mt:5 }} cols={3} rowHeight={310}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=160&h=200&fit=crop&auto=format&dpr=3 2x`}
            src={`${item.img}?w=204&h=204&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: IMG1,
    title: 'Breakfast',
  },
  {
    img: IMG2,
    title: 'Burger',
  },
  {
    img: IMG3,
    title: 'Camera',
  },
  {
    img: IMG4,
    title: 'Coffee',
  },
  {
    img: IMG5,
    title: 'Hats',
  },
  {
    img: IMG6,
    title: 'Honey',
  },
  {
    img: IMG7,
    title: 'Basketball',
  },
  {
    img: IMG8,
    title: 'Fern',
  },
  {
    img: IMG9,
    title: 'Mushrooms',
  },
  {
    img: IMG10,
    title: 'Tomato basil',
  },
  {
    img: IMG11,
    title: 'Sea star',
  },
  {
    img: IMG12,
    title: 'Bike',
  },
];
