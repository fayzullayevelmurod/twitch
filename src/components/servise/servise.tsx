import assets from "../../assets";

export const Servise = () => (
	<div className="flex mb-40">
		<div className="relative">
			<img className="max-w-[600px]" src={assets.operator} alt="operator img" />
			<img className="absolute left-[67%] bottom-[-48px]" src={assets.dotsIcon} alt="dots" />
		</div>
		<div className="container text-gray font-normal">
			<div className="max-w-[576px] mx-auto mt-5">
				<h3 className="text-[57px] font-2MASS-J1808 uppercase leading-[100%] mb-[46px]">О сервисе</h3>
				<p className="text-lg">Каковы преимущества работы с нами? Предлагаем уникальные возможности для значительного увеличения аудитории вашего канала на Twitch. Наш личный кабинет поможет вам привлечь больше зрителей, увеличить количество просмотров и получить новых подписчиков.</p>
				<p className="mt-[66px] ">Мы гарантируем безопасность. Наш подход основан на  соблюдении политики безопасности и правил платформы. Мы не требуем ваш пароль или другие личные данные, что гарантирует полную конфиденциальность. Наша репутация подкреплена тысячами довольных клиентов, которые уже воспользовались нашими услугами и успешно развивают свои каналы на Twitch.</p>
			</div>
		</div>
	</div>
)
