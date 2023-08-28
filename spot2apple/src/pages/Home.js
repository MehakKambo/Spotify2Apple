import React from 'react'
import screenShot from '../svg/two-images-refactor-1.png'

class Home extends React.Component {

    showForm = () => {
        window.location.replace('http://localhost:8888/login')
    }

    render(){
        return(
            <section className='landing'>
                <div className='main-container'>
                    <div className='landing-right'>
                        <p>Transfer playlists from Spotify to Apple Music.</p> 
                        <button className='btn' onClick={this.showForm}>Transfer to Apple Music</button>  
                        <img className='landingPageImage' src={screenShot} alt='Spotify to Apple Music and Apple music to spotify'></img>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home