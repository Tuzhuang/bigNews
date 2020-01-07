// 使用闭包沙箱来保存请求接口的地址

(function (w) {
    // 创建保存变量的基地址
    let baseURL = 'http://localhost:8080/api/v1';
    // 创建对象来保存基地址
    let BigNews = {
        baseURL: baseURL,
        hotpic: baseURL + '/index/hotpic',  // 首页焦点图
        category: baseURL + '/index/category',  // 文章类型
        latest: baseURL + '/index/latest',  // 最新资讯
        rank: baseURL + '/index/rank',  // 热门排行
        latest_comment: baseURL + '/index/latest_comment',  // 最新评论
        attention: baseURL + '/index/attention',  // 焦点关注
        article: baseURL + '/index/article',  // 文章详细内容
        get_comment: baseURL + '/index/get_comment',  // 评论列表
        post_comment: baseURL + '/index/post_comment',  // 发表评论
        search: baseURL + '/index/search'  // 文章搜索
    }

    // 将创建的BigNews对象暴露给window
    window.BigNews = BigNews;
})(window)