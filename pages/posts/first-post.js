import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

import { getSortedPostsData } from '../../lib/posts';
var pass='123456'; 
var t=0;
export async function getStaticProps() {t=t+2;
  const tt=t;
  console.log('in FirstPost-test1-0002-allPostsData');
  const allPostsData1 = await getSortedPostsData(pass); 
  allPostsData1.push({'tt':t})
  pass=pass;//+'0';
  console.log('n FirstPost-test1-0002.002-alllPostsData: '+allPostsData1)
  console.log('n FirstPost-test1-0004.8-allPostsData: '+JSON.stringify( allPostsData1))
  return {
    props: {
      'allPostsData2': allPostsData1 ,
      'd':[{'mig':t}]
    },
  };
} 


export default function FirstPost({var1,allPostsData2,d}) {
  //01-allPostsData2,d zamani ke be adrese FirstPost berim meghdar migire az getStaticProps
  //02-vali var1 zamani ke componente FirstPost ra dar file index.js import konim va dar returne componente Home sedash bezanim meghdarash ra dar haman khate seda zadan midahim
  //ahe az halate 01 estegadeh beshe var1 meghdare undefined migire va age az halete 02 estefadeh beshe allPostsData2,d meghdare undefined migiran
  
  console.log('var1 is: '+var1+'-allPostsData2 is: '+allPostsData2+'-d is: '+d);
  
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
      <ul style={{backgroundColor:'orangered'}}>
          {allPostsData2?.map(({ id, a ,pass  /*id, date, title*/  }) => (
            <li  key={id} >
               {/* {a}
              <br /> */}
              {id}
              <br />
              {pass}
            </li>
          ))}
        </ul>
    </Layout>
  );
}