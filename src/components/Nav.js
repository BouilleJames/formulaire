import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="/">
            Dsi Méditérranée
          </a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              {/* <a class="nav-link active" aria-current="page" href="#">
                Home
              </a> */}
              <Link
                className="nav-link active"
                aria-current="page"
                to="/signup"
              >
                Inscription
              </Link>
            </li>

            <li class="nav-item">
              {/* <a class="nav-link disabled" aria-disabled="true" href="#">
                Disabled
              </a> */}
              <Link
                className="nav-link disabled"
                aria-disabled="true"
                to="/connexion"
              >
                Formulaire de Connexion
              </Link>
              <Link
                className="nav-link disabled"
                aria-disabled="true"
                to="/main"
              >
                photos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/connexion">Formulaire de Connexion</Link>
    //     </li>
    //     <li>
    //       <Link to="/inscription">Formulaire d'Inscription</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Nav;
