import * as React from "react"
import PropTypes from "prop-types"
import { Link, navigate } from "gatsby"
import './layout.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `green`,
      marginBottom: `1.45rem`,
     // paddingBottom: '30px',
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      
    </div>
    <div className='boowoa'>
          <button /*style={{ borderRadius: '12px'}}*/ onClick={() => navigate('/')}>home</button>
          <button onClick={() => navigate('/page-2')}>page 2</button>
          <button onClick={() => navigate('/page-3')}>page 3</button>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
