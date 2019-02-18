import React from 'react'
import {Icon, Badge} from 'antd';
import './index.less'
let userName ="admin"
class HeadBar extends React.Component{
    render () {
        return (
            <div className="rightIcons headbar">
                <ul className={'right'}>
                    <li>
                       欢迎您,{userName}
                    </li>
                    <li>
                        <Icon type="poweroff" />注销
                    </li>
                    <li>
                        <Icon type="unlock" />修改密码
                    </li>
                    <li>
                        [切换角色]
                    </li>
                </ul>
            </div>
        )
    }
}
export default HeadBar;