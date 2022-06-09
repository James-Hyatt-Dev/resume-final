import Image from 'next/image'
import React from 'react'
import s3idLogo from '../../public/s3idLogo.png'
import huluLogo from '../../public/huluLogo.png'
import bunnyEars from '../../public/bunnyEars.webp'
import cartoonMouth from '../../public/cartoonMouth.png'

function more() {
  return (
    <div>
        <div className="moreContainer">
            <section className="more">
                <h1>James Has Two Ears and One Mouth.</h1>
                <p>One of the greatest aspects to working along side of James, is his ability to shut up and listen. The old saying; "You have 2 ears
                      & 1 mouth, 
                     so listen twice as much as you speak" is something that James does exceptionally well. 
                    Along with drinking his coffee every morning, James shows up to work, to work... Git 'er Done'
                </p>
                {/* <div className="earsMouth">
                <Image src={bunnyEars} width={30} height={34} />
                <Image src={cartoonMouth} width={30} height={34} />
                </div> */}
            </section>

            <div className="portfolio">
                
                <div className="portfolioSamples">
                    <div className="portfolioLeft">
                        <div className="image">
                            <Image src={s3idLogo} width={100} height={100} />
                        </div>
                        <h2>Score 3 ID</h2>
                        <p>James created this UX/UI while the backend and components were developed by another development firm. James was tasked with handing over a design
                            package using simple html pages. Score3ID.com is completely mobile responsive.
                        </p>
                        <a href="/https://score3id.com"><p>CHECK IT OUT</p></a>
                    </div>
                    <div className="portfolioMiddle">
                        <div className="image">
                            <Image src={huluLogo} width={150} height={100} />
                        </div>
                        <h2>Hulu Clone</h2>
                        <p>James took an iconic streaming service and cloned it. Utilizing a movie API that will display the movies, the navigation works to display the corresponding movies
                            This Hulu clone is 100% mobile responsive, displaying items when on desktop, while not on a mobile.
                        </p>
                        <a href="/https://www.jameshyattdev.com/"><p>CHECK IT OUT</p></a>
                    </div>
                    <div className="portfolioRight">
                    <div className="image">
                            <Image src={s3idLogo} width={100} height={100} />
                        </div>
                        <h2>Score 3 ID</h2>
                        <p>James created this UX/UI while the backend and components were developed by another development firm. James was tasked with handing over a design
                            package using simple html pages. Score3ID.com is completely mobile responsive.
                        </p>
                        <a href="/https://score3id.com"><p>CHECK IT OUT</p></a>
                    </div>
                </div>
                    
            </div>
        </div>
    </div>
  )
}

export default more