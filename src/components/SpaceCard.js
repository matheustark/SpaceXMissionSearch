import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { spacexCard } from './spaceActions'
import Cards from './Cards'

class SpaceCard extends React.Component {
  /*  constructor(props){
        super(props)
        this.state = {
            
        }
        
        this.spacexCard()
    }

    spacexCard(){
        const urlSpacex = `https://api.spacexdata.com/v3/launches`
        axios.get(urlSpacex)
        .then(resp => {
            //console.log(resp.data)
            const results = resp.data
            var spaceCards = []

            results.map((spacex) => {

                const spaceCard = <Cards key={spacex.id} spacex={spacex} />
                spaceCards.push(spaceCard)
            })
            
            this.setState({cards: spaceCards })   
                     
                
          })
       
    } */

    render(){
        return(
            <div style={{flexWrap: 'wrap', display: 'flex'}}>
                {this.props.card}
                <button onClick={this.props.spacexCard}>testeButton</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        card: state.card.cards
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ spacexCard }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceCard)
