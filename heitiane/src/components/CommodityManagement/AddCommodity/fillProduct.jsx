import React from 'react'
import './index.less'
import {Select, Form, Input, Switch} from 'antd'
const Option = Select.Option,FormItem = Form.Item
class FillProduct extends React.Component{
    render () {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span:10},
            wrapperCol: { span: 14},
        };
        return (
            <Form layout="inline" >
                <FormItem
                    {...formItemLayout}
                    label="一级分类"
                >
                    {getFieldDecorator('select', {
                        rules: [
                            { required: true, message: 'Please select your country!' },
                        ],
                    })(
                        <Select
                            showSearch
                            style={{ width: 259 }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>,
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="二级分类"
                >
                    {getFieldDecorator('select', {
                        rules: [
                            { required: true, message: 'Please select your country!' },
                        ],
                    })(
                        <Select
                            showSearch
                            style={{ width: 259 }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={this.handleChange}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>
                        </Select>,
                    )}
                </FormItem>
                <br/>
                <FormItem
                    {...formItemLayout}
                    label="商品名称"
                    style={{margin: "30px 0 81px 0"}}
                >
                    {getFieldDecorator('commodityName', {
                        rules: [ {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input style={{width: 259}}/>
                    )}
                </FormItem>
                <br/>
                <FormItem
                    {...{labelCol: { span:5},
                        wrapperCol: { span: 19}}}
                    label="商品划线价"
                    style={{width: 680}}
                    help="展示商品打折前价格，若商品未进行打折，则可以不填"
                >
                    <Input style={{width: 259}}/>

                </FormItem>
                <br/>
                <FormItem
                    {...formItemLayout}
                    label="商品库存"
                >
                    {getFieldDecorator('commodityName', {
                        rules: [ {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input style={{width: 259}}/>
                    )}
                </FormItem>
                <br/>
                <FormItem
                    {...formItemLayout}
                    label="库存预警值"
                    style={{margin: "37px 0 43px 0"}}
                >
                    <Input style={{width: 259}}/>
                </FormItem>
                <br/>
                <Form.Item
                    {...formItemLayout}
                    label="推荐商品"
                    style={{width:340}}
                >
                    <Switch defaultChecked />
                </Form.Item>
                <br/>
                <Form.Item
                    {...formItemLayout}
                    label="积分商品"
                    style={{width:340}}
                >
                    <Switch defaultChecked/>
                </Form.Item>
                <br/>
                <FormItem
                    {...formItemLayout}
                    style={{width: 340}}
                    label="序号"
                    help="不输入则按默认顺序排序"
                >
                    {getFieldDecorator('commodityName', {
                        rules: [ {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input style={{width: 259}}/>
                    )}
                </FormItem>
                <br/>
                <FormItem
                    {...formItemLayout}
                    label="详情页商品标题"
                    style={{width: 340}}
                >
                    {getFieldDecorator('commodityName', {
                        rules: [ {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input style={{width: 259}}/>
                    )}
                </FormItem>
            </Form>
        )
    }
}
export default Form.create()(FillProduct);