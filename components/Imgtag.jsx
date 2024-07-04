import React from 'react'
import Image from 'next/image'

const Imgtag = () => {
  return (
    <div>
        {/* This will consider aspect ratio of the image and change the image size acordingly. */}
        <Image height={200} width={200} fill={true} quality={0-100}           //QUAlity: It can resize the photo according to the quality.
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoliloquywp.com%2Fwebsite-slider-best-practices%2F&psig=AOvVaw2q8jLNqG4_QtFOEVugUlRQ&ust=1712514250191000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCIse-aroUDFQAAAAAdAAAAABAE" 
        alt="" />
        
    </div>
  )
}

export default Imgtag