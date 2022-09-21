import * as cdk from 'aws-cdk-lib';
import { Construct } from "constructs";
import {AwsCdkSampleStack} from "./aws-cdk-sample-stack";

export class AppStage extends cdk.Stage {

    constructor(scope: Construct, id: string, props?: cdk.StageProps) {
        super(scope, id, props);

        const stack = new AwsCdkSampleStack(this, 'SampleStack');
    }
}