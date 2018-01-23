import React from 'react'
import EasternContainer from "./EasternContainer"
import WesternContainer from "./WesternContainer"
class MyPage extends React.Component {



  render(){
    console.log('CHILD in my page', this.props.currentUser)
    return(
      <div>
        {
          this.props.users.length === 0 ? "Loading..." :
          <div>
            <h1>{this.props.currentUser.full_name}</h1>
              <label>My Chinese Zodiac Info:</label>
              <EasternContainer
                renderPartner={this.props.renderPartner}
                users={this.props.users}
                currentUser={this.props.currentUser}
              />
              <label>My Western Astrology Info:</label>
              <WesternContainer currentUser={this.props.currentUser} />
          </div>
        }
      </div>
    )
  }
}

export default MyPage
