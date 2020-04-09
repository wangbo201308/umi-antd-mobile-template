/*
 * @Description: 基本布局组件
 * @Author: wangbo
 * @Date: 2020-04-08 17:48:14
 * @LastEditors: wangbo
 * @LastEditTime: 2020-04-09 15:53:50
 */
import { NavBar, Icon } from 'antd-mobile';
import styles from './index.less';

function BasicLayout(props) {
  const {
    route,
    route: { routes },
    history,
    location,
    children,
  } = props;
  const { pathname } = location;
  const CURRENT_ROUTE = routes.filter(item => item.path === pathname) && routes.filter(item => item.path === pathname)[0];
  return (
    <div className={styles.layout_wrapper}>
      <NavBar
        mode="light"
        icon={pathname !== '/' && <Icon type="left" />}
        onLeftClick={() => pathname !== '/' && history.go(-1)}
      >
        {CURRENT_ROUTE ? CURRENT_ROUTE.title : '404'}
      </NavBar>
      <div className={styles.layout_body}>{children}</div>
    </div>
  );
}

export default BasicLayout;
