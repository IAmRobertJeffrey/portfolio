import styled from "styled-components";


export const HomePageWrapper = styled.main`
	width:100%;
	display:flex;	
	flex-direction:column;
	align-items:center;
	justify-content:center;
`
export const IntroductionWrapper = styled.section`
	width:100%;
	display:flex;
	align-items:center;
	justify-content:center;
	padding:2rem;
`
export const IntroductionTextWrapper = styled.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
	width:100%;
	align-items:center;
`

export const IntroductionSocialsWrapper = styled.div`
	display:flex;
	justify-items:space-around;
	filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, 0.1));
	flex-direction:row
	align-items:center;
	width:100%;
	flex-wrap:wrap;
	justify-content:space-between;
`

export const IntroductionText = styled.h1`
	color:${props => props.color ? props.color : "black"};
	font-family:${props => props.font ? props.font : "poppins"};;
	font-weight:200;
	font-size:1.5rem;
	margin-bottom:30px;
`

export const IntroductionTextLocation = styled.h1`
	color:${props => props.color ? props.color : "black"};
	font-family:poppinsThick;
	font-weight:200;
	font-size:1.5rem;
	margin-bottom:0px;
	margin-top:0px;
	filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .3));
	display: inline;
`


export const ProjectsWrapper = styled.section`
	width:100%;
	display:flex;
	align-items:center;
	justify-content:center;
	padding:2rem;
	background-color:${props => props.color ? props.color : "black"};
	flex-direction:column;
	
	
`
export const ProjectsHeading = styled.h1`
color:${props => props.color ? props.color : "black"};
	font-family:poppinsThick;
	font-weight:200;
	font-size:1.75rem;
	text-decoration: underline;
`
export const Project = styled.div`
	width:100%;
	display:flex;
	flex-direction:column;
	align-items:center;
	margin-bottom:2rem;
`

export const ProjectDescription = styled.div`
	width:100%;
	display:flex;
	flex-direction:column;
	align-items:center;

`

export const ProjectTitle = styled.h1`
	color:${props => props.color ? props.color : "black"};
	font-family:poppinsThick;
	font-weight:200;
	font-size:1.5rem;
	
`
export const ProjectDescriptionText = styled.p`
	color:white;
	font-family:poppins;
	font-weight:200;
	font-size:1.25rem;
`

export const ProjectLinks = styled.div`
	display:grid;
	width:100%;
	grid-gap:10px;
	box-sizing:border-box;
	grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
	grid-auto-rows: auto;
	
`
export const ProjectLink = styled.button`
	width:100%;
	padding:1rem;
	background:#262534;
	border: 1px #6c63ff solid;
	color:white;
	font-family:poppinsThick;
	font-weight:200;
	height:100%;
	font-size:1rem;
	filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, 0.5));

	&:hover
	{
		cursor: pointer;
		border: 1px #ffffff solid;
	}
`