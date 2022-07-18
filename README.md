# Test CDK TypeScript project

The `cdk.json` file instructs CDK Toolkit to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests

please check package.json and update with your AWS account instead of --profile hnariman

updated with custom profile, not to effect default one: 
* `npm run bootstrap` bootstraps cdk toolkit stack (if this is first time on current AWS account)
* `npm run synth`     generates CloudFormation file for the stack
* `npm run deploy`    deploy updated code to AWS
* `npm run destroy`   remove stack from CoudFormation (attention, this doesn't remove CDKToolkit stack, don't leave it, it may cause AWS charges)

- code in the cloud works through ts-node, 
hence we don't need to build/transpile to js and js files are ingored by cdk
while compressing lambda to zip and moving code into S3 bucket
