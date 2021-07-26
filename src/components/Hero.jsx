import "bulma/css/bulma.min.css";
import "../css/Hero.css";

function Hero() {
	return (
		<div className="HeroSection">
			<div class="card">
				<div class="card-content">
					<p class="title">
						Make the first move
					</p>
					<div class="content">
						Start meeting new people
						in your area! If you
						already have an account,
						sign in to use Bumble on
						the web..
					</div>
					<div>
						<button>Join</button>
						<button>Sign In</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
