interface ISuccessIcon {
    className: string
};

const SuccessIcon: React.FC<ISuccessIcon> = ({ className }) => {
    return (
        <svg
            className={className}
			width="50"
			height="50"
			viewBox="0 0 50 50"
			fill="none"
		>
			<circle
				cx="25"
				cy="25"
				r="25"
				fill="#27AE60"
				fillOpacity="0.1"
			/>
			<g clipPath="url(#clip0_167_229)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M13 25.5C13 22.1848 14.317 19.0054 16.6612 16.6612C19.0054 14.317 22.1848 13 25.5 13C28.8152 13 31.9946 14.317 34.3388 16.6612C36.683 19.0054 38 22.1848 38 25.5C38 28.8152 36.683 31.9946 34.3388 34.3388C31.9946 36.683 28.8152 38 25.5 38C22.1848 38 19.0054 36.683 16.6612 34.3388C14.317 31.9946 13 28.8152 13 25.5V25.5ZM24.7867 30.85L31.9833 21.8533L30.6833 20.8133L24.5467 28.4817L20.2 24.86L19.1333 26.14L24.7867 30.8517V30.85Z"
					fill="#27AE60"
				/>
			</g>
			<defs>
				<clipPath id="clip0_167_229">
					<rect
						width="25"
						height="25"
						fill="white"
						transform="translate(13 13)"
					/>
				</clipPath>
			</defs>
		</svg>
	);
};

export default SuccessIcon;
