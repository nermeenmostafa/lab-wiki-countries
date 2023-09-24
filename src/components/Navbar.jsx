import react from 'react'
import { Link } from 'react-router-dom'


const Navbar () => {
	return (
        <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <link className='navbar-brand'   to="/">Lab Wiki Countries</link>
        </div>
      </nav>
	)
}
export default Navbar