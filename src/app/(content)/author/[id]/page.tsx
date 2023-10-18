"use client"
import React from 'react';
import AuthorPage from '../../../../../components/content/author/page';

const EddAuthor = ({ params, searchParams }: any) => {
    return (
        <AuthorPage id={searchParams.id} />
    );
};

export default EddAuthor;