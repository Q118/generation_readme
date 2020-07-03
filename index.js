/** @format */

const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

//sections: title, description, table of contents, installation,
// usage, license, badges, contributing , Tests, Questions

async function main() {
	try {
		const answers = await generateUserInfo();
		const html = renderHTML(answers);
		await writeFileAsync("README.md", html);
		console.log("created README.md!");
	} catch (error) {
		console.log(error);
	}
}
function generateUserInfo() {
	const questions = [
		{
			type: "input",
			message: "What is the title of your project?",
			name: "title",
		},
		{
			type: "input",
			message:
				"Describe your project; the what, why, and how in about 5-7 sentences.",
			name: "description",
		},
		{
			type: "input",
			message:
				"List which section you would like linked in your table of contents. (e.g. installation, usage, license, questions.)",
			name: "contents",
		},
		{
			type: "input",
			message: "What are the steps required to install your project?",
			name: "installation",
		},
		{
			type: "input",
			message:
				"What are the instructions and examples for use of your project?",
			name: "usage",
		},
		{
			type: "list",
			message:
				"To choose a license, select which of the following best describes your situation.",
			name: "license",
			choices: [
				"I need to work in a community",
				"I want it simple and permissive",
				"I care about sharing improvements",
			],
		},
		{
			type: "input",
			message: "What would you like to label your badge?(choose one word)",
			name: "badgeLabel",
		},
		{
			type: "input",
			message: "What message would you like on your badge?(choose one word)",
			name: "badgeMessage",
		},
		{
			type: "list",
			message: "Selct a color for your badge.",
			name: "badgeColor",
			choices: [
				"brightgreen",
				"yellowgreen",
				"orange",
				"yellow",
				"red",
				"blue",
				"purple",
			],
		},
		{
			type: "input",
			message:
				"Explain guidelines for how other developers can contribute to your project?",
			name: "contributing",
		},
		{
			type: "input",
			message:
				"Write out a test for your application with examples if applicable.",
			name: "tests",
		},
		{
			type: "input",
			message:
				"What is your github username for developers that have questions to contact you?",
			name: "username",
		},
	];
	return inquirer.prompt(questions);
}

function renderHTML({
	title,
	description,
	contents,
	installation,
	usage,
	license,
	badgeLabel,
	badgeMessage,
	badgeColor,
	contributing,
	tests,
	username,
}) {
return ' '

}
