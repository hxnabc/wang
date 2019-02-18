import React from 'react'
import http from '../../../util/http'
import './index.less'
import {Select, Form} from 'antd'
const Option = Select.Option,FormItem = Form.Item
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
class addCommodity extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            cities: cityData[provinceData[0]],
            secondCity: cityData[provinceData[0]][0],
        }
    }

    handleProvinceChange = (value) => {
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0],
        });
    }

    onSecondCityChange = (value) => {
        this.setState({
            secondCity: value,
        });
    }
    validateSelect (rule, value, callback) {
        const form = this.props.form;
        if (value) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <div>
                <img className="timeline" src={require('../../../font/timeline.png')} alt=""/>
                <div className="mainBox">
                    <Form layout="inline" >
                        <Form.Item
                            {...formItemLayout}
                            label="Select"
                            hasFeedback
                        >
                            {getFieldDecorator('select', {
                                rules: [
                                    { required: true, message: 'Please select your country!' },
                                ],
                            })(
                                <Select placeholder="Please select a country">
                                    <Option value="china">China</Option>
                                    <Option value="usa">U.S.A</Option>
                                </Select>
                            )}
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }

}
export default addCommodity;