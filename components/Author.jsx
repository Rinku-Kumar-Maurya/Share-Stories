import React from 'react'

import Image from 'next/image'

const Author = ({ author }) => {
    return (
        <div className='relative text-center mt-20 mb-8 p-12 rounded-lg bg-black bg-opacity-20'>
            <div className='absolute left-0 right-0 -top-10'>
                <Image
                    className='align-middle rounded-full'
                    unoptimized
                    height='70px'
                    width='70px'
                    src={author.photo.url}
                    alt={author.name}
                />
            </div>
            <h3 className='text-white my-4 font-bold text-xl'>{author.name}</h3>
            <p className='text-white text-lg'>{author.bio}</p>
        </div>
    )
}

export default Author
