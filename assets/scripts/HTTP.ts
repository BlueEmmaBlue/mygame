export default class HTTP {
    URL = 'http://127.0.0.1:9000';

    sendRequest(path?, data?, handeler?, extraUrl?) {
        if (extraUrl === null) {
            extraUrl = this.URL;
        }
        let str = "?";
        for (const k in data) {
            if (str !== "?") {
                str += "&";
            }
            str += k + "=" + data[k];
        }

        let reqUrl = extraUrl + path + encodeURI(str);
        const curlog="触发时间"+(new Date()).toLocaleDateString()+"请求url"+reqUrl;
        console.log(curlog);
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && (xhr.status >= 200 &&xhr.status<400)){
                const response=xhr.responseText;
                console.log(response);
                try{
                    let ret=JSON.parse(xhr.responseText)
                    if(handeler!==null){
                        handeler(ret);
                        "触发时间"+(new Date()).toLocaleDateString()+"请求url"+reqUrl+"响应式回调函数"+handeler.name;
                    }
                }catch(error){
                    console.log(error);
                }
            }
        }
        xhr.open("GET",reqUrl,true);
        xhr.send();
        return xhr;
    }

}