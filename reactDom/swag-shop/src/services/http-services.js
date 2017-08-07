import 'whatwg-fetch';

class HttpServices {
    getProducts = () =>{
        fetch('http://localhost:3004/product')
        .then(response => {
            console.log(response.json());
        });
    }
}

export default HttpServices;