import styles from 'styled-components'

const NavContainer = styles.nav`
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .nav-center {
        width: 90vw;
        margin: 0 auto;
        max-width: var(--max-width);
    }

    .nav-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            width: 50px;
            margin-left: -15px;
        }
    }

    .nav-toggle {
        background: transparent;
        border: transparent;
        cursor: pointer;
        color:  var(--clr-primary-5);
        svg {
            font-size: 2rem;
        }
    }

    .nav-links {
        display: none;
    }

    .cart-btn-wrapper {
        display: none;
    }    
`

export default NavContainer