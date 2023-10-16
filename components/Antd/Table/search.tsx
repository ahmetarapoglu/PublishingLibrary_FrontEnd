
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { getSearchValue } from '../../../store/slice/tableStateSlice';

const SearchInput = () => {
    const dispatch = useDispatch();

    const handleSearch = (search: any) => {
        console.info("search", search);
        dispatch(getSearchValue(search))
    };

    return (
        <Input.Search
            placeholder="Enter your search query"
            onSearch={handleSearch}
            style={{ width: 350 }}
        />
    );
};

export default SearchInput;