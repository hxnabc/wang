import React from 'react'
import {Menu,Icon} from 'antd'
import './index.less'
import http from '../../util/http'
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item
const MyIcon = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_977200_735nod3nz0s.js',
});

class SiderComponent extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            menuList: {},
            tabsArray:[0]
        }
    }
    componentDidMount(){
        http.post("/manage/backUser/checkLogin",{userPhone:15855496761})
            .then(res => {
            this.setState({
                menuList:res.body.menuList
            })
        })
    }

    getMenu () {
        var SubMenuNodes = []
        if (this.state.menuList.length) {
            SubMenuNodes = this.state.menuList.map((item) => {
                if(item.children.length){
                    return (<SubMenu key={item.menuId} title={<span>  <MyIcon  type="icon-yuandianzhong"/><span className="menu-text">{item.title}</span></span>}>
                        {
                            ( item.children.map((sun) => {
                                return (<MenuItem key={sun.title} >{sun.title}</MenuItem>)
                            }))

                        }
                    </SubMenu>)
                } else {
                    return (<MenuItem key={item.title} ><MyIcon  type="icon-yuandianzhong"/>{item.title}</MenuItem>)
                }
            })
        }
        return SubMenuNodes
    }
    handleClick(e){
    }
    render() {
        const siderMenu = this.getMenu();
        return (
            <div className="logo" >
                <MyIcon className="logoIcon" type="icon-daikuan"/>
                <p>现金贷</p>
                <Menu theme="dark"
                      onClick={this.props.handleActive}
                      style={{ width: 256 }}
                      defaultOpenKeys={['sub1']}
                    
                      style={{ textAlign: "left" }}
                      mode="inline">
                {siderMenu}
                </Menu>
            </div>
        )
    }
}
export default SiderComponent;