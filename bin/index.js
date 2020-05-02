#!/usr/bin/env node

const { program } = require("commander");
const { createProject } = require("../lib/create-project");
const list = require("../lib/list-types");

program
  .command("create [type]")
  .alias("c")
  .description("Create a project")
  .option("-g, --git, inicializar repositório git")
  .option("-p, --package, instalar node modules")
  .option("-y, --yes, criar projeto da maneira padrão")
  .action(function (type, args) {
    createProject(type, args);
  });

program
  .command("types")
  .alias("t")
  .description("List project types")
  .action(function () {
    list();
  });

program.parse(process.argv);
