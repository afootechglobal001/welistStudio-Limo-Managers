import * as z from "zod";
export const FleetRegistrationschema = z.object({
  categoryId: z.string().min(1, { message: "Category is required" }),
  carMake: z.string().min(1, { message: "Car Make is required" }),
  carModel: z.string().min(1, { message: "Car Model is required" }),
  carYear: z.coerce.number().min(1, { message: "Car Year is required" }),
  plateNumber: z.string().min(1, { message: "Plate Number is required" }),
  noOfPassenger: z.coerce
    .number()
    .min(1, { message: "Number Of Passenger is required" }),
  noOfLuggage: z.coerce
    .number()
    .min(1, { message: "Number Of Luggage is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  provider: z.string().optional(),
  statusId: z.string().min(1, { message: "Status is required" }),
});
export type FleetRegistrationType = z.infer<typeof FleetRegistrationschema>;
