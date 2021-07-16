import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Alert from '../components/alert'

const Home = () => {
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
        </Layout>
    )
}

export default Home