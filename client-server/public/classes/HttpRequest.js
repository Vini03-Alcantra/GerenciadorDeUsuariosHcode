class HttpRequest{

    static get(url, params = {}){
        return HttpRequest.request('GET', url, params)
    }

    static request(method, url, params = {}){
        return new Promise((resolve, reject) => {
            let ajax = new XMLHttpRequest();

            ajax.open(method, url);

            ajax.onerror = event => {
                reject(e);
            }

            ajax.onload = event => {    
                let obj = {};
                
                try {
                    obj = JSON.parse(ajax.responseText)
                } catch (error) {
                    reject(error)
                    console.error(e)
                }          
                
                resolve(obj)
            }        

            ajax.send();
        })
    }
}