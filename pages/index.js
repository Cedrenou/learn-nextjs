import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Alert from '../components/alert'
import {getSortedPostsDataFromFileSystem} from '../lib/posts'

export async function getStaticProps() {
    const allPostsDataFromFileSystem = getSortedPostsDataFromFileSystem()
    return {
        props: {
            allPostsDataFromFileSystem
        }
    }
}

const Home = ({allPostsDataFromFileSystem}) => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Hey I'm Cédric Front-end developer trying Next.js</p>
                <p>(This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>

                <Alert type={'error'}>ERROR</Alert>
                <Alert type={'success'}>SUCCESS</Alert>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog posts from file system !</h2>
                <ul className={utilStyles.list}>
                    {allPostsDataFromFileSystem.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>{title} <br/> {id} <br/> {date}</li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}

export default Home