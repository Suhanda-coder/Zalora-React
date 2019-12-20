import React, {Component} from 'react';
import '../style/style.css';

class App extends Component{
    render(){
        return(
                  
            <div id="wrapper">
            <div id="header">
              <div class="container">
                <div id="hleft"> 
                  <h1><a href="#">Z A L O R A</a></h1>           
                  <ul>      
                    <li><a href="">WANITA</a></li>
                    <li><a href="">PRIA</a></li>
                    <li><a href="">ANAK-ANAK</a></li>
                    
                  </ul>
                    
                </div>
                <div id="header_right">
                <ul> 
                    <li><input id="search" type="text" placeholder="cari.." required/>
                        <input id="button" type="button" value= "cari"></input>
                    </li>     
                    <li><a href=""><img src={require('./image/item/header1.PNG')}></img></a></li>
                    <li><a href=""><img src={require('./image/item/header2.PNG')}></img></a></li>
                    <li><a href=""><img src={require('./image/item/header3.PNG')}></img></a></li>
                </ul>  
                </div>
                </div>
            </div>
                    

            <div id="header2">
                <div class="container">
                      <ul>      
                          <li><a href=""><img src={require('./image/item/bar1.PNG')}></img></a></li>
                          <li><a href=""><img src={require('./image/item/bar2.PNG')}></img></a></li>
                          <li><a href=""><img src={require('./image/item/bar3.PNG')}></img></a></li>
                      </ul>         
                </div>
            </div>
            <div id="content">
                <div class="container">
                    <div id="contents">
                        <div id="content1">          
                            <img src={require('./image/Wanita.gif')}/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div id="isi">
                    <div id="content4">
                        <img src={require('./image/kids.gif')}/>
                    </div>
                    <div id="content5">   
                        <a href="#"><img src={require('./image/line-bni.PNG')}/></a>               
                    </div>
                </div>
            </div>
                    
            <div class="container">
                <div id="best">
                    <h1>Best Sellers</h1>
                    <ul>
                      <li><a href=""><img src={require('./image/logo/sandal.jpg')}></img></a></li>
                      <li><a href=""><img src={require('./image/logo/tas1.jpg')}></img></a></li>
                      <li><a href=""><img src={require('./image/logo/sepatu.jpg')}></img></a></li>
                    </ul>
                </div>
            </div>
                    
            <div class="container">
                <div id="sponsor">
                    <h1>Featured Brands</h1>
                    <a href="#"><img src={require('./image/logo/zalora.png')}/></a>
                    <a href="#"><img src={require('./image/logo/something.png')}/></a>
                    <a href="#"><img src={require('./image/logo/cotton.png')}/></a>
                    <a href="#"><img src={require('./image/logo/mango.png')}/></a>
                    <a href="#"><img src={require('./image/logo/keds.jpg')}/></a>
                    <a href="#"><img src={require('./image/logo/levis.jpg')}/></a>
                    
                </div>
            </div>
                                
    
                <div id="product">
                        <h1>This Week's Highlights</h1>
                
            </div>
            
            <div id="footer">
                <div id="kaki">
                    <h1>Z A L O R A</h1>
                        <div class="footerer">
                            <p>Sebagai Pusat Fashion Online di Asia, kami menciptakan kemungkinan-kemungkinan gaya tanpa batas dengan cara memperluas jangkauan produk, mulai dari produk internasional hingga produk lokal dambaan. Kami menjadikan Anda sebagai pusatnya. Bersama ZALORA, You Own Now.</p>
                            
                        </div>
                        <div class="footerer">
                            <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally.</p>
                            
                        </div>
                        <div class="footerer">  
                            <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally.</p>
                            <a href="#">Read More</a>
                        </div>
                </div>
            </div>
                
        </div>    
            
        );
    }
}
export default App;
