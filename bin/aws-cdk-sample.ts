#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCdkSampleStack } from '../lib/aws-cdk-sample-stack';
import {PipelineStack} from "../lib/pipeline/pipeline-stack";

const app = new cdk.App();
// new AwsCdkSampleStack(app, 'AwsCdkSampleStack', {
//   /* If you don't specify 'env', this stack will be environment-agnostic.
//    * Account/Region-dependent features and context lookups will not work,
//    * but a single synthesized template can be deployed anywhere. */
//
//   /* Uncomment the next line to specialize this stack for the AWS Account
//    * and Region that are implied by the current CLI configuration. */
//   // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
//
//   /* Uncomment the next line if you know exactly what Account and Region you
//    * want to deploy the stack to. */
//   env: { account: '007816030679', region: 'ap-northeast-2' },
//
//   /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
// });

new PipelineStack(app, 'MyPipelineStack', {
  env: {
    account: '154533163640',
    region: 'ap-northeast-2',
  }
});

app.synth();

