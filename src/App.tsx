import * as C from './App.styles'

/* Problems to solve: 
   1. Delete the Default body margin (8px);
   2. Create the Toggle Menu behavior;
   3. Create the Exclusive Games Grid responsive;
*/

const App = () => {
  return (
    <C.Container> {/* Body */}

      <C.Header>
        <nav>
        <img src="./img/logo.png" alt="" className='logo' />
        <ul>
          <li><a href="#">Game Controllers</a></li>
          <li><a href="#">Exclusive Games</a></li>
          <li><a href="#">Cupoms</a></li>
          <li><a href="#">Others</a></li>
        </ul>
        <img src="./img/menu.png" alt="" className='menu-icon' />
        </nav>
      </C.Header>

      <C.MainContent> {/* Row */}
          <section className='col-1'>
            <h2>PS4 V2 <br/> DualShock 4</h2>
            <h3>Wireless Controller for PlayStation 4</h3>
            <p>(Compatible/Generic)</p>
            <h4>$32.50</h4>
            <button type="button">Buy Now <img src="./img/arrow.png" alt="" /></button>
          </section>
          
          <section className='col-2'>
            <img src="./img/controller.png" alt="" className='controller' />
            <div className="color-box"></div>
            <div className="add-btn">
              <img src="./img/add.png" alt="" />
              <p><small>Add to Cart</small></p>
            </div>
          </section>
      </C.MainContent>
      
      <C.Games> {/* List of Exclusive Games */}


      </C.Games>
      
      <C.SocialLinks>
        <img src="./img/fb.png" alt="" />
        <img src="./img/tw.png" alt="" />
        <img src="./img/ig.png" alt="" />
      </C.SocialLinks>

    </C.Container>
  );
}

export default App;