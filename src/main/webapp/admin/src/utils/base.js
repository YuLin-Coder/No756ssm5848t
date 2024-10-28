const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm5848t/",
            name: "ssm5848t",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm5848t/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大学学术交流论坛"
        } 
    }
}
export default base
