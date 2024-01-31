import { ChangeEvent, useState } from 'react';
import './prices.css';
export const Prices: React.FC = () => {
	const [sliderValue, setSliderValue] = useState<number>(50);
	const [sliderValue2, setSliderValue2] = useState<number>(50);
	const [sliderValue3, setSliderValue3] = useState<number>(50);
	const [selectedValue, setSelectedValue] = useState("1");

	const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSliderValue(parseInt(event.target.value, 10));
	};

	const handleSliderChange2 = (event: ChangeEvent<HTMLInputElement>) => {
		setSliderValue2(parseInt(event.target.value, 10));
	};

	const handleSliderChange3 = (event: ChangeEvent<HTMLInputElement>) => {
		setSliderValue3(parseInt(event.target.value, 10));
	};


	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};



	return (
		<div className='prices mt-[50px] pt-[330px] pb-[20rem]' id='price'>
			<div className="container">
				<h2 className="title-text__white pb-[58px]">
					Услуги и цены
				</h2>

				<div className="prices-boxes">
					<div className="price-box bg-white rounded-[0.75rem] rounded-br-[6.25rem]">
						<div className='bg-pink w-full relative overflow-hidden rounded-[0.75rem] flex items-center rounded-br-[6.25rem] justify-center h-[6rem] text-white'>
							<div className="absolute bottom-[-22px] left-[-25px] h-11 px-5 py-2.5 origin-top-left -rotate-45 bg-gradient-to-r from-cyan-300 to-sky-500"><div className="w-[7.1rem] text-center text-white text-sm font-normal font-2MASS-J1808 uppercase leading-[0.9rem]">
								хит <br />  продаж
							</div>
							</div>
							<h2 className='text-2xl font-normal font-2MASS-J1808 uppercase leading-[3.45rem]'>ЗРИТЕЛИ</h2>
						</div>
						<div className='px-[35px] font-normal text-gray text-[17px] pb-[62px]'>
							<ul className='w-[230px] space-y-[25px] pl-[17px] list-disc mt-8 mb-11'>
								<li>Авторизованные зрители</li>
								<li>Расхождение до 5%</li>
								<li>Обход проверок</li>
								<li>Техническая поддержка</li>
								<li>Полный возврат средств при неполадках</li>
							</ul>
							<p>Выберите количество зрителей:</p>
							<div className='mt-6 mb-7'>
								<div className="range-slider w-full">
									<div className='border border-pink border-solid py-1.5 pl-5 rounded-md text-[17px] font-normal w-[166px] mb-6' id="tooltip">{sliderValue}</div>
									<input
										className='range-slider__range'
										id="range"
										type="range"
										step="10"
										value={sliderValue}
										min="0"
										max="800"
										onChange={handleSliderChange}
									/>
								</div>
							</div>
							<p>Выберите период:</p>
							<div className='mt-3 mb-7 relative sel'>
								<select onChange={handleChange} className='relative outline-none pl-[19px] w-[166px] rounded-[0.5rem] border border-pink border-5 border-solid h-[2.6rem] text-[1.06rem] font-normal leading-[1.9rem] rounded-7'>
									<option disabled selected>Месяц</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
								</select>
								<div className='down-icon'>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 18 10" fill="none">
										<path d="M1 0.5L9 8.5L17 0.5" stroke="#9146FF" />
									</svg>
								</div>
							</div>
							<a className='btn-md' href="#!">купить за 1500Р</a>
						</div>
					</div>
					<div className="price-box bg-white rounded-[0.75rem] rounded-br-[6.25rem]">
						<div className='bg-[#631DCA] w-full relative overflow-hidden rounded-[0.75rem] flex items-center rounded-br-[6.25rem] justify-center h-[6rem] text-white'>
							<h2 className='text-2xl font-normal font-2MASS-J1808 uppercase leading-[3.45rem]'>Фолловеры</h2>
						</div>
						<div className='px-[35px] font-normal text-gray text-[17px] pb-[62px]'>
							<ul className=' space-y-[25px] pl-[17px] list-disc mt-8 mb-11'>
								<li>Пожизненная гарантия</li>
								<li>Расхождение до 5%</li>
								<li>На большой заказ цена меньше!</li>
								<li>Техническая поддержка</li>
								<li>Интервал подписок доступен в панели</li>
							</ul>
							<p>Выберите количество зрителей:</p>
							<div className='mt-6 mb-7'>
								<div className="range-slider w-full">
									<div className='border border-pink border-solid py-1.5 pl-5 rounded-md text-[17px] font-normal w-[166px] mb-6' id="tooltip">{sliderValue2}</div>
									<input
										className='range-slider__range'
										id="range"
										type="range"
										step="10"
										value={sliderValue2}
										min="0"
										max="800"
										onChange={handleSliderChange2}
									/>
								</div>
							</div>
							<p>Выберите период:</p>
							{/* <div className='mt-3 mb-7 relative sel'>
								<select onChange={handleChange} className='relative outline-none pl-[19px] w-[166px] rounded-[0.5rem] border border-pink border-5 border-solid h-[2.6rem] text-[1.06rem] font-normal leading-[1.9rem] rounded-7'>
									<option disabled selected>Месяц</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
								</select>
								<div className='down-icon'>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 18 10" fill="none">
										<path d="M1 0.5L9 8.5L17 0.5" stroke="#9146FF" />
									</svg>
								</div>
							</div> */}
							<a className='btn-md mt-[80px]' href="#!">купить за 1500Р</a>
						</div>
					</div>
					<div className="price-box bg-white rounded-[0.75rem] rounded-br-[6.25rem]">
						<div className='bg-[#4200A4] w-full relative overflow-hidden rounded-[0.75rem] flex items-center rounded-br-[6.25rem] justify-center h-[6rem] text-white'>
							<h2 className='text-2xl font-normal font-2MASS-J1808 uppercase leading-[3.45rem]'>Просмотры</h2>
						</div>

						<div className='px-[35px] font-normal text-gray text-[17px] pb-[62px]'>
							<ul className=' space-y-[25px] pl-[17px] list-disc mt-8 mb-11'>
								<li>Пожизненная гарантия</li>
								<li>Без расхождения</li>
								<li>На большой заказ цена меньше!</li>
								<li>Техническая поддержка</li>
								<li>Интервал просмотров доступен в панели</li>
							</ul>
							<p>Выберите количество зрителей:</p>
							<div className='mt-6 mb-7'>
								<div className="range-slider w-full">
									<div className='border border-pink border-solid py-1.5 pl-5 rounded-md text-[17px] font-normal w-[166px] mb-6' id="tooltip">{sliderValue3}</div>
									<input
										className='range-slider__range'
										id="range"
										type="range"
										step="10"
										value={sliderValue3}
										min="0"
										max="800"
										onChange={handleSliderChange3}
									/>
								</div>
							</div>
							<p>Выберите период:</p>
							<div className='mt-3 mb-7 relative sel'>
								<select onChange={handleChange} className='relative outline-none pl-[19px] w-[166px] rounded-[0.5rem] border border-pink border-5 border-solid h-[2.6rem] text-[1.06rem] font-normal leading-[1.9rem] rounded-7'>
									<option disabled selected>Месяц</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
								</select>
								<div className='down-icon'>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 18 10" fill="none">
										<path d="M1 0.5L9 8.5L17 0.5" stroke="#9146FF" />
									</svg>
								</div>
							</div>
							<a className='btn-md' href="#!">купить за 1500Р</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}