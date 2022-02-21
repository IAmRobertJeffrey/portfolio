import React from 'react'
import { HomePageWrapper, IntroductionSocialsWrapper, IntroductionTextLocation } from '../components/homepage/HomePage.styled'
import { IntroductionWrapper, IntroductionText, IntroductionTextWrapper, ProjectsWrapper, ProjectsHeading, Project, ProjectLink, ProjectDescription, ProjectTitle, ContactHeading, ContactWrapper, ProjectLinks, ProjectDescriptionText, ContactForm, NameInput, EmailInput, MessageInput, SubmitButton } from '../components/homepage/HomePage.styled'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { colors } from '../helpers/colors/colors';

const HomePage = () =>
{

	const handleContactSubmit = (e) =>
	{
		e.preventDefault();
		console.log("submitted");
	}

	return (
		<HomePageWrapper>
			<IntroductionWrapper>
				<IntroductionTextWrapper>
					<IntroductionText color={colors.dark}>
						Hey there👋 <br /> I'm Robert Jeffrey, An aspiring <strong><IntroductionTextLocation color={colors.blue}>Web Developer</IntroductionTextLocation></strong> based in <strong><IntroductionTextLocation color={colors.blue}>Basingstoke.</IntroductionTextLocation></strong>
					</IntroductionText>


					<a target="_blank" rel="noreferrer" href='https://github.com/IAmRobertJeffrey/clothes-shop'><ProjectLink type='button'>Contact Me</ProjectLink></a>
					<IntroductionSocialsWrapper>
						<a target="_blank" rel="noreferrer" href='https://github.com/IAmRobertJeffrey'><AiFillGithub size="50px" color="#262534" /></a>
						<a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/robert-jeffrey-4b885b211/'><AiFillLinkedin size="50px" color="#262534" /></a>
						<a href='mailto:iamrobertjeffrey@gmail.com'><AiFillMail size="50px" color="#262534" /></a>
					</IntroductionSocialsWrapper>
				</IntroductionTextWrapper>
			</IntroductionWrapper>
			<ProjectsWrapper color={colors.dark}>
				<ProjectsHeading color={colors.white}> Web development projects</ProjectsHeading>
				<ProjectDescriptionText>
					Here are some example projects I have created. Other projects, as well as the ones below, can all be found on my <a target="_blank" rel="noreferrer" href="https://github.com/IAmRobertJeffrey"><strong>github.</strong></a>
				</ProjectDescriptionText>
				<Project>
					<ProjectTitle color={colors.white}>
						Realtime Chat App
					</ProjectTitle>
					<a target="_blank" rel="noreferrer" href='https://roberts-chatting.web.app/'><img width={"100%"} src='./img/loginScreen.jpg' alt='instant chat app' /></a>
					<ProjectDescription>
						<ProjectDescriptionText>This instant chat app was made by me as part of a <a target="_blank" rel="noreferrer" href="https://devjam.vercel.app/projects"><strong>developer challenge</strong></a> using React and Material-UI on the frontend and node/socketio on the backend. It allows users to create a temporary username and chat to other users in real time.</ProjectDescriptionText>
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
						<ProjectDescriptionText>This mock clothes shop was made by me as a personal project using React and Chakra-UI on the frontend and Supabase for the backend. It allows users to create accounts with email/password combonations, add fake products to their basket, change their username/displayname and delete their accounts.</ProjectDescriptionText>
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
						<ProjectDescriptionText>This instant chat app was made by me as part of a <a target="_blank" rel="noreferrer" href="https://devjam.vercel.app/projects"><strong>developer challenge</strong></a> using React on the frontend and node/express and MongoDB on the backend. It allows users to vote anonymously on polls posted by other users, as well as post their own polls. </ProjectDescriptionText>
					</ProjectDescription>
					<ProjectLinks>
						<a target="_blank" rel="noreferrer" href='https://github.com/IAmRobertJeffrey/VotingApp'><ProjectLink type='button'>Github Repository</ProjectLink></a>
						<a target="_blank" rel="noreferrer" href='https://roberts-voting-app.web.app/'><ProjectLink type='button'>Live Website</ProjectLink></a>
					</ProjectLinks>
				</Project>
			</ProjectsWrapper>
			<ContactWrapper>
				<ContactHeading color={colors.light}> Contact Me</ContactHeading>
				<ContactForm>
					<NameInput type={"text"} placeholder='Name*' />
					<EmailInput type={"email"} placeholder='Email*' />
					<MessageInput placeholder='Message' />
					<SubmitButton onClick={(e) => handleContactSubmit(e)} type={"submit"}>Submit</SubmitButton>
				</ContactForm>
			</ContactWrapper>
		</HomePageWrapper>
	)
}

export default HomePage