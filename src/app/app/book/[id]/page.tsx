import BookForm from '../../../../../components/content/book/page';

const EditBook = ({ searchParams }: any) => {
    return (
        <BookForm id={searchParams.id} />
    );
};

export default EditBook;