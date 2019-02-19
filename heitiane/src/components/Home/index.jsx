import React from 'react'
import HeadBar from '../HeadBar'
import SiderComponent from '../Sider'
import AddCommodity from '../CommodityManagement/AddCommodity'

import {
    Layout, Menu, Breadcrumb, Icon,Tabs
} from 'antd';

const {
    Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

class Home extends React.Component {
constructor(props){
    super(props)
    this.state = {
        collapsed: false,
        panes:[]
    };
    this.newTabIndex = 0;
}
   

   

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab',  key: activeKey });
        this.setState({ panes, activeKey });
      }
    
      handleActive=(activeTitle)=>{
          let panes=this.state.panes
        panes.push({title:activeTitle.key})

        this.setState({panes})
        //tab对应的侧边栏名称，可存储为数组
      }

    render() {
        const {panes}=this.state
       
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                    <SiderComponent handleActive={this.handleActive}/>
                </Sider>
                <Layout style={{background: '#fff'}}>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <HeadBar/>
                    </Header>

                    <Content style={{ margin: '0 16px' }}>
                        <Tabs
                            onChange={this.onChange}
                            activeKey={this.state.activeKey}
                            type="editable-card"
                            onEdit={this.onEdit}
                        >
            {panes.map((pane,index) => <TabPane tab={pane.title} key={index} closable={pane.closable}>rfd</TabPane>)} 
                </Tabs>  

                   
                        <AddCommodity/>

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>)}
    
}
export default Home;