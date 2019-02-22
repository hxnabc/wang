import React from 'react'
import {Form, Input, Select, Button} from 'antd'
import http from '../../../util/http'
const {Option} = Select
class Search extends React.Component{
    handleChange = () => {

    }
    handleChange1 = () => {

    }
    handleReset = () => {
        this.props.form.resetFields();
    }
    handleSearch = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {

            http.post("/manage/goods/getGoodsList", values)
                .then(res =>{

                })
        });
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='serach'>
                <Form layout="inline"
                      onSubmit={this.handleSearch}
                >
                    <Form.Item label="商品编号">
                        {getFieldDecorator('goodsNo', {
                        })(
                            <Input  />
                        )}
                    </Form.Item>
                    <Form.Item label="商品名称">
                        {getFieldDecorator('goodsName', {
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item label="分类">
                        {getFieldDecorator('classifyId', {
                        })(
                            <Input />
                        )}
                    </Form.Item>
                    <Form.Item label="上架状态 "  >
                        {getFieldDecorator('isSell', {
                            initialValue:""
                        })(
                            <Select style={{ width: 120 }}>
                                <Option value="">全部</Option>
                                <Option value="0">上架</Option>
                                <Option value="1">未上架</Option>
                            </Select>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">查询</Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                            重置
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(Search)