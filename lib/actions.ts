"use server";

import prisma from "./db";
import { z } from "zod";

export const businessLogin = async (_: any, data: FormData) => {
    try {
        const getUser = await prisma.business.findUniqueOrThrow({
            where: {
                companyEmail: data.get("email") as string ?? "",
                password: data.get("password") as string ?? "",
            },
        });

        return {
			status: "success",
			message:
				"Login successful. Redirecting to dashboard...",
			data: getUser
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
