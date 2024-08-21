/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Common_PyExpression } from "./Common_PyExpression";
import type { Tasks_EmbedStep } from "./Tasks_EmbedStep";
import type { Tasks_EvaluateStep } from "./Tasks_EvaluateStep";
import type { Tasks_GetStep } from "./Tasks_GetStep";
import type { Tasks_LogStep } from "./Tasks_LogStep";
import type { Tasks_PromptStep } from "./Tasks_PromptStep";
import type { Tasks_SearchStep } from "./Tasks_SearchStep";
import type { Tasks_SetStep } from "./Tasks_SetStep";
import type { Tasks_ToolCallStep } from "./Tasks_ToolCallStep";
export type Tasks_ForeachDo = {
  /**
   * The variable to iterate over.
   * VALIDATION: Should NOT return more than 1000 elements.
   */
  in: Common_PyExpression;
  /**
   * The steps to run for each iteration
   */
  do:
    | Tasks_EvaluateStep
    | Tasks_ToolCallStep
    | Tasks_PromptStep
    | Tasks_GetStep
    | Tasks_SetStep
    | Tasks_LogStep
    | Tasks_EmbedStep
    | Tasks_SearchStep;
};
