import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import LaunchItem from './LaunchItem'
import MissionKey from './MissionKey'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
      
    
    }
  
  
  }

`

class Launches extends Component {
  render () {
    return (
      <div>
        <h1 className="display-4 my-3"> Launches </h1>
        <MissionKey/>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h4>loading...</h4>
            if (error) console.log(error)

            return data.launches.map((launch, index) => (
              <LaunchItem
                key={index}
                launch={launch}
              />
            ))
          }}
        </Query>
      </div>
    )
  }
}

export default Launches