"use client"
import React from 'react';
import AuthorForm from '../../../../../components/views/author/page';

const EddAuthor = ({ searchParams }: any) => {
    return (
        <AuthorForm id={searchParams.id} />
    );
};

export default EddAuthor;