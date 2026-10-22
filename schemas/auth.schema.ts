import { z } from "zod";

// Register Form Schema
export const registerSchema = z.object({
	name: z.string().min(2, { message: "Ad Soyad en az 2 karakter olmalıdır." }),
	email: z.email({ message: "Geçerli bir e-posta adresi giriniz." }),
	password: z.string().min(6, { message: "Şifre en az 6 karakter olmalıdır." }),
});

export type RegisterFormData = z.infer<typeof registerSchema>;

// Login Form Schema
export const loginSchema = z.object({
	email: z.email({ message: "Geçerli bir e-posta adresi giriniz." }),
	password: z.string().min(6, { message: "Şifre en az 6 karakter olmalıdır." }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
