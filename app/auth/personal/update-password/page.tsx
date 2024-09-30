import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Update Password",
	description: "Did you forget your password ? Let’s help you reset it.",
};

const Index = (): JSX.Element => {
	return (
		<form className="w-full">
			<h1 className="text-black/100 font-medium text-2xl/10">
				Reset Password
			</h1>

			<div className="space-y-8 mt-8">
				<label
					className="block"
					htmlFor="newPassword"
				>
					<input
						className="input"
						type="password"
						placeholder="New Password"
						name="newPassword"
					/>
				</label>

				<label
					className="block"
					htmlFor="confirmPassword"
				>
					<input
						className="input"
						type="password"
						placeholder="Confirm Password"
						name="confirmPassword"
					/>
				</label>

				<button
					className="submit-btn"
					type="submit"
				>
					Update
				</button>
			</div>
		</form>
	);
};

export default Index;
