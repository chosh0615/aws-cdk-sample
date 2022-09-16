import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class SomeService extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id);

        const handler = new lambda.Function(this, "SomeHandler", {
            runtime: lambda.Runtime.NODEJS_14_X, // So we can use async in widget.js
            code: lambda.Code.fromAsset("resources"),
            handler: "echo.main",
        });
    }
}