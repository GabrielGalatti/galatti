const types = require('./project-types');

const inquirer = require('inquirer');
const shell = require('shelljs');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const execa = require('execa');
const Listr = require('listr');
const { projectInstall } = require('pkg-install');

const createProject = async function (type, args) {
	const questionsDone = await createQuestions(type, args);

	const project_type = !type ? questionsDone.type : type;
	const common_setup = !args.yes ? questionsDone.yes : args.yes;
	const install_package = !args.package ? questionsDone.package : args.package;
	const init_git = !args.git ? questionsDone.git : args.git;
	
	//cria a pasta do projeto
	createProjectFolder(questionsDone.projectName);
	
	if(common_setup) return await generateProject({project_type, install_package: true, init_git: true, project_name: questionsDone.projectName});
	
	return await generateProject({project_type, install_package, init_git, project_name: questionsDone.projectName});
};

const createQuestions = async function (type, args){
	let questions = [];

	questions.push({ type: 'input', name: 'projectName', message: 'Digite o nome de seu projeto:' })

	if (!type)
		questions.push({ type: 'list', name: 'type', message: 'Selecione o tipo de projeto:', choices: types });

	if (args.yes)
		return await makeQuestions(questions);

	if (!args.git && !args.yes)
		questions.push({ type: 'confirm', name: 'git', message: 'Deseja iniciar o repositório git no projeto?', default: false });

	if (!args.package && !args.yes)
		questions.push({ type: 'confirm', name: 'package', message: 'Deseja instalar os node_modules do projeto?', default: false});

	if (!args.yes) return await makeQuestions(questions);

}

const makeQuestions = async function (questions) {
	const answers = await inquirer.prompt(questions);
	return answers;
};

const createProjectFolder = function (projectName) {
	return shell.mkdir('-p', path.resolve(process.cwd()), projectName);
}

const copyTemplateFiles = async function(templateType, projectName){
	const currentFileUrl = __filename;

	const templateDir = path.resolve(
		new URL(`${currentFileUrl}`).pathname,
		'../../templates',
		templateType.toLowerCase()
	)

	shell.cd(projectName);

	return shell.cp('-r', `${templateDir}/*`, process.cwd())
}

const initGit = async function(){
	const result = await execa('git', ['init'], {
        cwd: process.cwd(),
	});
	
	if(result.failed) console.error('Falha na inicialização do git');
}

const generateProject = async function(project){
	const {project_type, install_package, project_name, init_git} = project;

	const tasks = new Listr([
		{
			title: 'Geração do projeto',
			task: () => copyTemplateFiles(project_type, project_name) 
		},
		{
			title: 'Iniciar repositório GIT',
			task: () => initGit(),
			skip: () => !init_git ? 'Passe -g para inicializar o repositório git em seu projeto' : undefined
		},
		{
			title: 'Instalação de dependências',
			task: () => projectInstall({
				cwd: process.cwd()
			}),
			skip: () => !install_package ? 'Passe -p para instalar as dependências em seu projeto' : undefined
		}
	])

	await tasks.run();
	return process.exit(1);
}

module.exports = {
	createProject
};
