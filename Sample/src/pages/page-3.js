import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    
    <div style={{
      background: 'yellow',
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: '30px',
    }}>
      <Link to="/">Go back to the homepage</Link>
      <Link to="/page-2">Go back to page 2</Link>
    </div>
  </Layout>
)

export default SecondPage
