import styled from "styled-components";


export const HomePageWrapper = styled.main`
	width:100%;
	display:flex;	
	flex-direction:column;
	align-items:center;
	justify-content:center;
`
export const IntroductionWrapper = styled.section`

	/* background: url("./img/wave.svg");
	background-position:fixed;
	background-size:0%;
	background-repeat:no-repeat; */

	width:100%;
	display:flex;
	align-items:center;
	justify-content:center;
	padding:2rem;
	@media (min-width: 600px)
	{
		padding-top:4rem;
		padding-bottom:4rem;
		
	}
	@media (min-width: 1300px)
	{
		padding-top:8rem;
		padding-bottom:8rem;
		
		//possibly dangerous
		/* min-height:100vh; */
		/* background-size:100%;  */
	}

	
	
`
export const IntroductionTextWrapper = styled.div`
	display:flex;
	flex-direction:column;
	justify-content:center;
	width:100%;
	align-items:center;

	@media (min-width: 610px)
	{
		width:50%;
	}
	@media (min-width: 1300px)
	{
		width:60%;
		
	}
`

export const ImageWrapper = styled.div`
	display:none;
	
	@media (min-width: 1300px)
	{
		display:flex;
		align-items:center;
		justify-items:center;
		width:80%;
		flex-direction:column;

		
	}
`

export const IntroductionSocialsWrapper = styled.div`
	display:flex;
	justify-items:space-around;
	filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, 0.1));
	flex-direction:row
	align-items:center;
	width:100%;
	flex-wrap:wrap;
	justify-content:space-around;
	margin-top:30px;
	@media (min-width: 600px)
	{
		
	}
	@media (min-width: 1300px)
	{
		width:50%;
	}
`

export const IntroductionText = styled.h1`
	color:${props => props.color ? props.color : "black"};
	font-family:${props => props.font ? props.font : "poppins"};;
	font-weight:200;
	font-size:1.5rem;
	margin-bottom:30px;
	text-align:center;
	@media (min-width: 600px)
	{
		
	}
	@media (min-width: 1300px)
	{
		width:50%;
	}
`

export const IntroductionTextLocation = styled.span`
	color:${props => props.color ? props.color : "black"};
	font-family:poppinsThick;
	font-weight:200;
	font-size:1.5rem;
	margin-bottom:0px;
	margin-top:0px;
	filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .3));
	display: inline;
`

export const ContactButton = styled.button`
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

	@media (min-width: 600px)
	{
		
	}
	@media (min-width: 1300px)
	{
		width:50%;
	}

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
	margin-bottom:0px;
	text-align:center;
	filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, 0.3));
`
export const Project = styled.div`
	width:100%;
	display:flex;
	flex-direction:column;
	align-items:center;
	margin-bottom:2rem;

	@media (min-width: 600px)
	{
		width:75%
	}
	@media (min-width: 1300px)
	{
		
		width:50%;
		display:flex;
		flex-direction:column;
		align-items:center;
		justify-content:center;
	}
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

export const ContactWrapper = styled.section`
	width:100%;
	display:flex;
	flex-direction:row;
	align-items:center;
	padding:2rem;
	justify-content:center;

	@media (min-width: 600px)
	{
		padding-top:4rem;
		padding-bottom:4rem;
		
	}
	@media (min-width: 1300px)
	{
		padding-top:8rem;
		padding-bottom:8rem;
		
		//possibly dangerous
		/* min-height:100vh; */
		/* background-size:100%;  */
	}
	
`

export const ContactIconWrapper = styled.div`
	display:none;
	
		
	@media (min-width: 600px)
	{
		
	}
	@media (min-width: 1300px)
	{
		display:flex;
		width:50%;
		align-items:center;
		justify-content:center;
		filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, 0.5));
	}
`

export const ContactForm = styled.form`
	width:100%;
	display:flex;
	flex-direction:column;
	align-items:center;
	

	@media (min-width: 600px)
	{
		
	}
	@media (min-width: 1300px)
	{
		
		width:75%
	}
	
`

export const ContactFormWrapper = styled.div`
	

	@media (min-width: 600px)
	{
		width:75%
	}
	@media (min-width: 1300px)
	{
		
		width:50%;
		display:flex;
		flex-direction:column;
		align-items:center;
		justify-content:center;
	}
	
`

export const NameInput = styled.input`
	width:100%;
	color:#262534;
	font-family:poppinsThick;
	font-weight:200;
	font-size:1rem;
	padding:1rem;
	filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, 0.5));
	margin-bottom:2rem;


	border:2px solid ${props => props.color ? props.color : "#6c63ff"};
	border-radius:0.2rem;

	&:focus {
    outline: none !important;
    border:2px solid #3f3d56;
	border-radius:0.2rem;
    
}
	
`

export const EmailInput = styled.input`
	width:100%;
	color:#262534;
	font-family:poppinsThick;
	font-weight:200;
	font-size:1rem;
	padding:1rem;
	margin-bottom:2rem;
	border:2px solid ${props => props.color ? props.color : "#6c63ff"};
	border-radius:0.2rem;

	&:focus {
    outline: none !important;
    border:2px solid #3f3d56;
	border-radius:0.2rem;
    
}

	filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, 0.5));
`

export const MessageInput = styled.textarea`
	width:100%;
	color:#262534;
	font-family:poppinsThick;
	font-weight:200;
	font-size:1rem;
	padding:1rem;
	height:6rem;
	resize:none;
	margin-bottom:2rem;
	border:2px solid ${props => props.color ? props.color : "#6c63ff"};
	border-radius:0.2rem;

	&:focus {
    outline: none !important;
    border:2px solid #3f3d56;
	border-radius:0.2rem;
    
}

	filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, 0.5));
`

export const SubmitButton = styled.button`
	width:100%;
	padding:1rem;
	background:#262534;
	border: 1px #6c63ff solid;
	color:white;
	font-family:poppinsThick;
	font-weight:200;
	font-size:1rem;
	filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, 0.5));

	&:hover
	{
		cursor: pointer;
		border: 1px #ffffff solid;
	}
`

export const ContactHeading = styled.h1`
	color:${props => props.color ? props.color : "black"};
	filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .3));
	font-family:poppinsThick;
	font-weight:200;
	font-size:1.75rem;
	
`

export const FormErrorLabel = styled.label`
	color:red;
	font-family:poppinsThick;
	font-weight:200;
	font-size:0.75rem;

`

export const FormSuccessLabel = styled.label`
	color:green;
	font-family:poppinsThick;
	font-weight:200;
	font-size:1rem;
	text-align:center;
	margin-bottom:25px;
`

export const CaptchaErrorLabel = styled.label`
	color:red;
	font-family:poppinsThick;
	font-weight:200;
	font-size:0.75rem;
`