import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import {AppStage} from "../aws-cdk-sample-stage";

export class PipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'Sean-Pipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.connection('chosh0615/aws-cdk-sample', 'main', {
          connectionArn: "arn:aws:codestar-connections:ap-northeast-2:154533163640:connection/e1b82912-074e-4112-8c6c-f6527d227462"
        }),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });

    pipeline.addStage(new AppStage(this, 'beta-stage', {
      env: { account: "154533163640", region: "ap-northeast-2" }
    }));
  }
}
