"use client"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Validation schema using Zod
const schema = z.object({
  firstName: z
    .string()
    .nonempty("First name is required")
    .max(50, "First name must be at most 50 characters long")
    .min(2, "First name must be at least 2 characters long"),
  lastName: z
    .string()
    .nonempty("Last name is required")
    .max(50, "Last name must be at most 50 characters long")
    .min(2, "Last name must be at least 2 characters long"),
  personalNumber: z
    .string()
    .regex(
      /^\d{6}-\d{4}$/,
      "Invalid Swedish personal number format (YYMMDD-XXXX)"
    )
    .nonempty("Personal number is required"), // max / min 13 characters
  address: z.string().nonempty("Address is required"), // max 100
  phoneNumber: z
    .string()
    .regex(/^\+46\d{9}$/, "Invalid phone number format") // fix this... 10-13, formattera till +46
    .nonempty("Phone number is required"),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"), // email validation
  occupation: z.string().nonempty("Occupation is required"),
});

type MembershipFormValues = z.infer<typeof schema>;

const MembershipForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MembershipFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: MembershipFormValues) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="pr-40">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <input className="border rounded-md py-1 px-1" {...register("firstName")} />
          {errors.firstName && (
            <p className="text-red-700">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label>Last Name:</label>
          <input className="border rounded-md py-1 px-1" {...register("lastName")} />
          {errors.lastName && (
            <p className="text-red-700">{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <label>Personal Number (YYMMDD-XXXX):</label>
          <input className="border rounded-md py-1 px-1" {...register("personalNumber")} />
          {errors.personalNumber && (
            <p className="text-red-700">{errors.personalNumber.message}</p>
          )}
        </div>

        <div>
          <label>Address:</label>
          <input className="border rounded-md py-1 px-1" {...register("address")} />
          {errors.address && (
            <p className="text-red-700">{errors.address.message}</p>
          )}
        </div>

        <div>
          <label>Phone Number:</label>
          <input className="border rounded-md py-1 px-1" {...register("phoneNumber")} />
          {errors.phoneNumber && (
            <p className="text-red-700">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div>
          <label>Email:</label>
          <input className="border rounded-md py-1 px-1" {...register("email")} />
          {errors.email && (
            <p className="text-red-700">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>Occupation / Study Program:</label>
          <input className="border rounded-md py-1 px-1" {...register("occupation")} />
          {errors.occupation && (
            <p className="text-red-700">{errors.occupation.message}</p>
          )}
        </div>

        <button className='w- border-2 border-teal-700 text-teal-700 rounded-xl px-1 py-1 hover:bg-teal-300 delay-100' type="submit">
          Next step
        </button>
      </form>
    </div>
  );
};

export default MembershipForm;
