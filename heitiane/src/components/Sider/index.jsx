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
                menuList:res.body.roleList
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
                                return (<MenuItem key={sun.menuId} >{sun.title}</MenuItem>)
                            }))

                        }
                    </SubMenu>)
                } else {
                    return (<MenuItem key={item.menuId} ><MyIcon  type="icon-yuandianzhong"/>{item.title}</MenuItem>)
                }
            })
        }
        return SubMenuNodes
    }
    handleClick(e){
        console.log(this.props)
    }
    render() {
        const siderMenu = this.getMenu();
        return (
            <div className="logo" >
                <MyIcon className="logoIcon" type="icon-daikuan"/>
                <p>现金贷</p>
                <Menu theme="dark"
<<<<<<< HEAD
                      onClick={this.props.handleActive}
                      style={{ width: 256 }}
                      defaultOpenKeys={['sub1']}
                
=======
                      onClick={this.handleClick}
                      style={{ textAlign: "left" }}
>>>>>>> befc38a789856684423c600ced38864e365b7ac6
                      mode="inline">
                {siderMenu}
                </Menu>
            </div>
        )
    }
}
export default SiderComponent;