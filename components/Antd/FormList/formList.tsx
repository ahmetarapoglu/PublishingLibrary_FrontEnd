import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { points } from '../../../service/endPoints';
import AntdSelect from '../Select/select';

const selectOption = {
    endPointData: points.GetAuthors,
    label: "nameSurname",
    value: "id"
}
const FormList = () => {
    return (
        <Form.List name="bookAuthors" >
            {(fields, { add, remove }) => (
                <>
                    {!!fields.length && (
                        <Row align='middle'>
                            <Col span={6}></Col>
                            <Col span={10} style={{ textAlign: 'start' }}>
                                <Typography.Text>Auhor Name</Typography.Text>
                            </Col>
                            <Col span={4} style={{ textAlign: 'start' }}>
                                <Typography.Text>Auhor Ratio</Typography.Text>
                            </Col>
                            <Col span={4} />
                        </Row>
                    )}

                    {fields.map(({ key, name, ...restField }) => (
                        <Row key={key} style={{ marginBottom: 8 }}>
                            <Col span={6}></Col>

                            <Col span={10}>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'authorId']}
                                    rules={[{ required: false, message: 'Missing first name' }]}
                                    style={{ margin: '0px' }}
                                >
                                    <AntdSelect name={[name, 'authorId']} placeholder="Auhor Name" selectOption={selectOption} />
                                </Form.Item>
                            </Col>

                            <Col span={4}>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'auhorRatio']}
                                    rules={[{ required: true, message: 'Missing last name' }]}
                                    style={{ margin: '0px' }}
                                >
                                    <Input type='number' placeholder="Auhor Ratio" style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>

                            <Col span={4}>
                                <Form.Item {...restField} style={{ margin: '0px' }}>
                                    <Button onClick={() => remove(name)}>Delete</Button>
                                </Form.Item>
                            </Col>

                        </Row>
                    ))}

                    <Form.Item wrapperCol={{ offset: 6, span: 17 }}>
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                            Add Author
                        </Button>
                    </Form.Item>
                </>
            )}
        </Form.List>
    );
};

export default FormList;