interface ITableLoading {
	row: number;
	col: number;
}

const TableLoading: React.FC<ITableLoading> = ({ row, col }) => {
	return (
		<div>
			{[...Array(col)].map((_, colIndex) => (
				<div
					key={colIndex}
					className="flex flex-col gap-2"
				>
					<div className="flex flex-row justify-between items-center ">
						{[...Array(row)].map((_, rowIndex) => (
							<div
								key={rowIndex}
								className="leading-relaxed mb-2 h-5 animate-pulse bg-gray-200"
								style={{ width: `calc(${100 / row}% - 1rem)` }}
							></div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default TableLoading;
