import { BlitzPage, Router } from "blitz"
import Layout from "app/core/layouts/Layout"
import { Suspense } from "react"

const Home: BlitzPage = () => {
  return (
    <section>
      <button onClick={() => Router.push("/login")}>Login</button>
    </section>
  )
}

Home.redirectAuthenticatedTo = "/dashboard"
Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => (
  <Layout title="Home">
    <Suspense fallback={"Loading..."}>{page}</Suspense>
  </Layout>
)

export default Home
