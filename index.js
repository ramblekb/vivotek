const axios = require('axios');
const { Stream } = require('stream');
const { arrayBuffer } = require('stream/consumers');

// http://root:password1@challenge.phosphorus.io/setup/system/parafile.html 

// axios({
//     url: 'http://root:password1@challenge.phosphorus.io/setup/system/parafile.html', //your url
//     auth: { username: 'root', password: 'password1' },
//     method: 'GET',
//     responseType: 'blob', // important
// }).then((response) => {
//     const url = URL.createObjectURL(new Blob([response.data]));
//     const link = url.createElement('a');
//     link.href = url;
//     link.setAttribute('download', 'file.pdf'); //or any other extension
//     document.body.appendChild(link);
//     link.click();
// });

//   url: 'http://challenge.phosphorus.io/cgi-bin/admin/getparam.cgi', 

const getHost = async () => {
    try {
        const resp = await axios.get('http://challenge.phosphorus.io/cgi-bin/admin/getparam.cgi?system_info_hostname=', {
            auth: { username: 'root', password: 'password1' }  })
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};
getHost();

const getModel = async () => {
    try {
        const resp = await axios.get('http://challenge.phosphorus.io/cgi-bin/admin/getparam.cgi?system_info_modelname=', {
            auth: { username: 'root', password: 'password1' }  })
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};
getModel();

const getFirmware = async () => {
    try {
        const resp = await axios.get('http://challenge.phosphorus.io/cgi-bin/admin/getparam.cgi?system_info_firmwareversion=', {
            auth: { username: 'root', password: 'password1' }  })
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};
getFirmware();

const getMac = async () => {
    try {
        const resp = await axios.get('http://challenge.phosphorus.io/cgi-bin/admin/getparam.cgi?/network_ipaddress=', {
            auth: { username: 'root', password: 'password1' }  })
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};
getMac();


const getSerial = async () => {
    try {
        const resp = await axios.get('http://challenge.phosphorus.io/cgi-bin/admin/getparam.cgi?/system_info_serialnumber=', {
            auth: { username: 'root', password: 'password1' }  })
        console.log(resp.data);
    } catch (err) {
        console.error(err);
    }
};
getSerial();


// MAKE A CALL AND RETURN THE PARAMETERS DOC
const getItem = async () => {
    try {
        const response = await axios.get('http://challenge.phosphorus.io/cgi-bin/admin/getparam.cgi', {
            auth: { username: 'root', password: 'password1' },
        responseType: 'json',
        maxBodyLength: 2000,
        arrayBuffer: true,
        data: 'stream',
       
      })
      console.log(response);
        console.log(response.data);
        console.log(response.params);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
    } catch (err) {
        console.error(err);
    }
};
getItem()

// // Promise.all method returns a promise that resolves when all of the promises in the iterable argument resolve.
// let endpoints = [
//     'http://root:password1@challenge.phosphorus.io/setup/system/parafile.html?system_info_modelname=',
//     'http://root:password1@challenge.phosphorus.io/setup/system/parafile.html?system_info_serialnumber=',

//     'http://challenge.phosphorus.io/cgi-bin/admin/getparam.cgi?system_info_modelname=',
//     'http://challenge.phosphorus.io/cgi-bin/admin/getparam.cgi?system_info_firmwareversion=',
//     'http://challenge.phosphorus.io/cgi-bin/admin/getparam.cgi?system_info_serialnumber=',
//     'http://challenge.phosphorus.io/cgi-bin/admin/getparam.cgi?network_ipaddress=',
//     'http://challenge.phosphorus.io/cgi-bin/admin/getparam.cgi?system_hostname=',

//   ];
  
//   axios.all(promises.map((promise) => axios.get(promise))).then(
//     axios.spread(({data: host}, {data: serial}, {data: model}, {data: mac}) => {
//       console.log({ host, serial, model, mac });
//     })
//   );

// http://challenge.phosphorus.io/
// ('http://challenge.phosphorus.io/cgi-bin/admin/getparam.cgi?system_info_modelname=CC8160', {
//         auth: { username: 'root', password: 'password1' }  })

// axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//   .then(response => {
//     console.log(response.data.url);
//     console.log(response.data.explanation);
//     console.log(response.data.hdurl);
//     console.log(response.data.title);
//     console.log(response.data.media_type);
//   })
//   .catch(error => {
//     console.log(error);
//   });
  
//   axios.get('http://challenge.phosphorus.io/cgi-bin/admin/getparam.cgi?system_info_modelname=CC8160', {
//          auth: { username: 'root', password: 'password1' }  })
//   .then(response => {
//     console.log(response.data.url);
//     console.log(response.data.statusText);
//     console.log(response.data.created_at);
//     console.log(response.data.config);
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// axios.get('http://challenge.phosphorus.io/cgi-bin/admin/getparam.cgi', {
//     auth: { username: 'root', password: 'password1' }  })
// .then(response => {
// console.log(response.data.url);
// console.log(response.data.statusText);
// console.log(response.data.created_at);
// console.log(response.data[5]);
// console.log(response.data.);
// console.log(response.data);
// console.log(response.data.headers);
// })
// .catch(error => {
// console.log(error);
// });

// // http://root:password1@challenge.phosphorus.io/setup/system/parafile.html
// axios.get('http://challenge.phosphorus.io/setup/system', {
//     auth: { username: 'root', password: 'password1' }  })
// .then(response => {
// console.log(response);
// console.log(response.body);
// // console.log(response.data);
// // console.log(response.data.created_at);
// console.log(response.data[5]);
// // console.log(response.data);
// console.log(response.data.headers);
// })
// .catch(error => {
// console.log(error);
// });

// http://root:password1@challenge.phosphorus.io/setup/system/parafile.html
// loadParafile()

// const url = 'https://media.giphy.com/media/C6JQPEUsZUyVq/giphy.gif';

// function downloadFile(url) {
// axios.get(url)
// .then(response => {
// console.log(response);
// console.log(response.body.url);
// response.render('index.html')
// res.writeHead(200, { 'Content-Type': 'text/html' });
//     var html = fs.readFileSync(`${__dirname}/index.htm`, 'utf8');
//     var message = 'Hello world...';
//     html = html.replace('{Message}', message);
//     res.end(html);
// console.log(response.data.url);
// console.log(response.data.headers);
// })
// .catch(error => {
// console.log(error);
// });
// }
// downloadFile(url)


// .then(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     var html = fs.readFileSync(`${__dirname}/index.htm`, 'utf8');
//     var message = 'Hello world...';
//     html = html.replace('{Message}', message);
//     res.end(html);
// })

// GET request for remote image in node.js
// http://root:password1@challenge.phosphorus.io/setup/system/parafile.html 

// axios({
//     method: 'get',
//     url: 'http://challenge.phosphorus.io/cgi-bin/admin/getparam.cgi',
//     responseType: 'stream',
//     maxContentLength: 2000,
//     maxBodyLength: 2000,

//   })
//     .then(function (response) {
//       response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//     });

    // validateStatus: function (status) {
    //     return status >= 200 && status < 300; // default
    //   }

//     You can create a new instance of axios with a custom config.
// axios.create([config])
// const instance = axios.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });



// // Show output in browser
// function showOutput(res) {
//     document.getElementById('res').innerHTML = `
//     <div class="card card-body mb-4">
//       <h5>Status: ${res.status}</h5>
//     </div>
// ;
// }

// document.getElementById('get').addEventListener('click', getHost);
// document.getElementById('sim').addEventListener('click', getFirmware);
// document.getElementById('get').addEventListener('click', getModel);
// document.getElementById('sim').addEventListener('click', getSerial);
