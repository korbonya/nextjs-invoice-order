import React from 'react'
import Head from 'next/head'

import { Link } from '@material-ui/core'
import Navbar from '../components/Navbar/Navbar'

const Dashboard: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <ul>
          <li>
            <Link href={'/order/create'}>Sample Create Order</Link>
          </li>
          <li>
            <Link href="/order">Sample List Order's</Link>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Dashboard
