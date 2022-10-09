import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as some_service from './some_service';
import {SomeService} from "./some_service";

export class AwsCdkSampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    const queue = new sqs.Queue(this, 'AwsCdkSampleQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    // new some_service.SomeService(this, 'SomeService');
  }
}
