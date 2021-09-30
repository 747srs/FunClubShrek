import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
      <Seo title="Шрек!" />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '600px',
        //bottom: '80px',
        grid: '6frr',
        

      }}>
      <h1>Кто же такой этот ваш Шрек??</h1>
      <p>Шрек (англ. Shrek) — вымышленный огр, персонаж детской книги Уильяма Стейга «Шрек!», а также снятой по её мотивам популярной серии анимационных фильмов, сопутствующих фильмам компьютерных игр, комиксов, наборов стикеров и т. д. </p>
      <h2>Ну посмотрите на этого красавчика!</h2>
      <p>Его тело ядовитого цвета (зеленого), уши трубочкой.</p>
      <h4>А какая одежда!</h4>
      <p>Бежевая рубашка, коричневая жилетка, коричневые штаны в клетку, ботинки.</p>
      </div>
  </Layout>
)

export default IndexPage
