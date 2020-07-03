/** @format */

const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

//sections: title, description, table of contents, installation,
// usage, license, badges, contributing , Tests, Questions

main();

async function main() {
	try {
		const answers = await generateUserInfo();
		const html = renderHTML(answers);
		await writeFileAsync("READMEtest.md", html);
		console.log("created READMEtest.md!");
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
			type: "checkbox",
			message:
				"Select which sections you would like in your table of conents, as many as you like.",
			name: "contents",
			choices: [
				"title",
				"description",
				"contents",
				"installation",
				"usage",
				"license",
				"badgeLabel",
				"badgeMessage",
				"badgeColor",
				"contributing",
				"tests",
				"username",
			],
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
	return `
    title: ${title}
	description: ${description}
	contents:${contents}
	installation:${installation}
	usage: ${usage}
	license: ${license}
 	badgeLabel: ${badgeLabel}
	badgeMessage: ${badgeMessage}
	badgeColor: ${badgeColor}
	contributing: ${contributing}
	tests: ${tests}
	username: ${username}

`;
}
