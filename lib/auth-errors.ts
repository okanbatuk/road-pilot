// lib/auth-errors.ts

export const translateAuthError = (errorMessage: string): string => {
	const message = errorMessage.toLowerCase();

	if (message.includes("invalid login credentials")) {
		return "E-posta veya şifre hatalı. Lütfen bilgilerinizi kontrol edin.";
	}
	if (
		message.includes("user already registered") ||
		message.includes("already in use")
	) {
		return "Bu e-posta adresi ile zaten kayıtlı bir hesap bulunuyor.";
	}
	if (message.includes("email not confirmed")) {
		return "E-posta adresiniz henüz doğrulanmamış. Lütfen gelen kutunuzu kontrol edin.";
	}
	if (message.includes("password should be at least")) {
		return "Şifreniz en az 6 karakter olmalıdır.";
	}
	if (message.includes("too many requests") || message.includes("rate limit")) {
		return "Çok fazla hatalı deneme yaptınız. Lütfen bir süre sonra tekrar deneyin.";
	}

	return "Bir hata oluştu. Lütfen bilgilerinizi kontrol edip tekrar deneyin.";
};
