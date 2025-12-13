export interface Option {
  id: string;
  label: string; // The display text (Thai + English)
  value: string; // The prompt keywords (English)
}

export interface GenerationConfig {
  pose: string;
  angles: string[];
  theme: string;
  ratio: string;
}

export type AspectRatio = "1:1" | "3:4" | "4:3" | "9:16" | "16:9";