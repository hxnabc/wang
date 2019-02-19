import React from 'react'
import {Menu,Icon} from 'antd'
import './index.less'
import http from '../../util/http'
const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item
const MyIcon = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_977200_ggwbeu0be67.js',
});

class SiderComponent extends React.Component{
    state = {
        menuList: {}
    }
    componentDidMount(){
        http.post("/manage/backUser/checkLogin",{userPhone:15855496761})
            .then(res => {
            this.setState({
                menuList:res.body.roleList
            })
        })

    }
    // getMenu () {
    //     var SubMenuNodes = []
    //     if (this.state.menuList.length) {
    //         SubMenuNodes = this.state.menuList.map((item, key) => {
    //             if (item.children) {
    //                 let itemNoades = item.children && item.children.map((child, i) => {
    //                     if (!child.children) {
    //                         return (<MenuItem key={child.menuId} tabId={child.menuId}>{child.title}</MenuItem>)
    //                     }
    //                     else {
    //                         var childChild = child.children;
    //                         let childrenNodes = childChild.map((son, j) => {
    //                             return (<MenuItem key={son.menuId} tabId={son.menuId}>{son.title}</MenuItem>)
    //                         });
    //                         return (<SubMenu key={child.menuId}
    //                                          title={<span><i></i><span
    //                                              className="menu-text">{child.title}</span></span>}>
    //                             {childrenNodes}
    //                         </SubMenu>);
    //                     }
    //                 });
    //                 return (
    //                     <SubMenu key={item.menuId}
    //                              title={<span><i></i><span className="menu-text">{item.title}</span></span>}>
    //                         {itemNoades}
    //                     </SubMenu>);
    //             }
    //             else {
    //                 return (
    //                     <SubMenu key={item.menuId}
    //                              title={<span><i></i><span className="menu-text">{item.title}</span></span>}>
    //                     </SubMenu>);
    //             }
    //         })
    //     }
    //     return SubMenuNodes
    // }
    getMenu () {
        var SubMenuNodes = []
        if (this.state.menuList.length) {
            SubMenuNodes = this.state.menuList.map((item, key) => {
                if(item.children.length){
                    return (<SubMenu key={item.menuId} title={<span><i></i><span className="menu-text">{item.title}</span></span>}>
                        {
                            ( item.children.map((sun, i) => {
                                return (<MenuItem key={sun.menuId} >{sun.title}</MenuItem>)
                            }))

                        }
                    </SubMenu>)
                } else {
                    return (<MenuItem key={item.menuId} >{item.title}</MenuItem>)
                }
            })
        }
        return SubMenuNodes
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
                
                      mode="inline">
                {siderMenu}
                </Menu>
            </div>
        )
    }
}
export default SiderComponent;