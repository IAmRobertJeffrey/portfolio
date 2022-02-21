import React from 'react'
import { HomePageWrapper, IntroductionSocialsWrapper, IntroductionTextLocation } from '../components/homepage/HomePage.styled'
import { IntroductionWrapper, IntroductionText, IntroductionTextWrapper, ProjectsWrapper, ProjectsHeading, Project, ProjectLink, ProjectDescription, ProjectTitle, ProjectLinks, ProjectDescriptionText } from '../components/homepage/HomePage.styled'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { colors } from '../helpers/colors/colors';

const HomePage = () =>
{

	return (
		<HomePageWrapper>
			<IntroductionWrapper>
				<IntroductionTextWrapper>
					<IntroductionText color={colors.dark}>
						Hey there👋 <br /> I'm Robert Jeffrey, An aspiring Web Developer based in <IntroductionTextLocation color={colors.blue}>Basingstoke.</IntroductionTextLocation>
					</IntroductionText>
					<IntroductionSocialsWrapper>
						<a target="_blank" rel="noreferrer" href='https://github.com/IAmRobertJeffrey'><AiFillGithub size="50px" color="#262534" /></a>
						<a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/robert-jeffrey-4b885b211/'><AiFillLinkedin size="50px" color="#262534" /></a>
						<a href='mailto:iamrobertjeffrey@gmail.com'><AiFillMail size="50px" color="#262534" /></a>
					</IntroductionSocialsWrapper>
				</IntroductionTextWrapper>
			</IntroductionWrapper>
			<ProjectsWrapper color={colors.dark}>
				<ProjectsHeading color={colors.white}> Web development projects</ProjectsHeading>
				<Project>
					<ProjectTitle color={colors.white}>
						Realtime Chat App
					</ProjectTitle>
					<a target="_blank" rel="noreferrer" href='https://roberts-chatting.web.app/'><img width={"100%"} src='./img/loginScreen.jpg' alt='instant chat app' /></a>
					<ProjectDescription>
						<ProjectDescriptionText>This instant chat app was made by me as part of a <a target="_blank" rel="noreferrer" href="https://devjam.vercel.app/projects">developer challenge</a> using React and Material-UI on the frontend and node/socketio on the backend.</ProjectDescriptionText>
					</ProjectDescription>
					<ProjectLinks>
						<a target="_blank" rel="noreferrer" href='https://github.com/IAmRobertJeffrey/chat-app'><ProjectLink type='button'>Github Repository</ProjectLink></a>
						<a target="_blank" rel="noreferrer" href='https://roberts-chatting.web.app/'><ProjectLink type='button'>Live Website</ProjectLink></a>
					</ProjectLinks>
				</Project>

				<Project>
					<ProjectTitle color={colors.white}>
						Simple Clothing Shop
					</ProjectTitle>
					<a target="_blank" rel="noreferrer" href='https://roberts-clothes.herokuapp.com/'><img width={"100%"} src='./img/clothes.png' alt='instant chat app' /></a>
					<ProjectDescription>
						<ProjectDescriptionText>This mock clothes shop was made by me as a personal project using React and Chakra-UI on the frontend and Supabase for the backend.</ProjectDescriptionText>
					</ProjectDescription>
					<ProjectLinks>
						<a target="_blank" rel="noreferrer" href='https://github.com/IAmRobertJeffrey/clothes-shop'><ProjectLink type='button'>Github Repository</ProjectLink></a>
						<a target="_blank" rel="noreferrer" href='https://roberts-clothes.herokuapp.com/'><ProjectLink type='button'>Live Website</ProjectLink></a>
					</ProjectLinks>
				</Project>

				<Project>
					<ProjectTitle color={colors.white}>
						Public Polling App
					</ProjectTitle>
					<a target="_blank" rel="noreferrer" href='https://roberts-voting-app.web.app/'><img width={"100%"} src='./img/voting.png' alt='instant chat app' /></a>
					<ProjectDescription>
						<ProjectDescriptionText>This instant chat app was made by me as part of a <a target="_blank" rel="noreferrer" href="https://devjam.vercel.app/projects">developer challenge</a> using React on the frontend and node/express and MongoDB on the backend.</ProjectDescriptionText>
					</ProjectDescription>
					<ProjectLinks>
						<a target="_blank" rel="noreferrer" href='https://github.com/IAmRobertJeffrey/VotingApp'><ProjectLink type='button'>Github Repository</ProjectLink></a>
						<a target="_blank" rel="noreferrer" href='https://roberts-voting-app.web.app/'><ProjectLink type='button'>Live Website</ProjectLink></a>
					</ProjectLinks>
				</Project>
			</ProjectsWrapper>
		</HomePageWrapper>
	)
}

export default HomePage