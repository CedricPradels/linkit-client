export type Side = Record<"question" | "response", string>;

export type Sides = "recto" | "verso";

export type Card = Record<Sides, Side>;
