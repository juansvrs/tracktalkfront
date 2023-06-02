import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useUser } from "../context/UserContext";


export const Music = () => {

    const { user } = useUser();
    
  return (
    <div>
        <br></br>
        <div class="container text-center">
            <h2>Artists that you could like.</h2>
            <br></br>
            <div class="row">
                <div class="col">
                    <div class="card border-info mb-3 h-100" >
                        <div class="card-header"><h4>Playboi Carti</h4></div>
                        <div class="card-body">
                        <h6 class="card-title">Similar to Kodak Black, Lil Yachty, Lil Uzi Vert.</h6>
                        <img src="https://i1.sndcdn.com/artworks-VoOcmTf5hbuEIlIg-sQi7ng-t500x500.jpg" class="img-thumbnail" alt="Playboi Carti" width={200}></img>
                        <br></br>
                        <br></br>
                        <p class="card-text">Jordan Terrell Carter (born September 13, 1996), known professionally as Playboi Carti, is an American rapper from Atlanta, Georgia. Carter was initially signed to local underground label Awful Records prior to signing with ASAP Mob's AWGE Label under Interscope Records.[8] After gaining a cult following early in his career, Carter became popular in 2017.</p>
                        </div>
                    </div>
                </div>
                <div class="col" >
                    <div class="card border-info mb-3 h-100" >
                        <div class="card-header"><h4>Kendrick Lammar</h4></div>
                        <div class="card-body">
                        <h6 class="card-title">Similar to Tyler, The Creator, Kanye West, J. Cole.</h6>
                        <img src="https://pyxis.nymag.com/v1/imgs/bfb/f5c/e8a60aeb796e72b1f12cd9cea8270645bd-21-kendrick-lamar-2.rsquare.w700.jpg" class="img-thumbnail" alt="Kendrick Lammar" width={200}></img>
                        <br></br>
                        <br></br>
                        <p class="card-text">Kendrick Lamar Duckworth (born June 17, 1987) is an American rapper and songwriter. He is from Compton, California. He married a woman named Shylah. He is best known for his albums Overly Dedicated, Section.80, g.o.o.d kid, M.A.A.D. city, To Pimp a Butterfly, and DAMN.. He has also released five mixtapes.</p>
                        </div>
                    </div>
                </div>
            </div>

            <br></br>   

            <div class="row">
                <div class="col">
                    <div class="card text-white bg-info mb-3">
                        <div class="card-header"><h4>Aphex Twin</h4></div>
                        <div class="card-body">
                            <h6 class="card-title">Similar to Burial.</h6>
                            <img src="https://static01.nyt.com/images/2021/04/14/arts/13APHEXTWIN/13APHEXTWIN-mediumSquareAt3X-v2.jpg" class="img-thumbnail" alt="Aphex Twin" width={150}></img>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card text-white bg-info mb-3">
                        <div class="card-header"><h4>TK</h4></div>
                        <div class="card-body">
                            <h6 class="card-title">Similar to Ling Tosite Sigure.</h6>
                            <img src="https://stats.fm/_next/image?url=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab6761610000e5ebbc9c46311aceaadcf520314d&w=384&q=75" class="img-thumbnail" alt="TK" width={150}></img>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card text-white bg-info mb-3">
                        <div class="card-header"><h4>Crystal Castles</h4></div>
                        <div class="card-body">
                            <h6 class="card-title">Similar to Crim3s.</h6>
                            <img src="https://pyxis.nymag.com/v1/imgs/021/caf/988b8632f3b79e9100fce138abf2527349-20110418-wkndshows-day1-crystalcastles.rsquare.w768.jpg" class="img-thumbnail" alt="Crystal Castles" width={150}></img>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-white bg-info mb-3">
                        <div class="card-header"><h4>Interpol</h4></div>
                        <div class="card-body">
                            <h6 class="card-title">Similar to The Strokes.</h6>
                            <img src="https://s.hdnux.com/photos/10/04/02/2113696/6/1200x0.jpg" class="img-thumbnail" alt="Interpol" width={150}></img>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="card text-white bg-info mb-3">
                        <div class="card-header"><h4>Deftones</h4></div>
                        <div class="card-body">
                            <h6 class="card-title">Similar to Korn.</h6>
                            <img src="https://pyxis.nymag.com/v1/imgs/85f/f8c/84929bfdec692d6536c5e05f59acee765a-20-deftones.rsquare.w330.jpg" class="img-thumbnail" alt="Deftones" width={150}></img>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card text-white bg-info mb-3">
                        <div class="card-header"><h4>Death Grips</h4></div>
                        <div class="card-body">
                            <h6 class="card-title">Similar to Carly Rae Jepsen.</h6>
                            <img src="https://media.pitchfork.com/photos/5929f57f0c2bba1b7de037ca/1:1/w_450%2Cc_limit/99ce013a.jpg" class="img-thumbnail" alt="Death Grips" width={150}></img>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card text-white bg-info mb-3">
                        <div class="card-header"><h4>Pusha T</h4></div>
                        <div class="card-body">
                            <h6 class="card-title">Similar to Kanye West.</h6>
                            <img src="https://images.sk-static.com/images/media/profile_images/artists/814169/huge_avatar" class="img-thumbnail" alt="Pusha T" width={150}></img>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-white bg-info mb-3">
                        <div class="card-header"><h4>I Hate Sex</h4></div>
                        <div class="card-body">
                            <h6 class="card-title">Similar to The Orchid.</h6>
                            <img src="https://i.scdn.co/image/ab67616d0000b273d24d050b77544b826d794404" class="img-thumbnail" alt="I Hate Sex" width={150}></img>
                        </div>
                    </div>
                </div>
            </div>

            <br></br>
            <h2>Genres to dive in.</h2>
            <br></br>

                <div class="row">
                    <div class="col">
                        <div class="card border-info mb-3 h-100" >
                            <div class="card-header"><h4>Midwest emo.</h4></div>
                            <div class="card-body">
                            <h6 class="card-title">Outstanding artist: American Football.</h6>
                            <img src="https://upload.wikimedia.org/wikipedia/en/e/e6/American_football_band_lp_cover.png" class="img-thumbnail" alt="Playboi Carti" width={200}></img>
                            <br></br>
                            <br></br>
                            <p class="card-text">Midwest emo (or Midwestern emo) refers to the emo scene and/or subgenre that developed in 1990s Midwestern United States. Employing unconventional vocal stylings, distinct guitar riffs and arpeggiated melodies, Midwest emo bands shifted away from the genre's hardcore punk roots and drew on indie rock and math rock approaches.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <br></br>
                        <br></br>
                        <div class="row">
                            <div class="col">
                                <div class="card text-white bg-info mb-3">
                                    <div class="card-body">
                                        <h6 class="card-title">Rap.</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card text-white bg-info mb-3">
                                    <div class="card-body">
                                        <h6 class="card-title">Metal.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="card text-white bg-info mb-3">
                                    <div class="card-body">
                                        <h6 class="card-title">IDM.</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card text-white bg-info mb-3">
                                    <div class="card-body">
                                        <h6 class="card-title">Experimental.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="card text-white bg-info mb-3">
                                    <div class="card-body">
                                        <h6 class="card-title">R&B.</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card text-white bg-info mb-3">
                                    <div class="card-body">
                                        <h6 class="card-title">Hyperpop.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="card text-white bg-info mb-3">
                                    <div class="card-body">
                                        <h6 class="card-title">Hip-Hop.</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card text-white bg-info mb-3">
                                    <div class="card-body">
                                        <h6 class="card-title">Indie.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="card text-white bg-info mb-3">
                                    <div class="card-body">
                                        <h6 class="card-title">Rock.</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card text-white bg-info mb-3">
                                    <div class="card-body">
                                        <h6 class="card-title">Alternative.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
    </div>
  )}
