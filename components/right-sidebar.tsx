import React from 'react'
import Carousel from './ui/carousel'
import TopPodcasters from './top-podcasters';

const images = [
    "https://m.rediff.com/movies/report/slide-show-1-bollywoods-10-most-memorable-rain-scenes/20140626.htm",
    "https://www.google.com/imgres?q=romcom%20bollywood%20scenes&imgurl=http%3A%2F%2Fimages.summitmedia-digital.com%2Fcosmo%2Fimages%2F2021%2F05%2F07%2Flist-rom-com-bollywood-movies-on-netflix-1620373344.jpg&imgrefurl=https%3A%2F%2Fwww.cosmo.ph%2Fentertainment%2From-com-bollywood-movies-netflix-philippines-a2520-20201122&docid=ThTkm8Q_vyrQmM&tbnid=wXuP2T2YHhxsJM&vet=12ahUKEwi894jByrGIAxWglFYBHW7BL6YQM3oECDIQAA..i&w=1200&h=675&hcb=2&ved=2ahUKEwi894jByrGIAxWglFYBHW7BL6YQM3oECDIQAA",
    "https://via.placeholder.com/800x400?text=Slide+3",
  ];

export default function RightSidebar() {
  return (
    <div className='bg-muted/40 flex-col'>
        <Carousel slides={images} interval={1000} />
        <TopPodcasters></TopPodcasters>
    </div>
  )
}
