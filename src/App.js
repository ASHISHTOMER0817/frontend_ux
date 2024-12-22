// import logo from './logo.svg';
import logo from "./assets/icons/logo.svg";
import smLogo from "./assets/icons/smLogo.svg";
import pieChart from "./assets/icons/pieChart.svg";
import github from "./assets/icons/github.svg";
import bitbucket from "./assets/icons/bitbucket.svg";
import azureDevops from "./assets/icons/azureDevops.svg";
import gitlab from "./assets/icons/gitlab.svg";
import "./App.css";

function App() {
	return (
		<div className="App">
			<section>
				<div className="box_shadow">
					<div className="display_flex">
						<img src={smLogo} alt="logo" />
						<h5>AI to Detect & Autofix Bad Code</h5>
					</div>
					<div className="display_flex">
						<div>
							<h5>30+</h5>
							<div>Language Support</div>
						</div>
						<div>
							<h5>10K+</h5>
							<div>Developers</div>
						</div>
						<div>
							<h5>100K+</h5>
							<div>Hours Saved</div>
						</div>
					</div>
				</div>
				<div className=" display_flex space_around">
					<div >
						<div>
							<h6 className="bold">Issues Fixed</h6>
							<h3 className="bold">500K+</h3>
							<img src={pieChart} alt="pie_chart" />
						</div>
						<div>
							<div>
								<img src="" alt="Up_sign" />
								<div>14%</div>
							</div>
							<div className="font-size">This week</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="right_section_border">
					<div>
						<div>
							<img src={logo} alt="logo" />
							<h4>CodeAnt AI</h4>
						</div>
						<div></div>
						<div className="display_flex ">
							<button>SAAS</button>
							<button>Self Hosted</button>
						</div>
					</div>
					<div className="">
						<button className="auth-button">
							<img
								className="login_icon_right_margin"
								src={github}
								alt="github"
							/>{" "}
							Sign in with GitHub
						</button>
						<button className="auth-button">
							<img
								className="login_icon_right_margin"
								src={bitbucket}
								alt="bitbucket"
							/>{" "}
							Sign in with Bitbucket
						</button>
						<button className="auth-button">
							<img
								className="login_icon_right_margin"
								src={azureDevops}
								alt="azureDevops"
							/>{" "}
							Sign in with Azure DevOps
						</button>
						<button className="auth-button">
							<img
								className="login_icon_right_margin"
								src={gitlab}
								alt="gitlab"
							/>{" "}
							Sign in with GitLab
						</button>
					</div>
				</div>
				<div className="padding_20">
					By signing up you agree to the{" "}
					<span className="bold">Privacy Policy</span>{" "}
				</div>
			</section>
		</div>

		// <div className="login-container">
		// 	{/* Left Section */}
		// 	<div className="left-section">
		// 		<div className="info-box">
		// 			<img
		// 				src={smLogo}
		// 				alt="AI Icon"
		// 				className="ai-icon"
		// 			/>
		// 			<h3 className="info-title">
		// 				AI to Detect & Autofix Bad Code
		// 			</h3>
		// 			<ul className="info-list">
		// 				<li>30+ Language Support</li>
		// 				<li>10K+ Developers</li>
		// 				<li>100K+ Hours Saved</li>
		// 			</ul>
		// 		</div>
		// 		<div className="stats-box">
		// 			<img
		// 				src={pieChart}
		// 				alt="Stats Icon"
		// 				className="stats-icon"
		// 			/>
		// 			<div className="stats">
		// 				<h4>Issues Fixed</h4>
		// 				<h2>500K+</h2>
		// 			</div>
		// 			<div className="growth">
		// 				<span>↑ 14%</span>
		// 				<span>This week</span>
		// 			</div>
		// 		</div>
		// 	</div>

		// 	{/* Right Section */}
		// 	<div className="right-section">
		// 		<div className="upper_part_right_section">
		// 			<img
		// 				src={logo}
		// 				alt="CodeAnt AI Logo"
		// 				className="logo-image"
		// 			/>
		// 			<h2 className="welcome-title">
		// 				Welcome to CodeAnt AI
		// 			</h2>
		// 			<div className="tabs">
		// 				<button className="tab active">SAAS</button>
		// 				<button className="tab">Self Hosted</button>
		// 			</div>
		// 		</div>

		// 		<div className="auth-buttons">
		// 			<button className="auth-button github">
		// 				<img
		// 					className="login_icon_right_margin"
		// 					src={github}
		// 					alt="github"
		// 				/>{" "}
		// 				Sign in with GitHub
		// 			</button>
		// 			<button className="auth-button bitbucket">
		// 				<img
		// 					className="login_icon_right_margin"
		// 					src={bitbucket}
		// 					alt="bitbucket"
		// 				/>{" "}
		// 				Sign in with Bitbucket
		// 			</button>
		// 			<button className="auth-button azure">
		// 				<img
		// 					className="login_icon_right_margin"
		// 					src={azureDevops}
		// 					alt="azureDevops"
		// 				/>{" "}
		// 				Sign in with Azure DevOps
		// 			</button>
		// 			<button className="auth-button gitlab">
		// 				<img
		// 					className="login_icon_right_margin"
		// 					src={gitlab}
		// 					alt="gitlab"
		// 				/>{" "}
		// 				Sign in with GitLab
		// 			</button>
		// 		</div>
		// 		<p className="privacy-text">
		// 			By signing up you agree to the
		// 			{/* <a href="#">Privacy Policy</a>. */}
		// 		</p>
		// 	</div>
		// </div>
	);
}

export default App;
