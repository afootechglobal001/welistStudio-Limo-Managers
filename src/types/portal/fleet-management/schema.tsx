import * as z from "zod";
export const FleetCategoryRegistrationschema = z.object({
  categoryName: z.string().min(1, { message: "Category Name is required" }),
  categoryDescription: z
    .string()
    .min(1, { message: "Category Description is required" }),
  categoryCode: z.string().min(1, { message: "Category Code is required" }),
  statusId: z.string().min(1, { message: "Status is required" }),
});
export type FleetCategoryRegistrationType = z.infer<
  typeof FleetCategoryRegistrationschema
>;
