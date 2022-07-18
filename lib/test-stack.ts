import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Table, AttributeType, BillingMode } from 'aws-cdk-lib/aws-dynamodb';
import { Code, Function, FunctionUrlAuthType, Runtime } from 'aws-cdk-lib/aws-lambda';


//  A stack is a collection of AWS resources that you can manage as a single unit.
//  Docs: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html
export class TestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Dynamo Table declaration:
    const myTable = new Table(this, 'test_table_this', {
      billingMode: BillingMode.PAY_PER_REQUEST,
      partitionKey: { name: 'id', type: AttributeType.STRING },
      tableName: 'test_table'
    })

    // Lambda function declaration (we declare layers here as well)
    const func = new Function(this, 'func', {
      runtime: Runtime.NODEJS_16_X,
      code: Code.fromAsset("lib/lambda"),
      handler: "app.handler",
      environment: {
        MY_TABLE: myTable.tableName
      }
    })

    // Function URL - is printed in terminal on successful deployment
    const { url } = func.addFunctionUrl({ authType: FunctionUrlAuthType.NONE })
    new CfnOutput(this, "fnURL", { value: url })

    myTable.grantReadWriteData(func);
  }
}
