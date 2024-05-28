import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout, Menu, Modal, Button as AntButton } from 'antd';
import {
  DashboardOutlined,
  ShopOutlined,
  UnorderedListOutlined,
  ShoppingOutlined,
  StockOutlined,
  LogoutOutlined,
  FileTextOutlined
} from '@ant-design/icons';
import { MyContext } from "../Services/Context";
// import 'antd/dist/antd.css'; // Import Ant Design styles

const { Sider } = Layout;

const SidebarLeft = () => {
  const [logOutModal, setLogOutModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("User");
    localStorage.removeItem('loggedIn')

    navigate("/");
  };

  return (
    <>

<Sider collapsible={false} className="left-side-menu custom-sider">
       
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          
          <Menu.Item key="1" icon={<ShopOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<ShopOutlined />}>
            <Link to="/franchises">Franchise</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UnorderedListOutlined />}>
            <Link to="/category">Category</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<ShoppingOutlined />}>
            <Link to="/products">Products</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<StockOutlined />}>
            <Link to="/stocks">Stocks</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<FileTextOutlined />}>
            <Link to="/stocks-report">Stocks Report</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<LogoutOutlined />} onClick={() => setLogOutModal(true)}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>

     

      <Modal
        title="Confirm Logout"
        visible={logOutModal}
        onOk={handleLogout}
        onCancel={() => setLogOutModal(false)}
        okText="Yes, log out"
        cancelText="No, keep it"
      >
        <p>Are you sure you want to log out?</p>
      </Modal>
    </>
  );
};

export default SidebarLeft;
