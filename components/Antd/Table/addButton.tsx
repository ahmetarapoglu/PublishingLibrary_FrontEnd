import { Button } from 'antd';
import React from 'react';
import { changeEditState, changeModelState } from '../../../store/slice/tableStateSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'

interface DataType {
    type?: string;
    addUrl?: string;
}
const AddButton = ({ type, addUrl }: DataType) => {

    const dispatch = useDispatch();
    const router = useRouter()

    const onClick = () => {
        if (type == "form") {
            router.push(addUrl ?? "")
            dispatch(changeEditState(false));
        } else {
            dispatch(changeModelState(true))
        }
    }
    return (
        <Button type="primary" onClick={onClick} style={{ width: "150px", marginBottom: "10px", float: "right" }}>
            Add
        </Button>
    );
};

export default AddButton;