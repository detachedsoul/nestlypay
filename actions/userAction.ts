"use server";

import prisma from "./db";
import { z } from "zod";

const createUserSchema = z.object({
	fullName: z.string({
        message: "Please enter your full name"
    }).min(2, "Full name must be at least 2 characters").trim(),
	email: z.string().email("Invalid email address"),
	password: z.string().min(1, "Password is required"),
});

export const userLogin = async (_: any, data: FormData) => {
	try {
		const userDetails = await prisma.user.findUniqueOrThrow({
			where: {
				email: data.get("email")?.toString() ?? "",
				password: data.get("password")?.toString() ?? "",
			},
		});

		const updatedUser = await prisma.user.update({
			where: {
				email: data.get("email")?.toString() ?? "",
				password: data.get("password")?.toString() ?? "",
			},
			data: {
				sessionID: crypto.randomUUID(),
			},
		});

		return {
			status: "success",
			message: "Login successful. Redirecting to dashboard",
			data: {
				userID: userDetails.id,
				sessionID: updatedUser.sessionID,
				name: userDetails.fullName,
				email: userDetails.email,
			},
		};
	} catch (error: any) {
		if (error.name === "NotFoundError") {
			return {
				status: "error",
				message: "Incorrect email and/or password",
			};

		}

		return {
			status: "error",
			message: error.message,
		};
	}
};

export const createUserAccount = async (_: any, data: FormData) => {
	try {
		const validatedFields = createUserSchema.safeParse({
			fullName: data.get("fullName")?.toString().trim(),
			email: data.get("email")?.toString().trim(),
			password: data.get("password")?.toString().trim(),
		});

		if (!validatedFields.success) {
			return {
				status: "error",
				message: `Error on ${validatedFields.error.errors[0].path[0]} field. ${validatedFields.error.errors[0].message}`,
			};
		}

		const userEmailExists = await prisma.user.findFirst({
			where: {
				email: data.get("email")?.toString() ?? "",
			},
		});

		if (userEmailExists) {
			return {
				status: "error",
				message: "Email already exists.",
			};
		}

		const createAccount = await prisma.user.create({
			data: {
				fullName: data.get("fullName")?.toString() ?? "",
				email: data.get("email")?.toString() ?? "",
				password: data.get("password")?.toString() ?? "",
			},
		});

		return {
			status: "success",
			message: "Account created successfully.",
			data: createAccount,
		};
	} catch (error: any) {
		return {
			status: "error",
			message: error.message,
		};
	}
};

export const getUserDetails = async (data: { email: string; sessionID: string; name: string;  userID: string}) => {
	try {
		const getUserDetails = await prisma.user.findFirstOrThrow({
			where: {
				email: data.email,
				sessionID: data.sessionID,
                fullName: data.name,
                id: data.userID
			},
        });

		return {
			status: "success",
			message: "User details retrieved successfully.",
			data: getUserDetails,
		};
	} catch (error: any) {
		if (error.name === "NotFoundError") {
			return {
				status: "error",
				message: "Incorrect email and/or password",
				data: null,
			};
		}

		return {
			status: "error",
			message: error.message,
			data: null,
		};
	}
};

export const updateUserDetails = async (data: { email: string; sessionID: string; name: string;  userID: string}, formFields: Record<string, string | null | boolean>) => {
    try {
		let updatedFields = { ...formFields };

		for (const key in formFields) {
			const value = updatedFields[key];

			if (key === "phoneNumber" && value !== "") {
				const validatedFields = z
					.string()
					.regex(
						/^(?:\+234|234|0)\d{10}$/,
						"Phone number must be a valid Nigerian phone number",
					)
					.optional()
					.safeParse(value);

				if (!validatedFields.success) {
					return {
						status: "error" as const,
						message: `Error on phone number field. ${validatedFields.error.errors[0].message}`,
					};
				}
			}

            if (key === "accountNumber" && value !== "") {
				const validatedFields = z
					.string()
					.regex(
						/^\d{10}$/,
						"Account number must ba a number and exactly 10 digits",
					)
					.max(10, "Account number must be exactly 10 digits")
					.optional()
					.safeParse(value);

				if (!validatedFields.success) {
					return {
						status: "error" as const,
						message: `Error on account number field. ${validatedFields.error.errors[0].message}`,
					};
				}
			}

			if (value === "") {
				updatedFields[key] = null;
			}
		}

		const updatedDetails = await prisma.user.update({
			data: {
				...updatedFields,
			},
			where: {
				email: data.email,
				sessionID: data.sessionID,
				fullName: data.name,
				id: data.userID,
			},
		});

		return {
			status: "success" as const,
			message: "Details updated successfully.",
			data: updatedDetails,
		};
	} catch (error: any) {
		if (error.code === "P2025") {
			return {
				status: "error" as const,
				message:
					"The user details could not be found. Please check your input and try again, or login again.",
			};
		}

		return {
			status: "error" as const,
			message: error.message,
			data: null,
		};
	}
};
