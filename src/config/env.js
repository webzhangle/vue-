/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * credential: 跨域
 *
 */

const dev = {
    routerMode: 'history', // hash
    // baseUrl: `${location.origin}`,         // 自定义反向代理
    baseUrl: 'http://sor.china-dt.com/SellOutRecord-API-test/app',
    credential: true,
};

const prod = {
    routerMode: 'history', // hash
    baseUrl: 'http://sor.china-dt.com/SellOutRecord-API/app',
    credential: true,
};

export default process.env.NODE_ENV === 'development' ? dev : prod;
