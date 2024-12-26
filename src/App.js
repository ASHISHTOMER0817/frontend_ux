// import logo from './logo.svg';
import { useState } from "react";
import logo from "./assets/icons/logo.svg";
import smLogo from "./assets/icons/smLogo.svg";
import pieChart from "./assets/icons/pieChart.svg";
import github from "./assets/icons/github.svg";
import bitbucket from "./assets/icons/bitbucket.svg";
import azureDevops from "./assets/icons/azureDevops.svg";
import gitlab from "./assets/icons/gitlab.svg";
import hugeLogo from "./assets/icons/hugeLogo.svg";
import upArrow from "./assets/icons/upArrow.svg";
import sso from "./assets/icons/sso.svg";
import "./App.css";

function App() {
	const [auth, setAuth] = useState("SAAS");
	console.log(auth)
	return (
		<div className="App h-100vh position_relative">
			<img
				src={hugeLogo}
				alt="huge_logo"
				className="position_absolute left_0 bottom_0"
			/>
			<section className="flex-1 home_page_left_section m_homepage_left_section ">
				<div className="box_shadow position_relative radius_24">
					<div className="display_flex border_bottom_E6E8F0 p_20">
						<img src={smLogo} alt="logo" />
						<div className="bold font_size_18">AI to Detect & Autofix Bad Code</div>
					</div>
					<div className="gap_60 p_20 display_flex ">
						<div>
							<div className="font_size_18 bold">
								30+
							</div>
							<div className="font_size_14">
								Language Support
							</div>
						</div>
						<div>
							<div className="font_size_18 bold">
								10K+
							</div>
							<div className="font_size_14">
								Developers
							</div>
						</div>
						<div>
							<div className="font_size_18 bold">
								100K+
							</div>
							<div className="font_size_14">
								Hours Saved
							</div>
						</div>
					</div>
					<div className="box_shadow display_flex position_absolute flex_wrap radius_24 w_50 p_20 flex_wrap left_side_absolute_element_position bg_white row_gap_10 column_gap_40">
						{/* <div className="display_flex"> */}
						<img src={pieChart} alt="pie_chart" />
						<div>
							<div className="display_flex">
								<img
									src={upArrow}
									alt="Up_sign"
								/>
								<div className="color_0049C6">14%</div>
							</div>
							<div className="font-size">
								This week
							</div>
						</div>
						<div className="text_align_left">
							<div className="font_size_14 bold">Issues Fixed</div>
							<div className="font_size_32 bold">500K+</div>
						</div>
						{/* </div> */}
					</div>
				</div>
			</section>
			<section className="flex-1 background_color_FAFAFA home_page_right_section">
				{/* <div className="right_section_border background_color_white ml-8 mr-8 border_bottom"> */}
				<div className="right_section_border background_color_white ml-8 mr-8 border_bottom_radius_0 border_top_radius_10">
					<div className="display_flex justify_center">
						<img src={logo} alt="logo" />
						<h4>CodeAnt AI</h4>
					</div>
					<div className="header_margin">
						Welcome to CodeAnt AI
					</div>
					<div className="display_flex ">
						<button
							onClick={() => setAuth("SAAS")}
							className={`auth-button toggle-button m_toggle_button ${auth === "SAAS" ? "bg_blue color_white" : "color_414651 bg_white"}`}
						>
							SAAS
						</button>
						<button
							onClick={() => setAuth("self Hosted")}
							className={`auth-button toggle-button m_toggle_button ${auth !== "SAAS" ? "bg_blue color_white" : "color_414651 bg_white"}`}
						>
							Self Hosted
						</button>
					</div>
				</div>
				<div className="right_section_border auth_options display_flex background_color_white ml-8 mr-8 border_top_radius_0 border_bottom_radius_10">
					{auth === "SAAS" ? (
						<>
							<button className="auth-button min_width_75 bg_white">
								<img
									className="login_icon_right_margin"
									src={github}
									alt="github"
								/>{" "}
								Sign in with GitHub
							</button>
							<button className="auth-button min_width_75 bg_white">
								<img
									className="login_icon_right_margin"
									src={bitbucket}
									alt="bitbucket"
								/>{" "}
								Sign in with Bitbucket
							</button>
							<button className="auth-button min_width_75 bg_white">
								<img
									className="login_icon_right_margin"
									src={azureDevops}
									alt="azureDevops"
								/>{" "}
								Sign in with Azure DevOps
							</button>
							<button className="auth-button min_width_75 bg_white">
								<img
									className="login_icon_right_margin"
									src={gitlab}
									alt="gitlab"
								/>{" "}
								Sign in with GitLab
							</button>
						</>
					) : (
						<>
							<button className="auth-button min_width_75">
								<img
									className="login_icon_right_margin"
									src={gitlab}
									alt="gitlab"
								/>{" "}
								Self hosted GitLab
							</button>
							<button className="auth-button min_width_75">
								<img
									className="login_icon_right_margin"
									src={sso}
									alt="SSO"
								/>{" "}
								Sign in with Azure DevOps
							</button>
						</>
					)}
				</div>
				{/* </div> */}
				<div className="padding_20">
					By signing up you agree to the{" "}
					<span className="">Privacy Policy</span>{" "}
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
