import { useEffect, useState } from "react"

export const Header = () => {
	const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'enabled');
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isButton1Clicked, setIsButton1Clicked] = useState<boolean>(false);

	useEffect(() => {
		document.documentElement.classList.toggle('dark', darkMode);
		localStorage.setItem('darkMode', darkMode ? 'enabled' : 'disabled');
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode(true);
		setIsButton1Clicked(true);
	};

	const handleButton2Click = () => {
		setDarkMode(false);
		setIsButton1Clicked(false);
	};

	return (
		<header className="flex items-center justify-between pt-8">
			<a className="text-white text-3xl font-normal" href="#!">LOGO</a>

			<nav>
				<ul className="flex items-center gap-[1.875rem]">
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
			</nav>
			<div className="border border-white border-solid rounded">
				<button
					className={`px-3 py-1.5 text-white rounded-l-sm rounded-r ${darkMode ? 'bg-pink' : 'bg-transparent'}`}
					onClick={toggleDarkMode}
				>тёмная</button>
				<button
					className={`px-3 py-1.5 rounded-r-sm rounded-l text-black-pink ${darkMode ? 'bg-transparent text-white' : 'bg-white text-black-pink'}`}
					onClick={handleButton2Click}
				>светлая</button>
			</div>

			<button
				className="px-4 h-[2.2rem] bg-violet-500 text-[1rem] text-white rounded border border-white "
			>Регистрация/Вход</button>
		</header >
	)
}
