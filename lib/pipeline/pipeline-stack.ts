import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

export class PipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'Sean-Pipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.connection('chosh0615/aws-cdk-sample', 'main', {
          connectionArn: "arn:aws:codestar-connections:ap-northeast-2:007816030679:connection/72aaa5b5-045e-4706-8093-b8e26b9ad84a"
        }),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });
  }
}
