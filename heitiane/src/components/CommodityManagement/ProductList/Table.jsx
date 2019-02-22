import React from 'react'
import './index.less'
import {Table, Modal } from 'antd'
import http from '../../../util/http'


class Tables extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            params: {
                page: 1,
                size: 20,
            },
            list: []
        }
    };
    componentDidMount(){
        http.post("/manage/goods/getGoodsList",this.state.params)
            .then(res => {
               this.setState({
                   list:res.body
               })
                console.log(res.body)
            })
    }
    changeProduct (data) {
        const changeHttp = () =>{
            http.post("/manage/goods/changeSellStatus", {goodsNo: data.goodsNo})
                .then(res => {
                if (res.code === 200) {
                    http.post("/manage/goods/getGoodsList",this.state.params)
                        .then(res => {
                            this.setState({
                                list:res.body
                            })
                            console.log(res.body)
                        })
                }
            })
        }
        if(!data.isSell) {
            Modal.confirm({
                title: '确认下架此商品?',
                okText: '确定',
                okType: 'danger',
                centered: true,
                cancelText: '取消',
                onOk() {
                    changeHttp()
                },
                onCancel() {
                },
            });
        } else {
            Modal.confirm({
                title: '确认上架此商品?',
                okText: '确定',
                okType: 'danger',
                centered: true,
                cancelText: '取消',
                onOk() {
                    changeHttp()
                },
                onCancel() {
                },
            });
        }
        console.log(data)
    }
    render (){
        const _this = this
        const columns = [{
                    title: '商品编号',
                    dataIndex: 'goodsNo',
                    key: 'goodsNo',
                }, {
                    title: '商品名称',
                    dataIndex: 'goodsName',
                    key: 'goodsName',
                }, {
                    title: '图片',
                    key: 'indexImgUrl',
                    align: 'center',
                    render: (text, record) => {
                        return (
                            <img className="image" src={record.indexImgUrl} alt=""/>
                        )
                    }
                },{
                    title: '分类',
                    dataIndex: 'classifyName',
                    key: 'classifyName',
                    align: 'center'
                },{
                    title: '价格',
                    dataIndex: 'sellingPrice',
                    key: 'sellingPrice',
                    align: 'center'
                },{
                    title: '上架状态',
                    key: 'isSell',
                    align: 'center',
                    render: (text, record) => {
                        return (
                            record.isSell? <span>已下架</span> : <span>上架</span>
                        )
                    }
                },{
                    title: '商品状态',
                    key: 'isOrdinary',
                    align: 'center',
                    render: (text, record) => {
                        return (
                            record.isOrdinary? <span>积分商品</span> : <span>首页商品</span>
                        )
                    }
                },{
                    title: '是否推荐',
                    align: 'center',
                    render: (text, record) => {
                        return (
                            record.idRecommend? <span>不推荐</span> : <span>推荐</span>
                        )
                    }
                }, {
                    title: '销量',
                    key: 'salesVolume',
                    dataIndex: 'salesVolume',
                    align: 'center'
                }, {
                    title: '库存',
                    dataIndex: 'goodsStock',
                    key: 'goodsStock',
                    align: 'center'
                },{
                    title: '状态',
                    key: 'action',
                    render: (text, record) => (
                        <span className='operation'>
                    <a>编辑</a>|
                    <a onClick={_this.changeProduct.bind(_this, record)}>{record.isSell? <span>上架</span> : <span>下架</span>}</a>
                    </span>
                    ),
                }];
        return (
            <div className='tabel'>
                <Table columns={columns} dataSource={this.state.list} />
            </div>
        )
    }
}
export default Tables