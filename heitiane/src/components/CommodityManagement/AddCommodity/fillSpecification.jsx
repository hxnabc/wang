import React from 'react'
import './index.less'
import {Select, Form, Input, Upload, Button, Icon} from 'antd'
const Option = Select.Option,FormItem = Form.Item, {TextArea} = Input
class FillSpecification extends React.Component{
    render () {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span:10},
            wrapperCol: { span: 14},
        };
        return (
            <Form className="fill-specification" layout="inline" >
                <h3>商品规格录入</h3>
                <FormItem
                    {...formItemLayout}
                    label="规格名称"
                >
                    {getFieldDecorator('input', {
                        rules: [
                            { required: true, message: 'Please select your country!' },
                        ],
                    })(
                       <Input style={{width:260}}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="规格参数"
                >
                    {getFieldDecorator('input', {
                        rules: [
                            { required: true, message: 'Please select your country!' },
                        ],
                    })(
                        <Input style={{width:260}}/>
                    )}
                </FormItem>
                <br/>
                <FormItem
                    {...formItemLayout}
                    label="规格名称"
                >
                    {getFieldDecorator('input', {
                        rules: [
                            { required: true, message: 'Please select your country!' },
                        ],
                    })(
                        <Input style={{width:260}}/>
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="规格参数"
                >
                    {getFieldDecorator('input', {
                        rules: [
                            { required: true, message: 'Please select your country!' },
                        ],
                    })(
                        <Input style={{width:260}}/>
                    )}
                </FormItem>
                <br/>
                <FormItem
                    {...formItemLayout}
                    label="商品售价"
                >
                    {getFieldDecorator('input', {
                        rules: [
                            { required: true, message: 'Please select your country!' },
                        ],
                    })(
                        <Input style={{width:260}}/>
                    )}
                </FormItem>
                <br/>
                <FormItem
                    {...formItemLayout}
                    className="Dragger"
                >
                    <div className="dropbox">
                        {getFieldDecorator('dragger', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload.Dragger name="files" action="">
                                <div className="operation">
                                    <span>商品主图</span>
                                    <span>删除图片</span>
                                </div>
                            </Upload.Dragger>

                        )}
                    </div>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    className="Dragger"
                >
                    <div className="dropbox">
                        {getFieldDecorator('dragger', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload.Dragger name="files" action="">
                                <div className="operation">
                                    <span>设为主图</span>
                                    <span>删除图片</span>
                                </div>
                            </Upload.Dragger>

                        )}
                    </div>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    className="Dragger"
                >
                    <div className="dropbox">
                        {getFieldDecorator('dragger', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload.Dragger name="files" action="">
                                <div className="operation">
                                    <span>设为主图</span>
                                    <span>删除图片</span>
                                </div>
                            </Upload.Dragger>

                        )}
                    </div>
                </FormItem><FormItem
                    {...formItemLayout}
                    className="Dragger"
                >
                    <div className="dropbox">
                        {getFieldDecorator('dragger', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload.Dragger name="files" action="">
                                <div className="operation">
                                    <span>设为主图</span>
                                    <span>删除图片</span>
                                </div>
                            </Upload.Dragger>

                        )}
                    </div>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    className="Dragger"
                >
                    <div className="dropbox">
                        {getFieldDecorator('dragger', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                        })(
                            <Upload.Dragger name="files" action="">
                                <div className="operation">
                                    <span>设为主图</span>
                                    <span>删除图片</span>
                                </div>
                            </Upload.Dragger>

                        )}
                    </div>
                </FormItem>
                <br/>
                <FormItem
                    {...formItemLayout}
                    className="upload"
                >
                    {getFieldDecorator('upload', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button type="primary">
                                <Icon type="upload" />上传图片
                            </Button>
                        </Upload>
                    )}
                </FormItem>
                <br/>
                <FormItem
                    {...{labelCol: { span:6},
                        wrapperCol: { span: 18}}}
                    label="商品详情"
                    className="textArea"
                >
                    {getFieldDecorator('input', {
                        rules: [
                            { required: true, message: 'Please select your country!' },
                        ],
                    })(
                        <div className="dropbox">
                            {getFieldDecorator('dragger', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,
                            })(
                                <Upload.Dragger name="files" action="">
                                </Upload.Dragger>

                            )}
                        </div>
                    )}
                </FormItem>
                <br/>
                <FormItem
                    {...formItemLayout}
                    className="upload"
                >
                    {getFieldDecorator('upload', {
                        valuePropName: 'fileList',
                        getValueFromEvent: this.normFile,
                    })(
                        <Upload name="logo" action="/fileUpload/goodsImg" listType="picture">
                            <Button type="primary">
                                <Icon type="upload" />上传图片
                            </Button>
                        </Upload>
                    )}
                </FormItem>
            </Form>
        )
    }
}
export default Form.create()(FillSpecification);