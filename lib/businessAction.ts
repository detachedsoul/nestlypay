"use server";

import prisma from "./db";
import { z } from "zod";

const createBusinessSchema = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	email: z.string().email("Invalid email address"),
	companyName: z.string().min(1, "Company name is required"),
	companyEmail: z.string().email("Invalid email address"),
	address: z.string().min(1, "Company address is required"),
	country: z.string().min(1, "Country is required"),
	city: z.string().min(1, "City is required"),
	postalCode: z.string().min(1, "Postal code is required"),
	state: z.string().min(1, "State is required"),
	website: z.string().url().optional().nullable(),
	password: z.string().min(1, "Password is required"),
	confirmPassword: z.string().min(1, "Please confirm your password"),
});

export const businessLogin = async (_: any, data: FormData) => {
	try {
		const businessDetails = await prisma.business.findUniqueOrThrow({
			where: {
				email: data.get("email")?.toString() ?? "" ?? "",
				password: data.get("password")?.toString() ?? "" ?? "",
			},
        });

        const updatedUser = await prisma.business.update({
			where: {
				email: data.get("email")?.toString() ?? "" ?? "",
				password: data.get("password")?.toString() ?? "" ?? "",
			},
			data: {
				sessionID: crypto.randomUUID(),
			},
		});

		return {
			status: "success",
			message: "Login successful. Redirecting to dashboard",
			data: {
				userID: businessDetails.id,
				sessionID: updatedUser.sessionID,
				name: `${businessDetails.firstName} ${businessDetails.lastName}`,
				email: businessDetails.email,
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

export const checkBusinessUserEmail = async (_: any, data: FormData) => {
	try {
		await prisma.business.findFirstOrThrow({
			where: {
				email: data.get("email")?.toString() ?? "" ?? "",
			},
		});

		return {
			status: "error",
			message: "Email already exists.",
		};
	} catch (error: any) {
		return {
			status: "success",
			message: "Email address is available",
		};
	}
};

export const checkBusinessDetails = async (_: any, data: FormData) => {
	try {
		const companyEmailExists = await prisma.business.findFirst({
			where: {
				companyEmail: data.get("companyEmail")?.toString() ?? "" ?? "",
			},
		});

		if (companyEmailExists) {
			return {
				status: "error",
				message: "Compay email already exists.",
			};
		}

		const companyNameExists = await prisma.business.findFirst({
			where: {
				companyName: data.get("companyName")?.toString() ?? "" ?? "",
			},
		});

		if (companyNameExists) {
			return {
				status: "error",
				message: "Compay name already exists.",
			};
		}

		return {
			status: "success",
			message: "Company name and email are available",
		};
	} catch (error: any) {
		return {
			status: "error",
			message: error.message,
		};
	}
};

export const createBusinessAccount = async (_: any, data: FormData) => {
	try {
		const validatedFields = createBusinessSchema.safeParse({
			firstName: data.get("firstName")?.toString().trim(),
			lastName: data.get("lastName")?.toString().trim(),
			email: data.get("email")?.toString().trim(),
			companyName: data.get("companyName")?.toString().trim(),
			companyEmail: data.get("companyEmail")?.toString().trim(),
			address: data.get("address")?.toString().trim(),
			country: data.get("country")?.toString().trim(),
			city: data.get("city")?.toString().trim(),
			postalCode: data.get("postalCode")?.toString().trim(),
			state: data.get("state")?.toString().trim(),
			website:
				data.get("website")?.toString().trim() === ""
					? null
					: data.get("website")?.toString().trim(),
			password: data.get("password")?.toString().trim(),
			confirmPassword: data.get("confirmPassword")?.toString().trim(),
		});

		if (!validatedFields.success) {
			return {
				status: "error",
				message: `Error on ${validatedFields.error.errors[0].path[0]} field. ${validatedFields.error.errors[0].message}`,
			};
		}

		const companyEmailExists = await prisma.business.findFirst({
			where: {
				companyEmail: data.get("companyEmail")?.toString() ?? "" ?? "",
			},
		});

		if (companyEmailExists) {
			return {
				status: "error",
				message: "Compay email already exists.",
			};
		}

		const companyNameExists = await prisma.business.findFirst({
			where: {
				companyName: data.get("companyName")?.toString() ?? "" ?? "",
			},
		});

		if (companyNameExists) {
			return {
				status: "error",
				message: "Compay name already exists.",
			};
		}

		if (data.get("password") !== data.get("confirmPassword")) {
			return {
				status: "error",
				message: "Passwords do not match.",
			};
		}

		const createAccount = await prisma.business.create({
			data: {
				firstName: data.get("firstName")?.toString() ?? "",
				lastName: data.get("lastName")?.toString() ?? "",
				email: data.get("email")?.toString() ?? "",
				companyName: data.get("companyName")?.toString() ?? "",
				companyEmail: data.get("companyEmail")?.toString() ?? "",
				address: data.get("address")?.toString() ?? "",
				country: data.get("country")?.toString() ?? "",
				city: data.get("city")?.toString() ?? "",
				postalCode: data.get("postalCode")?.toString() ?? "",
				state: data.get("state")?.toString() ?? "",
				website: data.get("website")?.toString() ?? "",
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
