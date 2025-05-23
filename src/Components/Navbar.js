import React, { useEffect, useState } from 'react'

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <nav className={`navbar ${scrolled ? ' scrolled ' : ''} navbar-expand-lg bg-body-tertiary`}>
      <div class="container">
        <a class="navbar-brand" href="#">Hairnic</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item1 p-3">
              <a class="nav-link " aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item p-3">
              <a class="nav-link" href="#"> About</a>
            </li>
            <li class="nav-item dropdown p-3">
              <a class="nav-link" href='#'>Products</a>
            </li>
            <li class="nav-item dropdown p-3">
              <a class="nav-link" href='#'>page</a>
            </li>
            <li class="nav-item dropdown p-3">
              <a class="nav-link" href='#'>Contact</a>
            </li>
          </ul>

          <form className='but mt-1'>
            <button classNamec="" type="submit">Shop Now</button>
          </form>
        </div>
      </div>
    </nav>
  )
}





export default Navbar