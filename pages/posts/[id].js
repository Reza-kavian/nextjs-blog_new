import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths =await getAllPostIds();
  console.log("paths02 is: " + JSON.stringify(paths));
  return {
    paths,
    fallback: false,
  };
}

import Layout from '../../components/layout';

export default function Post({ postData }) {
    return (
      <Layout>
        {postData.a}
        <br />
        -0-0-0-0-
        <br />
        {postData.id}
        <br />
        {postData.pass}
      </Layout>
    );
}

// export default function User({ res }) { 
// console.log('reza-01-res:'+res);   
//    return (  <ul>
//     {res?.map(({ id, a ,pass  /*id, date, title*/  }) => (
//       <li   key={id} > 
//         {id}
//               <br />
//               {pass}
//       </li>
//     ))}
//   </ul>
//     ) 
// }
  
  // export async function getServerSideProps(context) {
  //   console.log('reza-00.7-context.params:'+JSON.stringify( context.params)); 
  //   console.log('reza-00.7-context.query:'+JSON.stringify( context.query)); 
  //   console.log('reza-00.6-context:'+context.params.id);   
  //   console.log('reza-00.6-context:'+context.query.id);   
  //   console.log('reza-00.6-pass:'+context.query.pass); 
  //   const { params } = context;
  //   const { id } = params;
      
  //   var urlEhrazHoviat = "https://auth-proxy.snapp.express/token"; 
  //   var form01 = new FormData();
  //   form01.append('client_id', 'p6zjzw');
  //   form01.append('client_secret', 'fad9b89d78');
  //   form01.append('grant_type', 'password');
  //   form01.append('scope', 'automation');
  //   form01.append('username', id);//'112530112530' //username
  //   form01.append('password','123456'); 

  //   const requestOptions3 = {
  //       method: 'POST',
  //       headers: {
  //           'Accept': 'application/json;charset=UTF-8',
  //           'Content-Type': 'application/x-www-form-urlencoded', /*'application/x-www-form-urlencoded; charset=UTF-8'*/ 
  //           //'Authorization': 'Basic cDZ6anp3OmZhZDliODlkNzg='
  //       },
  //       body: new URLSearchParams(form01)
  //   };
  //   console.log('test1-0003-hello ' ); 
  //   const res = await fetch(urlEhrazHoviat, requestOptions3)//tahavvol
  //       .then((response) => {
  //           console.log('tart001');
  //           //return response.json();
  //           return new Promise(async function (resolve, reject) {
  //               console.log('tart002.02');
  //               console.log(
  //                   'response: ' + response +
  //                   'response.ok: ' + response.ok +
  //                   '_____response.text: ' + response.text +
  //                   '_____response.status: ' + response.status +
  //                   '_____response.statusText: ' + response.statusText +
  //                   '_____response.headers: ' + response.headers 
  //               );
                
  //               if (response.ok == false) {
  //                   reject('jiiiiii'); return;
  //               }

  //               if (response.statusText != 'No Content') {
  //                   return resolve(response.json()); 
  //               }
  //               else {
  //                   console.log('No Content');
  //                   return resolve(response);
  //               }  
  //           })
  //       })//tahavvol
  //       .then((result) => {//tahavvol
  //           console.log('tart003');
  //           console.log('fetch way-result: ' + result);
  //           console.log('fetch way-JSON.stringify(result): ' + JSON.stringify(result));
  //           var access_token = result.access_token;
  //           var client_id = 'p6zjzw';
            
  //           console.log('result.access_token is: ' + JSON.stringify( result.access_token));
           
  //           return  [ 
  //                {'id':1,'a': result.access_token ,'pass':'123456'}
  //                ,{'id':2,'a': result.access_token ,'pass':'123456'}
  //                ,{'id':3,'a': result.access_token,'pass':'123456' }
  //           ]
  //       }
  //           , (err) => {//tahavvol
  //               console.log('fetch way-err: ' + err)
  //           }
  //       )
  //       .catch((err) => {
  //           console.log('fetch way-err in catch: ' + err);
  //       }); 
  //       console.log('tart004-res is: '+res);
         
  //       // return res;    
  //       return { props: { res } };
// }