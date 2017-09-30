'use strict';

const constants = {
    ///////////////////////////////////////////一级分类
    USER_BEHAVIOR_CATEGORY:{
        ESTIMATING:'01',//01定损
        USER_MGT:'02',//用戶管理
        COMPANY_MGT:'03',//修理厂，保险公司管理
        SYS_CONFIG:'04',//配置项管理
        SYS_NOTIFICATION:'05',//系统通知
    },
    ///////////////////////////////////////////二级分类
    USER_BEHAVIOR_TYPE:{
        VEHICLE_DEFINE:'01',//车辆定型
        CLAIM_ITEM:'02',//损失项目
        UPDATE_USER:'03',//修改用戶
        INS_USER:'04',//新增用户
        UPDATE_COMPANY:'05',//修改修理厂，保险公司
        INS_NOTIFICATION:'06',//新增通知
        UPDATE_NOTIFICATION:'07',//修改通知
        SYS_CONFIG_IC_GROUP:'08',//保险公司全司配置项
        SYS_CONFIG_IC_ORG:'09',//保险机构配置项
    },

    //////////////////////////////////////////三级分类
    //修改机构
    UPDATE_COMPANY:{
        RF_STATUS:'32',//修理厂变更状态
        RF_BASIC_AND_AUTHORITY:'33',//修改修理厂基本信息和权限
        IC_BASIC_AND_AUTHORITY:'34',//修改保险公司基本信息和权限
    },

    //用户类型
    USER_INFO:{
        RF_USER_RESET_PASSWORD:'35',//重置修理厂用户密码
        IC_USER_RESET_PASSWORD:'36',//重置保险公司用户密码
        CCC_USER_RESET_PASSWORD:'37',//重置CCC用户密码
    },
    //车辆定型
    VEHICLE_DEFINE:{
        VIN:'01',//vin辅助定型
        VIN_TWO_STEPS:'02',//vin二步定款
        BRAND:'03',//品牌定型
        BRAND_TWO_STEPS:'04',//品牌二步定款
        FUZZY_QUERY:'05',//模糊查询
        COUNTRY:'06',//国别
        VEHICLE_MAKE:'07',//厂牌
        VEHICLE_SERIES:'08',//车系定型
        VEHICLE_SERIES_TWO_STEPS:'09',//车系定型二步定款
        VEHICLE_MODEL:'10',////车型定型
        VEHICLE_MODEL_TWO_STEPS:'11',//车型定型二步定款
        VEHICLE_SUB_MODEL:'12',//款型
        VEHICLE_BODY_TYPE:'13',//车身类型
        POWER_SOURCE:'14',//动力来源
        TRANSMISSION:'15'//变速器
    },
    //损失项目
    CLAIM_ITEM:{
        FUZZY_QUERY:'16',//模糊查询配件树
        CLICK_PART_CATEGORY:'17',//点击配件总成
        CLICK_LOCATION:'18',//改变碰撞点
        CHANGE_LOSS_DEGREE:'19',//改变损失程度
        DB_CLICK_PART_ADD:'20',//双击添加配件
        CLICK_CHANGE_PART_ADD:'21',//点击换件按钮添加配件
        CLICK_REPAIR_PART_ADD:'22',//点击维修按钮添加配件
        CLICK_REMOVE_PART_ADD:'23',//点击拆装按钮添加配件
        CLICK_PAINT_PART_ADD:'24',//点击喷漆按钮添加配件
        CHANGE_PART_CHANNEL:'25',//切换换件中的配件渠道
        CLICK_REPAIR_LOSS_DEGREE:'26',//点击维修按钮中的损失程度
        CLICK_ICON_ADD_MATERIAL:'27',//点击图标添加辅料
        DB_CLICK_ADD_MATERIAL:'28',//双击添加辅料
        CLICK_ICON_ADD_LABOR_HOUR:'29',//点击图标添加工时
        DB_CLICK_ADD_LABOR_HOUR:'30',//双击添加工时
        OPERATION_TYPE_GROUP:'31'//切换定损单页面三段式
    }
};

exports.constants = constants;