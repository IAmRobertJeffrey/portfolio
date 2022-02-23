import React from 'react'
import { HomePageWrapper, IntroductionSocialsWrapper, IntroductionTextLocation } from '../components/homepage/HomePage.styled'
import { IntroductionWrapper, FormSuccessLabel, IntroductionText, IntroductionTextWrapper, CaptchaErrorLabel, ContactButton, ContactFormWrapper, ContactIconWrapper, ImageWrapper, ProjectsWrapper, ProjectsHeading, FormErrorLabel, Project, ProjectLink, ProjectDescription, ProjectTitle, ContactHeading, ContactWrapper, ProjectLinks, ProjectDescriptionText, ContactForm, NameInput, EmailInput, MessageInput, SubmitButton } from '../components/homepage/HomePage.styled'
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { GrContact } from 'react-icons/gr'
import { colors } from '../helpers/colors/colors';
import { useState, useRef } from 'react';
import { validateForm, resetForm } from '../helpers/formValidation';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

const HomePage = () =>
{
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const [formSuccess, setFormSuccess] = useState("")

	const [nameError, setNameError] = useState("")
	const [emailError, setEmailError] = useState("")
	const [messageError, setMessageError] = useState("")

	const [nameColor, setNameColor] = useState(colors.blue)
	const [emailColor, setEmailColor] = useState(colors.blue)
	const [messageColor, setMessageColor] = useState(colors.blue)

	const [captcha, setCaptcha] = useState(false)
	const [catchaError, setCaptchaError] = useState("")

	const contactRef = useRef()
	const formRef = useRef()

	const handleContactScroll = () =>
	{
		contactRef.current.scrollIntoView({ behavior: 'smooth' })
	}

	function onReCaptcha(value)
	{
		console.log("Captcha value:", value);
		if (value === true)
		{
			setCaptcha(true)
		}
	}

	const handleContactSubmit = (e) =>
	{
		e.preventDefault();
		const valid = validateForm(name, setName, setNameColor, email, setEmail, setEmailColor, message, setMessage, setMessageColor, setNameError, setEmailError, setMessageError)

		if (valid)
		{
			if (captcha)
			{
				resetForm(setName, setEmail, setMessage)
				setFormSuccess("Submission successful, thank you! I will get back to you as soon as possible.")

				emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, 'template_500au3a', formRef.current, process.env.REACT_APP_USER_ID)
					.then((result) =>
					{
						console.log(result.text);
					}, (error) =>
					{
						// console.log(error.text);
					});
			}
			else
			{
				setCaptchaError("Please tick the Captcha box.")
			}

		}
	}

	return (
		<HomePageWrapper>
			<IntroductionWrapper>
				<IntroductionTextWrapper>
					<IntroductionText color={colors.dark}>
						Hey there👋 <br /> I'm Robert Jeffrey, An aspiring <strong><IntroductionTextLocation color={colors.blue}>Web Developer</IntroductionTextLocation></strong> based in <strong><IntroductionTextLocation color={colors.blue}>Basingstoke.</IntroductionTextLocation></strong>
					</IntroductionText>
					<ContactButton onClick={handleContactScroll} type='button'>Contact Me</ContactButton>
					<IntroductionSocialsWrapper>
						<a target="_blank" rel="noreferrer" href='https://github.com/IAmRobertJeffrey'><AiFillGithub size="50px" color="#262534" /></a>
						<a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/robert-jeffrey-4b885b211/'><AiFillLinkedin size="50px" color="#262534" /></a>
						<a href='mailto:contact@robertjeffrey.co.uk'><AiFillMail size="50px" color="#262534" /></a>
					</IntroductionSocialsWrapper>
				</IntroductionTextWrapper>
				<ImageWrapper>
					<img src='./img/undraw_programming.svg' style={{ width: "65%" }} alt='web developer' />
				</ImageWrapper>
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
					<a target="_blank" rel="noreferrer" href='https://roberts-chatting.web.app/'><img width={"100%"} src='./img/chat.webp' alt='instant chat app' /></a>
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
					<a target="_blank" rel="noreferrer" href='https://roberts-clothes.herokuapp.com/'><img width={"100%"} src='./img/clothes.webp' alt='clothes shop app' /></a>
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
					<a target="_blank" rel="noreferrer" href='https://roberts-voting-app.web.app/'><img width={"100%"} src='./img/voting.webp' alt='public polling app' /></a>
					<ProjectDescription>
						<ProjectDescriptionText>This public polling app was made by me as part of a <a target="_blank" rel="noreferrer" href="https://devjam.vercel.app/projects"><strong>developer challenge</strong></a> using React on the frontend and node/express and MongoDB on the backend. It allows users to vote anonymously on polls posted by other users, as well as post their own polls. </ProjectDescriptionText>
					</ProjectDescription>
					<ProjectLinks>
						<a target="_blank" rel="noreferrer" href='https://github.com/IAmRobertJeffrey/VotingApp'><ProjectLink type='button'>Github Repository</ProjectLink></a>
						<a target="_blank" rel="noreferrer" href='https://roberts-voting-app.web.app/'><ProjectLink type='button'>Live Website</ProjectLink></a>
					</ProjectLinks>
				</Project>
			</ProjectsWrapper>
			<ContactWrapper>
				<ContactFormWrapper>

					<ContactForm ref={formRef}>
						<ContactHeading color={colors.blue}>Contact Me 📝</ContactHeading>
						<FormSuccessLabel>{formSuccess}</FormSuccessLabel>
						<FormErrorLabel>{nameError}</FormErrorLabel>
						<NameInput name='name' ref={contactRef} color={nameColor} onChange={(e) => setName(e.target.value)} value={name} type={"text"} placeholder='Name*' required={true} />
						<FormErrorLabel>{emailError}</FormErrorLabel>
						<EmailInput name='email' color={emailColor} onChange={(e) => setEmail(e.target.value)} value={email} type={"email"} placeholder='Email*' required={true} />
						<FormErrorLabel>{messageError}</FormErrorLabel>
						<MessageInput name='message' color={messageColor} onChange={(e) => setMessage(e.target.value)} value={message} placeholder='Message*' required={true} />

						<CaptchaErrorLabel>{captcha}</CaptchaErrorLabel>
						<ReCAPTCHA style={{ marginBottom: "2rem" }}
							onChange={onReCaptcha}
							sitekey={process.env.REACT_APP_SITE_KEY}

						/>
						<SubmitButton onClick={(e) => handleContactSubmit(e)} type={"submit"}>Submit</SubmitButton>

					</ContactForm>
				</ContactFormWrapper>
				<ContactIconWrapper>
					<GrContact className='grIcon' size={"350px"} />
				</ContactIconWrapper>
			</ContactWrapper>
		</HomePageWrapper>
	)
}

export default HomePage