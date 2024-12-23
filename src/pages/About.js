import React from "react";
import "../styles/about.css"; // Make sure this is the correct path
import PreEventsCard from "../components/about/preEvents";
import StatsComponent from "../components/about/StatsComponent";
import DeptEvents from "../components/about/deptEvents";
import AimVision from "../components/about/AimVision";
import MomentsGallary from "../components/about/gallary";
import GradientBorderComponent from "../components/general/GradientBorderComponet";
import ExtravaganzaAbout from '../components/about/ExtravaganzaAbout.js'

export default function About() {
	return (
		<div className="gif-background">
			<div style={{width:"100vw"}}>
				<AimVision />
			</div>
			<GradientBorderComponent/>
			<StatsComponent />
      		<ExtravaganzaAbout/>
			<PreEventsCard />
			<GradientBorderComponent/>
			<DeptEvents />
			<GradientBorderComponent/>
			<MomentsGallary/>
		</div>
	);
}
