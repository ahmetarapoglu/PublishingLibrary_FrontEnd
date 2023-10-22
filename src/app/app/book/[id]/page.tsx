import BookForm from "../../../../../components/views/book/page";

const EditBook = ({ searchParams }: any) => {
    return (
        <BookForm id={searchParams.id} />
    );
};

export default EditBook;