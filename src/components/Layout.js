import { NavLink, Outlet } from "react-router-dom";


const Layout = () => {
    
    return (
        <div>
            <header className="header">
                {/* <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                         <NavLink to="/" className="navbar-brand">Home pages</NavLink>
                    </div>
                                       
                    <div className="container-fluid">
                        <NavLink to="/movies" className="navbar-brand">Movies</NavLink>
                    </div>
                        
                        
                </nav> */}

                <ul className="nav-links">
                    <li>
                        <NavLink to="/">Home pages</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies">Movies</NavLink>
                    </li>
        
                    
                </ul>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer className="footer">Footer</footer>
            
        </div>

    )
};

export default Layout;