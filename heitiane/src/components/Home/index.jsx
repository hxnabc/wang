import React from 'react'
import HeadBar from '../HeadBar'
import SiderComponent from '../Sider'
import AddCommodity from '../CommodityManagement/AddCommodity'
import {
    Layout, Menu, Breadcrumb, Icon,
} from 'antd';

const {
    Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class Home extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            collapsed: false,
        };

    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                    <SiderComponent/>
                </Sider>
                <Layout style={{background: '#fff'}}>
                    <Header style={{ background: '#fff', padding: 0 }} >
                        <HeadBar/>
                    </Header>
                    <Content style={{ margin: '0 16px', background: '#F8F9FB' }}>
                        <AddCommodity/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
export default Home;