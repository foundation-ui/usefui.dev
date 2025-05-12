/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateTokensLibrary } from "@foundation-ui/core";
import { engine_template } from "./engine-template";

enum TemplateType {
  LIBRARY = "LIBRARY",
  COLOR = "COLOR",
  MODULAR_SCALE = "MODULAR_SCALE",
  MODULAR_SEQUENCE = "MODULAR_SEQUENCE",
}

type GeneratorFunctionProperties = (
  name: string,
  template?: any,
) => {
  name: string;
  design_tokens: any;
};

type GeneratorTemplateProperties = {
  type: TemplateType;
  label: string;
  template: Record<string, any>[];
  fn: GeneratorFunctionProperties;
};

export const LibraryTemplate = {
  type: TemplateType.LIBRARY,
  label: "Generate Tokens Library",
  template: engine_template,
  fn: generateTokensLibrary,
} satisfies GeneratorTemplateProperties;
