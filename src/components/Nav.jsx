import "bulma/css/bulma.min.css";
import "../css/Nav.css";

function Nav() {
	return (
		<div className="navSection">
			<nav
				class="navbar"
				role="navigation"
				aria-label="main navigation"
			>
				<div class="navbar-brand">
					<a class="navbar-item">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Bumble_logo_with_wordmark.svg"
							width="188px"
							height="32px"
						/>
					</a>

					<a
						role="button"
						class="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div
					id="navbarBasicExample"
					class="navbar-menu"
				>
					<div class="navbar-end">
						<div class="navbar-item has-dropdown is-hoverable">
							<a class="navbar-item">
								The App
							</a>

							<div class="navbar-dropdown">
								<a class="navbar-item">
									DATE
								</a>
								<a class="navbar-item">
									BFF
								</a>
								<a class="navbar-item">
									BIZZ
								</a>
							</div>
						</div>

						<div class="navbar-item has-dropdown is-hoverable">
							<a class="navbar-item">
								Gift Cards
							</a>

							<div class="navbar-dropdown">
								<a class="navbar-item">
									Redeem
								</a>
								<a class="navbar-item">
									Buy
								</a>
							</div>
						</div>

						<a class="navbar-item">
							Ambassadors
						</a>
						<a class="navbar-item">
							The Buzz
						</a>
						<a class="navbar-item">
							About
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Nav;
