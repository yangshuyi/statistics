const config = {
    env: 'development', //环境名称
    port: 3001,

    mongo:{
        url: 'mongodb://192.168.200.8/drptest'
    },
    database: {
        DATABASE: 'koa_demo',
        USERNAME: 'root',
        PASSWORD: 'abc123',
        PORT: '3306',
        HOST: 'localhost'
    }
};

module.exports = config;
