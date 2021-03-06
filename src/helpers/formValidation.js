import { colors } from "./colors/colors"

export const validateForm = (recaptchaRef, name, setName, setNameColor, email, setEmail, setEmailColor, message, setMessage, setMessageColor, setNameError, setEmailError, setMessageError) =>
{
	let checkEmpty = true;

	if (name.trim() === "")
	{
		checkEmpty = false;
		setName("")
		setNameColor("red")
		setNameError("Name Field must not be left empty.")
		recaptchaRef.reset();

	}
	else
	{
		setNameError("")
		setNameColor(colors.blue)
	}
	if (email.trim() === "")
	{
		checkEmpty = false;
		setEmail("")
		setEmailColor("red")
		setEmailError("Email Field must not be left empty.")
		recaptchaRef.reset();

	}
	else
	{
		setEmailError("")
		setEmailColor(colors.blue)

		if (!email.includes("@"))
		{
			checkEmpty = false;
			setEmailColor("red")
			setEmailError("Email Field must include '@' symbol.")
			recaptchaRef.reset();
		}

	}
	if (message.trim() === "")
	{
		checkEmpty = false;
		setMessage("")
		setMessageColor("red")
		setMessageError("Message field must not be left empty.")
		recaptchaRef.reset();
	}
	else
	{
		setMessageError("")
		setMessageColor(colors.blue)
	}

	if (checkEmpty)
	{

		return true;

	}
	else
	{
		recaptchaRef.reset();
		return false;
	}

}

export const resetForm = (setName, setEmail, setMessage) =>
{
	setName("")
	setEmail("")
	setMessage("")
}