import React, { useEffect, useState } from 'react'

import moment from 'moment'
import parse from 'html-react-parser'

import { getComments } from '../services'

const Comments = ({ slug }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(slug)
            .then((result) => setComments(result));
    }, [])

    return (
        <>
            {comments.length && (
                <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
                    <h3 className='text-xl font-semibold pb-4 mb-8 border-b'>
                        {comments.length}
                        {' '}
                        Comments
                    </h3>
                    {comments.map((comment) => (
                        <div key={comment.createdAt} className='mb-4 pb-4 border-b border-gray-100'>
                            <p className='mb-4'>
                                <span className='font-semibold'>{comment.name}</span>
                                {' '}
                                on
                                {' '}
                                {moment(comment.createdAt).format('MMM DD, YYYY')}
                            </p>
                            <p className='whitespace-pre-line text-gray-600 w-full'>
                                {parse(comment.comment)}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Comments
