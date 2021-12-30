import React, { useEffect, useState } from 'react'

import moment from 'moment'
import Link from 'next/link'

import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        if (slug) {
            getSimiliarPosts(categories, slug)
                .then((result) => setRelatedPosts(result));
        }
        else {
            getRecentPosts()
                .then((result) => setRelatedPosts(result));
        }
    }, [slug]);

    console.log('realted posts',relatedPosts)

    return (
        <div className='bg-white mb-8 p-8 shadow-lg rounded-lg'>
            <h1 className='text-xl mb-8 font-semibold border-b pb-4'>
                {slug ? "Related Posts" : "Recent Posts"}
            </h1>
            {relatedPosts.map((post) => (
                <div key={post.title} className='flex items-center w-full mb-4'>
                    <div className='flex-none w-16'>
                        <img 
                            alt={post.title}
                            src={post.featuredImage.url}
                            height='60px'
                            width='60px'
                            className='rounded-full align-middle'
                        />
                    </div>
                    <div className='flex-grow ml-4'>
                        <p className='text-gray-500 font-xs'>
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PostWidget
