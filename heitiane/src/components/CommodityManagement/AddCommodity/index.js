import React from 'react'
import http from '../../../util/http'
import './index.less'
import FillProduct from './fillProduct'
import Fillspecification  from './fillSpecification'
import {Button} from 'antd'
class addCommodity extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            flags:true
        }
    }
    nextButton () {
        this.setState({
            flags:!this.state.flags
        })
    }
    render() {
        let content = null
        if(this.state.flags) {
            content = (
                    <div>
                        <img className="timeline" src={require('../../../font/timeline.png')} alt=""/>
                        <div className="mainBox">
                            <FillProduct/>
                            <Button className="nextButton" onClick={this.nextButton} type="primary" htmlType="submit">下一步,输入商品规格</Button>
                        </div>
                    </div>
                    )
        } else {
            content = (
                <div>
                    <img className="timeline" src={require('../../../font/timeline1.png')} alt=""/>
                    <div className="mainBox">
                        <Fillspecification/>
                        <Button type="primary" htmlType="submit">上一步,填写商品信息</Button>
                        <Button type="primary" htmlType="submit">下一步,提交至审核列表</Button>
                    </div>
                </div>
            )
        }
        return (
            <div>
                {content}
            </div>

        )
    }
}

export default addCommodity;