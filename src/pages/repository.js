import repositoryLogo from "../assets/icons/repositoryLogo.svg";
import "../css/repository.css";
import downArrow from "../assets/icons/downArrow.svg";
import repositories from "../assets/icons/repositories.svg";
import codeReview from "../assets/icons/codeReview.svg";
import cloudSecurity from "../assets/icons/cloudSecurity.svg";
import howToUse from "../assets/icons/howToUse.svg";
import settings from "../assets/icons/settings.svg";
import support from "../assets/icons/support.svg";
import logout from "../assets/icons/logout.svg";
const Repository = () => {
	const sidebar = [
		{
			name: "Repositories",
			icon: repositories,
		},
		{
			name: "AI Code Review",
			icon: codeReview,
		},
		{
			name: "Cloud Security",
			icon: cloudSecurity,
		},
		{
			name: "How to Use",
			icon: howToUse,
		},
		{
			name: "Settings",
			icon: settings,
		},
		{
			name: "Support",
			icon: support,
		},
		{
			name: "Logout",
			icon: logout,
		},
	];
	return (
		<>
			<section className="sidebar_color display_flex flex_direction_column align_start sidebar border_right h_100vh p_28 w_fit_content">
				<div className="mb_16">
					<img src={repositoryLogo} alt="repositoryLogo" />
					<div className="font_size_24">CodeAnt AI</div>
				</div>
				<div className=" p_14 radius_8">
					<div className="mr_4">UtkarshDhairyaPa...</div>{" "}
					<img src={downArrow} alt="down arrow" />
				</div>

				{sidebar.map(({name, icon}, index) => {
					return (
						<div key={index} className={`sidebar_options p_10 radius_8 ${index === 5 ? "mt_auto" : ""} ${index === 0 ? "bg_color_blue color_white" : ""}`}>
							<img
								src={icon}
								alt="repositoryLogo"
								className="mr_4"
							/>
							<div className={`font_size_16 semi_bold `}>
								{name}
							</div>
						</div>
					);
				})}
			</section>
			<section></section>
		</>
	);
};

export default Repository;
