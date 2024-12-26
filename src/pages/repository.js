import { useState } from "react";
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
import refresh from "../assets/icons/refresh.svg";
import addRepo from "../assets/icons/addRepo.svg";
import search from "../assets/icons/search.svg";
import database from "../assets/icons/database.svg";
import blueDot from "../assets/icons/blueDot.svg";
import publicStatus from "../assets/icons/public.svg";
import privatestatus from "../assets/icons/private.svg";
import close from "../assets/icons/close.svg";
import dropdown from "../assets/icons/dropdown.svg";
import dropdown_repo from "../assets/icons/dropdown_repo.svg"
const Repository = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	console.log(menuOpen)
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

	const repositoriesArr = [
		{
			name: "design-system",
			visibility: "Public",
			technology: "React",
			size: "7320 KB",
			lastUpdated: "Updated 1 day ago",
		},
		{
			name: "codeant-ci-app",
			visibility: "Private",
			technology: "HTML/CSS",
			size: "7320 KB",
			lastUpdated: "Updated 2 day ago",
		},
		{
			name: "analytics-dashboard",
			visibility: "Private",
			technology: "PHP",
			size: "7320 KB",
			lastUpdated: "Updated 5 day ago",
		},
		{
			name: "mobile-app",
			visibility: "Public",
			technology: "Python",
			size: "7320 KB",
			lastUpdated: "Updated 4 day ago",
		},
		{
			name: "e-commerce-platform",
			visibility: "private",
			technology: "Javascript",
			size: "7320 KB",
			lastUpdated: "Updated 1 day ago",
		},
		{
			name: "blog-website",
			visibility: "Public",
			technology: "java",
			size: "7320 KB",
			lastUpdated: "Updated 1 day ago",
		},
		{
			name: "social-network",
			visibility: "private",
			technology: "Swift",
			size: "7320 KB",
			lastUpdated: "Updated 1 day ago",
		},
	];
	return (
		<div className="display_flex repo_header_flex_direction relative">
			<div className={menuOpen ? 'overlay':''}></div>
			<section className={`sidebar_color ${ !menuOpen ? "m_border_bottom": ''} display_flex flex_direction_column m_dropdown_menu_position align_start sidebar border_right h_100vh m_h_auto p_28 w_fit_content`}>
				<div className="mb_18 ">
					<img src={repositoryLogo} alt="repositoryLogo" />
					<div className="font_size_24">CodeAnt AI</div>
					{!menuOpen ? (
						<img
							onClick={() => setMenuOpen(true)}
							src={dropdown}
							alt="down"
							className="hide_dropdown_icons m_ml_auto"
						/>
					) : (
						<img
							onClick={() => setMenuOpen(false)}
							src={close}
							alt="close"
							className="hide_dropdown_icons m_ml_auto"
						/>
					)}
				</div>
				<div className={` p_10 radius_8 border mb_16 ${menuOpen ? "display_block" : "display_none"}`}>
					<div className="mr_4">UtkarshDhairyaPa...</div>{" "}
					<img src={downArrow} alt="down arrow" />
				</div>

				{ sidebar.map(({ name, icon }, index) => {
					return (
						<div
							key={index}
							className={`sidebar_options p_10 radius_8 ${!menuOpen ? "display_none": '' }  ${
								index === 5 && !menuOpen ? "mt_auto" :  menuOpen ? " m_mt_none" : ""
							} ${
								index === 0 && !menuOpen
									? "bg_color_blue color_white"
									: ""
							}`}
						>
							<img
								src={ index === 0 && menuOpen ? dropdown_repo : icon}
								alt="repositoryLogo"
								className="mr_4"
							/>
							
							<div
								className={`font_size_16 semi_bold `}
							>
								{name}
							</div>
						</div>
					);
				})}
			</section>
			<section className="bg_color_D5D7DA flex_1 m_mt_60">
				<div className="h_100vh m_24 m_margin_0 border bg_color_white radius_12">
					<div className="display_flex m_gap_14 repo_header_flex_direction justify_between align_center repo_header_align_start m_20">
						<div className="display_flex flex_direction_column align_start gap_4">
							<div className="font_weight_700 font_size_x_large">
								Repositories
							</div>
							<div className="font_size_12 m_font_size_14 color_414651">
								33 total repositories
							</div>
						</div>
						<div className="display_flex gap_12">
							<div className=" p_10 radius_8 display_flex display_flex align_center border">
								<img
									src={refresh}
									alt="refresh"
								/>
								<div>Refresh All</div>
							</div>
							<div className=" p_10 radius_8 bg_color_blue color_white display_flex align_center">
								<img src={addRepo} alt="add" />
								<div>Add Repository</div>
							</div>
						</div>
					</div>
					<div className="border radius_8 p_14 search_bar_margin display_flex align_center ">
						<img src={search} alt="icon" />
						<input
							className="outline_none border_none font_size_14"
							type="text"
							placeholder="Search Repositories"
						/>
					</div>
					<div className="overflow_scroll">
						{repositoriesArr.map(
							(
								{
									name,
									visibility,
									technology,
									size,
									lastUpdated,
								},
								index
							) => {
								return (
									<div
										key={index}
										className="border_top py_14 pl_28 repo_list_hover_effect"
									>
										<div className="display_flex justify_right align_center gap_12 mb_8">
											<div className="font_weight_600 font_size_20">
												{name}
											</div>
											<img
												className="w_45"
												src={
													visibility ===
													"Public"
														? publicStatus
														: privatestatus
												}
												alt=""
											/>
										</div>
										<div className="display_flex justify_right align_center gap_24">
											<div className="display_flex align_center gap_8">
												<div className="font_size_14 font_weight_500">
													{
														technology
													}
												</div>
												<img
													src={
														blueDot
													}
													alt=""
												/>
											</div>
											<div className="display_flex align_center gap_8">
												<img
													src={
														database
													}
													alt=""
												/>
												<div className="font_size_14">
													{
														size
													}
												</div>
											</div>
											<div className="font_size_14">
												{
													lastUpdated
												}
											</div>
										</div>
									</div>
								);
							}
						)}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Repository;
