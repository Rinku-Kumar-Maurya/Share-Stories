import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import { getCategories } from '../services';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories));
    }, [])

    return (
        <div className='bg-white mb-8 p-8 shadow-lg rounded-lg pb-12'>
            <h1 className='text-xl mb-8 font-semibold border-b pb-4'>
                Categories
            </h1>
            {categories.map((category) => (
                <Link href={`/categories/${category.slug}`} key={category.slug}>
                    <span className='cursor-pointer mb-3 pb-3'>{category.name}</span>
                </Link>
            ))}
        </div>
    )
}

export default Categories
