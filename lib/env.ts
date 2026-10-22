// Centralized environment variables utility
const getEnvVariable = (key: string): string => {
	const value = process.env[key];

	if (!value) {
		throw new Error(
			`[Env Error]: Missing environment variable "${key}". Please check your .env file.`,
		);
	}

	return value;
};

export const env = {
	SUPABASE_URL: getEnvVariable("EXPO_PUBLIC_SUPABASE_URL"),
	SUPABASE_ANON_KEY: getEnvVariable("EXPO_PUBLIC_SUPABASE_ANON_KEY"),
} as const;
