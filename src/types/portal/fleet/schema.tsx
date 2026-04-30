import * as z from "zod";
export const FleetRegistrationschema = z.object({
  categoryId: z.string().min(1, { message: "Category is required" }),
  fleetName: z.string().min(1, { message: "Fleet Name is required" }),
  noOfPassenger: z.coerce
    .number()
    .min(1, { message: "Number Of Passenger is required" }),
  noOfLuggage: z.coerce
    .number()
    .min(1, { message: "Number Of Luggage is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  statusId: z.string().min(1, { message: "Status is required" }),
});
export type FleetRegistrationType = z.infer<typeof FleetRegistrationschema>;
