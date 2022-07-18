# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

please check package.json and update with your AWS account instead of --profile hnariman
* `npm run bootstrap` bootstraps cdk toolkit stack (if this is first time on current AWS account)
* `npm run synth`     generates CloudFormation file for the stack
* `npm run deploy`    deploy updated code to AWS
* `npm run destroy`   remove stack from CoudFormation (attention, this doesn't remove CDKToolkit stack, don't leave it, it may cause AWS charges)
