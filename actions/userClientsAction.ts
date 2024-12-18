"use server";

import prisma from "./db";
import { z } from "zod";

const createClientSchema = z.object({
	fullName: z
		.string({
			message: "Please enter your full name",
		})
		.min(2, "Full name must be at least 2 characters")
		.trim(),
	email: z.string().email("Invalid email address"),
	phoneNumber: z
		.string()
		.regex(
			/^(?:\+234|234|0)\d{10}$/,
			"Phone number must be a valid Nigerian phone number",
		),
});

export const createClientAccount = async (data: {
	userName: string;
	userEmail: string;
	sessionID: string;
	userID: string;
	clientName: string;
	clientEmail: string;
	phoneNumber: string;
}) => {
	try {
		const validatedFields = createClientSchema.safeParse({
			fullName: data.clientName.trim(),
			email: data.clientEmail.trim(),
			phoneNumber: data.phoneNumber.trim(),
		});

		if (!validatedFields.success) {
			return {
				status: "error" as const,
				message: `Error on ${validatedFields.error.errors[0].path[0]} field. ${validatedFields.error.errors[0].message}`,
			};
		}

		const getUserDetails = await prisma.user.findFirstOrThrow({
			where: {
				email: data.userEmail,
				sessionID: data.sessionID,
				fullName: data.userName,
				id: data.userID,
			},
		});

		if (getUserDetails) {
			const userClientEmailExists = await prisma.userClients.findFirst({
				where: {
					email: data.clientEmail,
					customerID: data.userID,
				},
			});

			if (userClientEmailExists) {
				return {
					status: "error" as const,
					message: "Client with this email already exists.",
				};
			}

			const userClientPhoneNumberExists =
				await prisma.userClients.findFirst({
					where: {
						phoneNumber: data.phoneNumber,
						customerID: data.userID,
					},
				});

			if (userClientPhoneNumberExists) {
				return {
					status: "error" as const,
					message: "Client with this phone number already exists.",
				};
			}

			const createClient = await prisma.userClients.create({
				data: {
					fullName: data.clientName,
					email: data.clientEmail,
					phoneNumber: data.phoneNumber,
					customer: {
						connect: { id: data.userID },
					},
				},
			});

			return {
				status: "success" as const,
				message: "Client added successfully.",
				data: createClient,
			};
		}

		return {
			status: "error" as const,
			message: "An error occured. Please try again later.",
			data: null,
		};
	} catch (error: any) {
		if (error.name === "NotFoundError") {
			return {
				status: "error" as const,
				message: "Invalid user or session ID. Please log in again.",
				data: null,
			};
		}

		return {
			status: "error" as const,
			message: error.message,
		};
	}
};

export const fetchClient = async ({
	userEmail,
	sessionID,
	userName,
	userID,
}: {
	userEmail: string;
	sessionID: string;
	userName: string;
	userID: string;
}) => {
	try {
		const getUserDetails = await prisma.user.findFirstOrThrow({
			where: {
				email: userEmail,
				sessionID: sessionID,
				fullName: userName,
				id: userID,
			},
		});

		if (getUserDetails) {
			const getClients = await prisma.userClients.findMany({
				where: {
					customerID: userID,
				},
			});

			return {
				status: "success" as const,
				message: "Clients retrieved successfully.",
				data: getClients,
			};
		}

		return {
			status: "error" as const,
			message: "An error occured. Please try again later.",
			data: null,
		};
	} catch (error: any) {
		if (error.name === "NotFoundError") {
			return {
				status: "error" as const,
				message: "Invalid user or session ID. Please log in again.",
				data: null,
			};
		}

		return {
			status: "error" as const,
			message: error.message,
		};
	}
};

export const updateClientAccount = async (data: {
	userName: string;
	userEmail: string;
	sessionID: string;
	userID: string;
	clientName: string;
	clientEmail: string;
    phoneNumber: string;
    clientID: string
}) => {
	try {
		const validatedFields = createClientSchema.safeParse({
			fullName: data.clientName.trim(),
			email: data.clientEmail.trim(),
			phoneNumber: data.phoneNumber.trim(),
		});

		if (!validatedFields.success) {
			return {
				status: "error" as const,
				message: `Error on ${validatedFields.error.errors[0].path[0]} field. ${validatedFields.error.errors[0].message}`,
			};
		}

		const getUserDetails = await prisma.user.findFirstOrThrow({
			where: {
				email: data.userEmail,
				sessionID: data.sessionID,
				fullName: data.userName,
				id: data.userID,
			},
		});

		if (getUserDetails) {
			const userClientEmailExists = await prisma.userClients.findFirst({
				where: {
					email: data.clientEmail,
					customerID: data.userID,
				},
			});

			if (
				userClientEmailExists &&
				userClientEmailExists.id !== data.clientID
			) {
				return {
					status: "error" as const,
					message: "Client with this email already exists.",
				};
			}

			const userClientPhoneNumberExists =
				await prisma.userClients.findFirst({
					where: {
						phoneNumber: data.phoneNumber,
						customerID: data.userID,
					},
				});

			if (
				userClientPhoneNumberExists &&
				userClientPhoneNumberExists.id !== data.clientID
			) {
				return {
					status: "error" as const,
					message: "Client with this phone number already exists.",
				};
			}

			const updateClient = await prisma.userClients.update({
				data: {
					fullName: data.clientName,
					email: data.clientEmail,
					phoneNumber: data.phoneNumber,
                },
                where: {
                    id: data.clientID
                }
			});

			return {
				status: "success" as const,
				message: "Client details updated successfully.",
				data: updateClient,
			};
		}

		return {
			status: "error" as const,
			message: "An error occured. Please try again later.",
			data: null,
		};
	} catch (error: any) {
		if (error.name === "NotFoundError") {
			return {
				status: "error" as const,
				message: "Invalid user or session ID. Please log in again.",
				data: null,
			};
		}

		return {
			status: "error" as const,
			message: error.message,
		};
	}
};

export const deleteClientAccount = async ({
	userEmail,
	sessionID,
	userName,
	userID,
	clientID,
}: {
	userEmail: string;
	sessionID: string;
	userName: string;
	userID: string;
	clientID: string;
}) => {
	try {
		const getUserDetails = await prisma.user.findFirstOrThrow({
			where: {
				email: userEmail,
				sessionID: sessionID,
				fullName: userName,
				id: userID,
			},
		});

		const deleteClient = await prisma.userClients.findFirst({
			where: {
				id: clientID,
			},
		});

        if (!deleteClient) {
            return {
				status: "error" as const,
				message: "Client not found.",
				data: null,
			};
		}

		if (getUserDetails) {
			const deleteClient = await prisma.userClients.delete({
				where: {
					id: clientID,
				},
			});

			return {
				status: "success" as const,
				message: "Client deleted successfully.",
				data: deleteClient,
			};
		}

		return {
			status: "error" as const,
			message: "An error occured. Please try again later.",
			data: null,
		};
	} catch (error: any) {
		if (error.name === "NotFoundError") {
			return {
				status: "error" as const,
				message: "Invalid user or session ID. Please log in again.",
				data: null,
			};
		}

		return {
			status: "error" as const,
			message: error.message,
		};
	}
};
