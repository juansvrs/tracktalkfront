import React from 'react'

export const Home = () => {
  return (
    <div>

        <div className='container text-center mt-5'>
            <h1>Hot music this week</h1>
            <h2 class="text-secondary text-center">Discover what the cool people are listening atm!</h2>
            <p class="text-info text-center">Rosalia, Kendrick Lamar, Lil Pump and much more</p>

            <div class="container text-center mt-5">
                <div class="row ">
                    <div class="col">
                    <iframe class="rounded-4" src="https://open.spotify.com/embed/track/2FYGZDfsAnNsrm1gVbyKnG?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    
                    </div>
                    <div class="col">
                    <iframe class="rounded-4"  src="https://open.spotify.com/embed/track/6IZvVAP7VPPnsGX6bvgkqg?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <iframe class="rounded-4" src="https://open.spotify.com/embed/track/2WzWwYoxWIqyjzIaazsqYV?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                    <div class="col">
                    <iframe class="rounded-4" src="https://open.spotify.com/embed/track/6OquGsVTLqZHyxqG0PLwFz?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                    <div class="col">
                    <iframe class="rounded-4" src="https://open.spotify.com/embed/track/5KUNwkaNf8l5A9sXZhiCgI?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </div>
            </div>

            <div className='container mt-5 mb-5'>

                    <figure class="text-center m-5">
                        <blockquote class="blockquote">
                            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </figcaption>
                        </figure>

                <h4 class="text-primary text-center ">Write and share reviews. Compile your own lists. Share your life in music.</h4>
                <h5 class="text-info text-center">Below are some popular reviews and lists from this week. Sign up to create your own.</h5>

            </div>
        
        </div>


        


        <div className='container'>

            <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link" data-bs-toggle="tab" href="#home" aria-selected="true" role="tab" tabindex="-1">Recently reviewed by more users...</a>
            </li>
            </ul>
            <div id="myTabContent" class="tab-content">
            <div class="tab-pane fade" id="home" role="tabpanel">
                <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
            </div>
            </div>


            <div className="container">
            <div class="d-flex mb-3 justify-content-between view overlay zoom">
                    <div class="p-2 w-50">
                        <img class="img-thumbnail" src="https://cdns-images.dzcdn.net/images/cover/d68c5560e7e839491a10cfcb1a01925c/500x500.jpg" alt="pt" />
                    </div>

                    <div class="p-2 w-50" >
                        <img class="img-thumbnail" src="https://upload.wikimedia.org/wikipedia/en/7/77/Bj%C3%B6rk-Debut-1993.png" alt="a" />
                    </div>

                    <div class="p-2 w-50">
                        <img class="img-thumbnail" src="https://i.redd.it/wdra307uhdg51.png" alt="d" />
                    </div>

                    <div class="p-2 w-50" >
                        <img class="img-thumbnail" src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2017/06/16/14975872992361.jpg" alt="d" />
                    </div>

                    <div class="p-2 w-50">
                        <img class="img-thumbnail" src="https://upload.wikimedia.org/wikipedia/en/a/a4/Pink_Floyd%2C_Wish_You_Were_Here_%281975%29.png" alt="d" />
                    </div>

                
                    
            </div>

        </div>


        </div>

        
        <div className="container d-flex flex-column gap-3">
        <div class="card-header ">Popular reviews this week</div>

            <div class="card border-success mb-3 d-flex flex-row">   
                <div class="card-body w-75">
                    <h4 class="card-title">ArtPop - Lady Gaga (2013) </h4>
                    <p class="card-text">In 2013, Lady Gaga was in pain. Ten months into touring the world with her Born This Way 
                    Ball, the singer exacerbated a hip injury while performing in Montreal, causing her to cancel 
                    all subsequent shows and withdraw from the spotlight. </p>
                    <h5>Rating: 7/10</h5>
                </div>

                <div class="card-body w-25" >
                <iframe className='rounded-4' src="https://open.spotify.com/embed/track/3fibIzbkYbvTmdoD5u2nPm?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>

            <div class="card border-warning mb-3 d-flex flex-row">   
                <div class="card-body w-75">
                    <h4 class="card-title">Blonde - Frank Ocean (2017) </h4>
                    <p class="card-text">In 2013, Lady Gaga was in pain. Ten months into touring the world with her Born This Way 
                    Ball, the singer exacerbated a hip  while performing in Montreal, 1233 agasdasd asd asd asd  her to cancel 
                    all subsequent shows and withdraw from the spotlight. </p>
                    <h5>Rating: 9/10</h5>
                </div>

                <div class="card-body w-25" >
                <iframe className='rounded-4' src="https://open.spotify.com/embed/track/3xKsf9qdS1CyvXSMEid6g8?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>

            <div class="card border-info mb-3 d-flex flex-row">   
                <div class="card-body w-75">
                    <h4 class="card-title">...I care because you do - Aphex twin (1899) </h4>
                    <p class="card-text">In 2013, Lady Gaga was in pain. Ten months into touring the world with her Born This Way 
                    Ball, the singer exacerbated a hip injury while performing in Montreal, causing her to cancel 
                    all subsequent shows and withdraw from the spotlight. </p>
                    <h5>Rating: 9.5/10</h5>
                </div>

                <div class="card-body w-25" >
                <iframe className='rounded-4' src="https://open.spotify.com/embed/track/6gbmylJ7sB7NFfMfTQHosf?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>

            <div class="card border-danger mb-3 d-flex flex-row">   
                <div class="card-body w-75">
                    <h4 class="card-title">Melodrama - Lorde (2017) </h4>
                    <p class="card-text">In 2013, Lady Gaga was in pain. Ten months into touring the world with her Born This Way 
                    Ball, the singer exacerbated a hip injury while performing in Montreal, causing her to cancel 
                    all subsequent shows and withdraw from the spotlight. </p>
                    <h5>Rating: 10/10</h5>
                </div>

                <div class="card-body w-25" >
                <iframe className='rounded-4' src="https://open.spotify.com/embed/track/7ARveOiD31w2Nq0n5FsSf8?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>

            <div className='container'>
                    <ul class="pagination container">
                        <li class="page-item disabled">
                        <a class="page-link" href="#">&laquo;</a>
                        </li>
                        <li class="page-item active">
                        <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                        <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                        <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                        <a class="page-link" href="#">4</a>
                        </li>
                        <li class="page-item">
                        <a class="page-link" href="#">5</a>
                        </li>
                        <li class="page-item">
                        <a class="page-link" href="#">&raquo;</a>
                        </li>
                    </ul>
            </div>

                    
          
            


        </div>
        


    </div>
  )
}
