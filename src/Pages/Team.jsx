import React from 'react'
import { useQuery } from 'react-query'
import Error from '../Error'

const Team = () => {

  const teamApi = async () => {
    const response =  await fetch('https://reqres.in/api/users?page=1')
    return response.json()
  }

  const { status, data } = useQuery('team', teamApi)

  if(status === 'loading') return <h1>Loading People...</h1>
  if(status === 'error') return <Error />

  return (
    <section className="bg" id="team" style={{backgroundImage: `url("./bg-img.jpg")`, backgroundSize: 'cover'}}>
      <div className="team-pg">
     <section>
    <a href="https://map.openchargemap.io/#/search" style={{fontSize: '3rem', color: 'white', textDecoration: 'none' }}>click here to see neraby ev charging stations ⛽</a>

      
     </section>
      </div>
    </section>
  )
}

export default Team