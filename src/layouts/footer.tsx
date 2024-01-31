import './layout.css';

export const Footer = () => {
	return (
		<footer>
			<div className="container">
				<a className="text-white text-3xl font-normal mb-[35px]" href="#!">LOGO</a>
				<ul className="flex items-center gap-[41px] justify-center">
					<li>
						<a
							className="text-white text-lg font-normal leading-10"
							href="#servise"
						>
							О сервисе
						</a>
					</li>
					<li>
						<a
							className="text-white text-lg font-normal leading-10"
							href="#advantages"
						>
							Преимущества
						</a>
					</li>
					<li>
						<a
							className="text-white text-lg font-normal leading-10"
							href="#price"
						>
							Тарифы
						</a>
					</li>
					<li>
						<a
							className="text-white text-lg font-normal leading-10"
							href="#articles"
						>
							Статьи
						</a>
					</li>
					<li>
						<a
							className="text-white text-lg font-normal leading-10"
							href="#order"
						>
							Заказать
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}
