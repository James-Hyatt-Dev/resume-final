import Image from 'next/image'
import React from 'react'
import BwPicture from '../../public/bwPicture.jpeg'
import More from '../More'
import Contact from '../Contact'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function index() {
  return (
    <div className="wrapper">
        <div className='bodyContainer'>
            <div className="hero">
                <h1 className='first'>JAMES</h1>
                <h1 className="second">HYATT</h1>
                <h2 className="third">HAS A LOT OF IDEAS</h2>
            </div>        
        </div>

        <div className="bioSection">
            <div className="bioLeft">
                <div className="bioText">
                    <p><span>James Hyatt</span> is a graduate from Flatiron Schools Software Engineering Program.
                        As the Owner of <a href="https://score3id.com"><span className='link'>Score 3 ID</span></a>, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                </div>

                {/* TODO add links to social media images */}

                <div className="bioSocial">
                    <div className="facebook">
                        <FacebookIcon />
                    </div>
                    <div className="github">
                        <GitHubIcon />
                    </div>
                    <div className="linkedin">
                        <LinkedInIcon />
                    </div>
                    <div className="twitter">
                        <TwitterIcon />
                    </div>

                </div>
            </div> 
            <div className="bioRight">
                <Image src={BwPicture} width={2000} height={1100} />
            </div>                
        </div>

        <More />
        <Contact />
            



    </div>

  )
}

export default index