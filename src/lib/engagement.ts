export const engagementTypes = ["Full-time", "Part-time", "Contract"] as const;

export type EngagementType = (typeof engagementTypes)[number];

export function isEngagementType(value: string): value is EngagementType {
  return (engagementTypes as readonly string[]).includes(value);
}
