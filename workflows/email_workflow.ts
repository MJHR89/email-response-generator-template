import { DefineWorkflow, Schema } from "deno-slack-sdk/mod.ts";
import { EmailListenerFunction } from "../functions/email_listener_function.ts";

// Add the definition below
const EmailWorkflow = DefineWorkflow({
  callback_id: "email_workflow",
  title: "Email workflow",
  description: "Workflow listens for emails and creates responses to them",
  input_parameters: {
    properties: {
      message_ts: {
        type: Schema.types.string,
      },
      channel_id: {
        type: Schema.types.string,
      },
    },
    required: ["message_ts", "channel_id"],
  },
});

// Add the handler below - steps
EmailWorkflow.addStep(EmailListenerFunction, {
  message_ts: "<PASS THE MESSAGE_TS FROM THE DEFINITION>",
  channel_id: "<PASS THE CHANNEL_ID FROM THE DEFINITION>",
});

export default EmailWorkflow;
