import { useState, useEffect, createContext, useContext, useRef, useReducer, useCallback, useMemo } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { resolve } from 'styled-jsx/css';
import FirstPost from './posts/first-post';
import { getSortedPostsData } from '../lib/posts';
var pass='123456'; 
var t=0;
export async function getStaticProps() {t=t+2;
  const tt=t;
  console.log('test1-0002-allPostsData');
  const allPostsData1 = await getSortedPostsData(pass); 
  allPostsData1.push({'tt':t})
  pass=pass;//+'0';
  console.log('test1-0002.002-alllPostsData: '+allPostsData1)
  console.log('test1-0004.8-allPostsData: '+JSON.stringify( allPostsData1))
  return {
    props: {
      'allPostsData2': allPostsData1 ,
      'd':[{'mig':t}]
    },
  };
} 
 
///////////////////////////////////////////////////////////////
// import useSWR from 'swr';

// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch);

//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;
//   return <div>hello {data.name}!</div>;
// }
///////////////////////////////////////////////////////////////
 
// export async function getServerSideProps (context) {t=t+1;
//   //pass=pass+'1';
//   //pass='123456';
//   const tt=t;

//   console.log('test1-0004.006-pass: '+pass)
//   const allPostsData1 = await getSortedPostsData(pass);
//   allPostsData1.push({'tt':t})
//    pass=pass;//+'0';
//   console.log('test1-0004.006-context: '+context)
//   console.log('test1-0004.84-allPostsData: '+JSON.stringify( allPostsData1))
//   return {
//     props: {
//       allPostsData1,tt
//     },
//   };
// }
 
export default function Home( {allPostsData2,d} ) {  
  // pass='11'
  // t=t+1;
  console.log('ttttttttttttttttttt-d[0].mig: '+d[0].mig);
  console.log('ttttttttttttttttttt-hala: '+t+'-allPostsData1[0].tt:'+allPostsData2[3].tt);
  allPostsData2?.map(({ id, a ,pass,tt  /*id, date, title*/  }) => {
    console.log('tt is: '+tt)  
  })
 



  const [firstLoaded, setFirstLoaded] = useState(false);

  useEffect(() => {
    console.log('useEffect called!!');
 }, [firstLoaded]);

  var btnclck=async()=>{
    setFirstLoaded(true);

     console.log('btnclck called!!');
     //const allPostsData2 =  await getSortedPostsData();
     //console.log('btnclck called-test1-0004.91-allPostsData: '+JSON.stringify( allPostsData2))
  }

  console.log('test1-0001.01-allPostsData ' )
  
  console.log('test5-0001.04-allPostsData: '+allPostsData2 )
  //console.log('test6-0001-allPostsData: '+JSON.stringify(allPostsData2 ))
  var id='yJhb01';
  return (
    <Layout home>
      <button onClick={btnclck}>btn 1</button>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <h2>
           <Link href={"/posts/first-post"}>go to FirstPost</Link>
        </h2> 
          <h2>
             <Link href="/posts/112530112530?pass=11">0-go to [idd].js</Link>
        </h2>  
        <h2>
             <Link href={`/posts/${id}`}>1-go to [idd].js</Link> 
        </h2>  
        <h2>
           <Link href="/posts/pre-rendering">go to [idd].js</Link>
        </h2>
        
      </section>
      <div style={{backgroundColor:'greenyellow',border:'2px dashed red'}}>
            <FirstPost var1='value 01' />
      </div>
       <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData2?.map(({ id, a ,pass  /*id, date, title*/  }) => (
            <li className={utilStyles.listItem}  key={id} >
               {/* {a}
              <br /> */}
              {id}
              <br />
              {pass}
              <br />    
              <Link href={`/posts/${id}`}>1-go to [idd].js</Link> 
            </li>
          ))}
        </ul>
        
      </section> 
    </Layout>
  );
}