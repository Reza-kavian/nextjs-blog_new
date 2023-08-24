import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const postsDirectory = path.join(process.cwd(), 'posts');

   export async function getSortedPostsData(password) {
    console.log('test1-0003.05-hello-pass: '+password)
    //password='123456'
    // return  [
    //  {'id':1,'a':'34'}
    // ,{'id':2,'a':'37'}
    // ,{'id':3,'a':'45'}
    // ];
    
    
    // const res = await fetch('..');
    // return res.json();
    var urlEhrazHoviat = "https://auth-proxy.snapp.express/token";
    
    var form01 = new FormData();
    form01.append('client_id', 'p6zjzw');
    form01.append('client_secret', 'fad9b89d78');
    form01.append('grant_type', 'password');
    form01.append('scope', 'automation');
    form01.append('username', '112530112530');
    form01.append('password',password /*'123456'*/); 

    const requestOptions3 = {
        method: 'POST',
        headers: {
            'Accept': 'application/json;charset=UTF-8',
            'Content-Type': 'application/x-www-form-urlencoded', /*'application/x-www-form-urlencoded; charset=UTF-8'*/ 
            //'Authorization': 'Basic cDZ6anp3OmZhZDliODlkNzg='
        },
        body: new URLSearchParams(form01)
    };
    console.log('test1-0003-hello ' );
//    return  [
//         {'id':1,'a':'34'}
//     ,{'id':2,'a':'37'}
//     ,{'id':3,'a':'35'}
//     ];
    const res = await fetch(urlEhrazHoviat, requestOptions3)//tahavvol
        .then((response) => {
            console.log('tart001');
            //return response.json();
            return new Promise(async function (resolve, reject) {
                console.log('tart002.02');
                console.log(
                    'response: ' + response +
                    'response.ok: ' + response.ok +
                    '_____response.text: ' + response.text +
                    '_____response.status: ' + response.status +
                    '_____response.statusText: ' + response.statusText +
                    '_____response.headers: ' + response.headers 
                );
                
                if (response.ok == false) {
                    reject('jiiiiii'); return;
                }

                if (response.statusText != 'No Content') {
                    return resolve(response.json()); 
                }
                else {
                    console.log('No Content');
                    return resolve(response);
                }  
            })
        })//tahavvol
        .then((result) => {//tahavvol
            console.log('tart003');
            console.log('fetch way-result: ' + result);
            console.log('fetch way-JSON.stringify(result): ' + JSON.stringify(result));
            var access_token = result.access_token;
            var client_id = 'p6zjzw';
            
            console.log('result.access_token is: ' + JSON.stringify( result.access_token));
           
            return  [ 
                 {id: (result.access_token).substr(1, 4)+'00','a': result.access_token ,'pass':password}
                 ,{id: (result.access_token).substr(1, 4)+'01','a': result.access_token ,'pass':password}
                 ,{id: (result.access_token).substr(1, 4)+'02','a': result.access_token,'pass':password }
            ]
        }
            , (err) => {//tahavvol
                console.log('fetch way-err: ' + err)
            }
        )
        .catch((err) => {
            console.log('fetch way-err in catch: ' + err);
        }); 
        console.log('tart004-res is: '+res);
        return res;    
  }
  
//   export function getAllPostIds() {
//     const fileNames = fs.readdirSync(postsDirectory);
  
//     // Returns an array that looks like this:
//     // [
//     //   {
//     //     params: {
//     //       id: 'ssg-ssr'
//     //     }
//     //   },
//     //   {
//     //     params: {
//     //       id: 'pre-rendering'
//     //     }
//     //   }
//     // ]
//     return fileNames.map((fileName) => {
//       return {
//         params: {
//           id: fileName.replace(/\.md$/, ''),
//         },
//       };
//     });
//   }

  export async function getAllPostIds() { 
    var urlEhrazHoviat = "https://auth-proxy.snapp.express/token";
    
    var form01 = new FormData();
    form01.append('client_id', 'p6zjzw');
    form01.append('client_secret', 'fad9b89d78');
    form01.append('grant_type', 'password');
    form01.append('scope', 'automation');
    form01.append('username', '112530112530');
    form01.append('password', '123456' ); 

    const requestOptions3 = {
        method: 'POST',
        headers: {
            'Accept': 'application/json;charset=UTF-8',
            'Content-Type': 'application/x-www-form-urlencoded', /*'application/x-www-form-urlencoded; charset=UTF-8'*/ 
            //'Authorization': 'Basic cDZ6anp3OmZhZDliODlkNzg='
        },
        body: new URLSearchParams(form01)
    };
    console.log('test1-0003-hello ' );
//    return  [
//         {'id':1,'a':'34'}
//     ,{'id':2,'a':'37'}
//     ,{'id':3,'a':'35'}
//     ];
    const res = await fetch(urlEhrazHoviat, requestOptions3)//tahavvol
        .then((response) => {
            console.log('tart001');
            //return response.json();
            return new Promise(async function (resolve, reject) {
                console.log('tart002.02');
                console.log(
                    'response: ' + response +
                    'response.ok: ' + response.ok +
                    '_____response.text: ' + response.text +
                    '_____response.status: ' + response.status +
                    '_____response.statusText: ' + response.statusText +
                    '_____response.headers: ' + response.headers 
                );
                
                if (response.ok == false) {
                    reject('jiiiiii'); return;
                }

                if (response.statusText != 'No Content') {
                    return resolve(response.json()); 
                }
                else {
                    console.log('No Content');
                    return resolve(response);
                }  
            })
        })//tahavvol
        .then((result) => {//tahavvol
            console.log('tart003');
            console.log('fetch way-result: ' + result);
            console.log('fetch way-JSON.stringify(result): ' + JSON.stringify(result));
            var access_token = result.access_token;
            var client_id = 'p6zjzw';
            
            console.log('result.access_token is: ' + JSON.stringify( result.access_token));
        
            return  [
                { params: { 
                    id: (result.access_token).substr(1, 4)+'00',  //'ssg-ssr'  
                } },
                { params: { 
                    id: (result.access_token).substr(1, 4)+'01',  //'ssg-ssr'  
                } },
                {params: {
                    id: (result.access_token).substr(1, 4)+'02',  //'ssg-ssr' 
                } }, 
                {params: {
                    id: (result.access_token).substr(1, 4)+'03',  //'ssg-ssr'  
                } },   
            ] 
        }
            , (err) => {//tahavvol
                console.log('fetch way-err: ' + err)
            }
        )
        .catch((err) => {
            console.log('fetch way-err in catch: ' + err);
        }); 
        console.log('tart004.002-res is: '+res);
        console.log('tart004.003-res is: '+JSON.stringify(res) );
        return res;    
  }

//   export function getPostData(id) {
//     const fullPath = path.join(postsDirectory, `${id}.md`);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');
  
//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);
  
//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data,
//     }; 
//   }

export async function getPostData(id) {
    var urlEhrazHoviat = "https://auth-proxy.snapp.express/token";
    
    var form01 = new FormData();
    form01.append('client_id', 'p6zjzw');
    form01.append('client_secret', 'fad9b89d78');
    form01.append('grant_type', 'password');
    form01.append('scope', 'automation');
    form01.append('username', '112530112530');
    form01.append('password', '123456' ); 

    const requestOptions3 = {
        method: 'POST',
        headers: {
            'Accept': 'application/json;charset=UTF-8',
            'Content-Type': 'application/x-www-form-urlencoded', /*'application/x-www-form-urlencoded; charset=UTF-8'*/ 
            //'Authorization': 'Basic cDZ6anp3OmZhZDliODlkNzg='
        },
        body: new URLSearchParams(form01)
    };
    console.log('test1-0003-hello ' );
//    return  [
//         {'id':1,'a':'34'}
//     ,{'id':2,'a':'37'}
//     ,{'id':3,'a':'35'}
//     ];
    const res = await fetch(urlEhrazHoviat, requestOptions3)//tahavvol
        .then((response) => {
            console.log('tart001');
            //return response.json();
            return new Promise(async function (resolve, reject) {
                console.log('tart002.02');
                console.log(
                    'response: ' + response +
                    'response.ok: ' + response.ok +
                    '_____response.text: ' + response.text +
                    '_____response.status: ' + response.status +
                    '_____response.statusText: ' + response.statusText +
                    '_____response.headers: ' + response.headers 
                );
                
                if (response.ok == false) {
                    reject('jiiiiii'); return;
                }

                if (response.statusText != 'No Content') {
                    return resolve(response.json()); 
                }
                else {
                    console.log('No Content');
                    return resolve(response);
                }  
            })
        })//tahavvol
        .then((result) => {//tahavvol
            console.log('tart003');
            console.log('fetch way-result: ' + result);
            console.log('fetch way-JSON.stringify(result): ' + JSON.stringify(result));
            var access_token = result.access_token;
            var client_id = 'p6zjzw';
            
            console.log('result.access_token is: ' + JSON.stringify( result.access_token));
           
            // return  [ 
            //      {'id':1,'a': result.access_token ,'pass':password}
            //      ,{'id':2,'a': result.access_token ,'pass':password}
            //      ,{'id':3,'a': result.access_token,'pass':password }
            // ]
            return   {    
                 id: (result.access_token).substr(1, 4)+'00', 'a':result.access_token ,  pass :'123'  
            } 

            //     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data,
//     }; 

            //     // [
//     //   {
//     //     params: {
//     //       id: 'ssg-ssr'
//     //     }
//     //   },
//     //   {
//     //     params: {
//     //       id: 'pre-rendering'
//     //     }
//     //   }
//     // ]

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
        }
            , (err) => {//tahavvol
                console.log('fetch way-err: ' + err)
            }
        )
        .catch((err) => {
            console.log('fetch way-err in catch: ' + err);
        }); 
        console.log('tart003.002-res is: '+res);
        console.log('tart003.003-res is: '+JSON.stringify(res) );
        return res;   
}

// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';

// const postsDirectory = path.join(process.cwd(), 'posts');

// export function getSortedPostsData() {
//     console.log('test1-0003.04-hello ' )
//   // Get file names under /posts
//   const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, '');

//     // Read markdown file as string
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data,
//     };
//   });
//   // Sort posts by date
//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1;
//     } else {
//       return -1;
//     }
//   });
// }