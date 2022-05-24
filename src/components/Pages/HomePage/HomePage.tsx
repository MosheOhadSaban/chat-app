import React from 'react'
import { Outlet } from 'react-router-dom'
import Title from './home-page.components/Title/Title'

function HomePage() {
  return (
    <div className=".container.is-fullhd">
    <Title />
    <div className="columns is-centered">
      <div className="column is-4-desktop">
        <Outlet />
      </div>
    </div>
  </div>
  )
}

export default HomePage